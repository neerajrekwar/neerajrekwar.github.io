"use client"
import React, { useEffect, useState } from 'react';

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

const InstaGallery: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const loadFeed = async () => {
      const feed = await fetchInstagramFeed();
      const latestPosts = feed.data.slice(0, 4); // Get the latest 4 posts
      setImages(latestPosts);
    };

    loadFeed();
  }, []);

  return (
    <>
      <div className="flex justify-center  space-x-1 bg-seven text-white p-2 rounded-md">
        {images.map((image) => (
          <div key={image.id} className="relative overflow-hidden w-1/4 ">
            <div className='overflow-hidden rounded-sm'>
            <img
              src={image.media_url}
              alt={image.caption}
              className="w-full h-auto object-cover"
            />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default InstaGallery;
