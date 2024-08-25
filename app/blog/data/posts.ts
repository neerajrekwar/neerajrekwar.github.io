// data/posts.ts
import { BlogPost } from '../types/blog';

function generateSlug(title: string): string {
  return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

export const posts: BlogPost[] = [
  {
    id: '1',
    title: 'First Post, In every new lession in ship late',
    content: 'This is the content of the first post.',
    imageUrl: 'https://images.unsplash.com/photo-1724226224544-b244b08e505e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi aliquid cumque et distinctio facere consectetur amet',
    date: '2024-08-25',
    author: 'John Doe',
    slug: generateSlug('First Post'),
  },
  {
    id: '2',
    title: 'Second Post, hellow the the world the country is down',
    content: 'This is the content of the second post.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1692833836807-7c2ec90aec19?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'odio enim iure error nemo. Corporis pariatur accusantium vero optio hic ab nostrum?',
    date: '2024-09-26',
    author: 'Jane Smith',
    slug: generateSlug('second Post'),
  },
  {
    id: '3',
    title: 'third Post, hellow the the world the country is down',
    content: 'This is the content of the second post.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1692833836807-7c2ec90aec19?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'odio enim iure error nemo. Corporis pariatur accusantium vero optio hic ab nostrum?',
    date: '2024-09-26',
    author: 'Jane Smith',
    slug: generateSlug('third Post'),
  },
  {
    id: '4',
    title: 'four Post, hellow the the world the country is down',
    content: 'This is the content of the second post.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1692833836807-7c2ec90aec19?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'odio enim iure error nemo. Corporis pariatur accusantium vero optio hic ab nostrum?',
    date: '2024-09-26',
    author: 'Jane Smith',
    slug: generateSlug('third Post'),
  },
  {
    id: '5',
    title: 'five Post, hellow the the world the country is down',
    content: 'This is the content of the second post.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1692833836807-7c2ec90aec19?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'odio enim iure error nemo. Corporis pariatur accusantium vero optio hic ab nostrum?',
    date: '2024-09-26',
    author: 'Jane Smith',
    slug: generateSlug('Four Post'),
  },
  // Add more posts here...
];
