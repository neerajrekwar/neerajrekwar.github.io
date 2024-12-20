'use client'
import React from 'react';

interface Image {
  id: string;
  media_url: string;
  caption: string;
}

interface GalleryProps {
  feed: {
    data: Image[];
  };
}

const Gallery: React.FC<GalleryProps> = ({ feed }) => {
  const images = feed.data;

  return (
    <div className="bg-black text-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images &&
        images.map((image) => (
          <div key={image.id} className="relative overflow-hidden">
            <img
              src={image.media_url}
              alt={image.caption}
              className="w-full h-auto object-cover"
            />
            {image.caption && (
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-xs p-2 w-full">
                {image.caption}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Gallery;
