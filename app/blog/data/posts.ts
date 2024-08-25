// data/posts.ts
import { BlogPost } from '../types/blog';

export const posts: BlogPost[] = [
  {
    id: '1',
    title: 'First Post, In every new lession in ship late',
    content: 'This is the content of the first post.',
    imageUrl: 'https://images.unsplash.com/photo-1724226224544-b244b08e505e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'none 1',
    date: '2024-08-25',
    author: 'John Doe',
  },
  {
    id: '2',
    title: 'Second Post, hellow the the world the country is down',
    content: 'This is the content of the second post.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1692833836807-7c2ec90aec19?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'none 2',
    date: '2024-09-26',
    author: 'Jane Smith',
  },
  // Add more posts here...
];
