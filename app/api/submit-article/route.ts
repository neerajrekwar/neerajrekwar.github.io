import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-static';

// Define the type for a post to be added
interface NewPost {
    slug: string;
    title: string;
    imageUrl: string;
    description: string;
    date: string;
    author: string;
    duration: string;
    content: string; // Simple content string from the form
}

const getFilePath = () => path.join(process.cwd(), 'app', 'blog', 'data', 'posts.json');

export async function GET() {
    try {
        const fileData = await fs.readFile(getFilePath(), 'utf-8');
        const posts = JSON.parse(fileData);
        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Error reading posts' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    // Important: This API route works in development but will not work on a static host like GitHub Pages
    // as it requires a writable file system on the server.
    try {
        const body = await request.json();
        const { title, description, content, imageUrl } = body;

        if (!title || !description || !content) {
            return NextResponse.json({ message: 'Title, description, and content are required.' }, { status: 400 });
        }

        const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
        const wordCount = content.trim().split(/\s+/).length;
        const readDuration = `${Math.ceil(wordCount / 200)} min read`;

        const newPost: NewPost = {
            slug: `${slug}-${Date.now()}`, // Add timestamp to ensure uniqueness
            title: title,
            imageUrl: imageUrl || "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // User image or Placeholder fallback
            description: description,
            date: new Date().toISOString().split('T')[0], // Format: YYYY-MM-DD
            author: "neerajrekwar",
            duration: readDuration,
            content: content
        };

        const fileData = await fs.readFile(getFilePath(), 'utf-8');
        const posts = JSON.parse(fileData);
        posts.unshift(newPost);
        await fs.writeFile(getFilePath(), JSON.stringify(posts, null, 2));

        return NextResponse.json({ message: 'Article submitted successfully!', post: newPost }, { status: 201 });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ message: 'An internal server error occurred.' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const { slug, title, description, content, imageUrl } = body;

        if (!slug || !title || !description || !content) {
            return NextResponse.json({ message: 'Slug, title, description, and content are required.' }, { status: 400 });
        }

        const wordCount = content.trim().split(/\s+/).length;
        const readDuration = `${Math.ceil(wordCount / 200)} min read`;

        const fileData = await fs.readFile(getFilePath(), 'utf-8');
        const posts = JSON.parse(fileData);
        
        const postIndex = posts.findIndex((p: any) => p.slug === slug);
        if (postIndex === -1) {
            return NextResponse.json({ message: 'Post not found.' }, { status: 404 });
        }

        posts[postIndex] = {
            ...posts[postIndex],
            title,
            imageUrl: imageUrl || posts[postIndex].imageUrl,
            description,
            duration: readDuration,
            content
        };

        await fs.writeFile(getFilePath(), JSON.stringify(posts, null, 2));

        return NextResponse.json({ message: 'Article updated successfully!', post: posts[postIndex] }, { status: 200 });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ message: 'An internal server error occurred.' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const slug = searchParams.get('slug');

        if (!slug) {
            return NextResponse.json({ message: 'Slug is required.' }, { status: 400 });
        }

        const fileData = await fs.readFile(getFilePath(), 'utf-8');
        let posts = JSON.parse(fileData);
        
        const initialLength = posts.length;
        posts = posts.filter((p: any) => p.slug !== slug);

        if (posts.length === initialLength) {
            return NextResponse.json({ message: 'Post not found.' }, { status: 404 });
        }

        await fs.writeFile(getFilePath(), JSON.stringify(posts, null, 2));

        return NextResponse.json({ message: 'Article deleted successfully!' }, { status: 200 });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ message: 'An internal server error occurred.' }, { status: 500 });
    }
}