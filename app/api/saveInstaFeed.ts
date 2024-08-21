// pages/api/saveInstaFeed.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface Image {
  id: string;
  media_url: string;
  caption: string;
}

interface Feed {
  data: Image[];
}

async function fetchInstagramFeed(): Promise<Feed> {
  const url = `https://graph.instagram.com/v20.0/me/media?fields=id,username,media_url,caption,timestamp,media_type&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const feed = await fetchInstagramFeed();
      const latestPosts = feed.data.slice(0, 4); // Get the latest 4 posts

      // Save the data to feed.json in the database folder
      const filePath = path.join(process.cwd(), 'database', 'feed.json');
      fs.writeFileSync(filePath, JSON.stringify(latestPosts, null, 2));

      res.status(200).json({ message: 'Feed saved successfully', data: latestPosts });
    } catch (error) {
      res.status(500).json({ message: 'Error saving feed', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
