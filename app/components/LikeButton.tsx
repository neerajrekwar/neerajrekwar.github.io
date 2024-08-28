'use client';
import { useState } from 'react';
import { IconHeart, IconHeartFilled } from '@tabler/icons-react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={toggleLike}
      className="focus:outline-none transition-colors duration-200 ease-in-out"
    >
      {liked ? (
        <IconHeartFilled size={24} className="text-red-500" />
      ) : (
        <IconHeart size={24} className="text-gray-500 hover:text-red-500" />
      )}
    </button>
  );
};

export default LikeButton;
