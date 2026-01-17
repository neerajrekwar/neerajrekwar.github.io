'use client'
import { useState, useEffect } from 'react';
import Gallery from './Gallery';

interface Image {
  id: string;
  media_url: string;
  caption: string;
}

interface Feed {
  data: Image[];
}

export default function InstaEmbed() {
  const [feed, setFeed] = useState<Feed | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        const response = await fetch('/api/instagram');
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram feed');
        }
        const data = await response.json();
        setFeed(data);
      } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError('An unknown error occurred');
        }
      }
    };

    fetchInstagramData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!feed) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Gallery feed={feed} />
    </div>
  );
}
