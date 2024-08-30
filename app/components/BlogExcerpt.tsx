"use client"
import { useState } from 'react';
import Link from 'next/link';
import { IconArrowNarrowRight } from '@tabler/icons-react';

interface BlogExcerptProps {
  
  description: string;
  slug: string;
}

export default function BlogExcerpt({  description, slug }: BlogExcerptProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border-rose-200 pb-4 mb-4">
      
      <p className="mb-4 text-sm text-four italic">
        {isExpanded ? description  : `${description.slice(0, 100)}...`}
      </p>
      <div className="text-right flex">
        <button
          onClick={handleReadMore}
          className="text-five  border-green-200 hover:underline focus:outline-none"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
      {isExpanded && (
        <div className=" flex text-right mt-2">
          <Link href={`/blog/${slug}`}>
            <button className="text-five flex gap-2 hover:underline">Go to Full Post <IconArrowNarrowRight/></button>
          </Link>
        </div>
      )}
      
    </div>
  );
}
