// app/components/InstaGallery.tsx
"use client";

import React, { useEffect, useState } from "react";

interface InstagramPost {
  id: string;
  media_url: string;
  caption?: string;
  permalink: string;
  media_type: string;
}

const InstaGallery: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch("/api/instagram");
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Failed to fetch Instagram posts.");
        }

        setPosts(result.data);
      } catch (err: any) {
        setError(err.message || "An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  if (loading) {
    return <div>Loading Instagram posts...</div>;
  }

  if (error) {
    return <div>Error loading Instagram posts: {error}</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
        >
          {post.media_type === "VIDEO" ? (
            <video
              src={post.media_url}
              controls
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={post.media_url}
              alt={post.caption || "Instagram post"}
              className="w-full h-full object-cover"
            />
          )}
        </a>
      ))}
    </div>
  );
};

export default InstaGallery;
