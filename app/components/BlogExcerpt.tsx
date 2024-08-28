"use client"
import { useState } from 'react';
import Link from 'next/link';

interface BlogExcerptProps {
  
  decription: string;
  slug: string;
}

export default function BlogExcerpt({  decription, slug }: BlogExcerptProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className=" pb-4 mb-4">
      
      <p className="mb-4 opacity-75">
        {isExpanded ? decription : `${decription.slice(0, 1000)}...`}
      </p>
      <div className="text-right">
        <button
          onClick={handleReadMore}
          className="text-blue-600 hover:underline focus:outline-none"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
      {isExpanded && (
        <div className="text-right mt-2">
          <Link href={`/blog/${slug}`}>
            <button className="text-blue-600 hover:underline">Go to Full Post →</button>
          </Link>
        </div>
      )}
    </div>
  );
}
