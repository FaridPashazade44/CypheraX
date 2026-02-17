'use client';

import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { useState } from 'react';

interface PostCardProps {
  post: {
    id: string;
    username: string;
    content: string;
    likes: number;
    comments: number;
    createdAt: string;
  };
}

export default function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="card-cyber mb-4">
      {/* User Info */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center">
          <span className="text-white font-bold">{post.username[0].toUpperCase()}</span>
        </div>
        <div>
          <h3 className="font-semibold text-white">{post.username}</h3>
          <p className="text-sm text-gray-400">{new Date(post.createdAt).toLocaleDateString()}</p>
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-200 mb-4">{post.content}</p>

      {/* Actions */}
      <div className="flex items-center space-x-6 pt-4 border-t border-cyber-blue/20">
        <button
          onClick={handleLike}
          className={`flex items-center space-x-2 transition-colors ${
            liked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
          }`}
        >
          <Heart size={20} fill={liked ? 'currentColor' : 'none'} />
          <span>{likes}</span>
        </button>

        <button className="flex items-center space-x-2 text-gray-400 hover:text-cyber-blue transition-colors">
          <MessageCircle size={20} />
          <span>{post.comments}</span>
        </button>

        <button className="flex items-center space-x-2 text-gray-400 hover:text-cyber-blue transition-colors">
          <Share2 size={20} />
        </button>
      </div>
    </div>
  );
}
