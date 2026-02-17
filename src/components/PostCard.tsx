'use client';

import { useState } from 'react';

interface PostCardProps {
  id: string;
  username: string;
  content: string;
  timestamp: string;
  likes?: number;
  comments?: number;
}

export default function PostCard({ 
  id, 
  username, 
  content, 
  timestamp, 
  likes = 0, 
  comments = 0 
}: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="cyber-card p-6 mb-4 hover:scale-[1.01] transition-transform duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            {username.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 className="text-cyan-300 font-semibold">{username}</h3>
            <p className="text-cyan-700 text-sm">{timestamp}</p>
          </div>
        </div>
        <button className="text-cyan-400 hover:text-cyan-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="mb-4">
        <p className="text-cyan-50 leading-relaxed">{content}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-6 pt-4 border-t border-cyan-500/20">
        <button
          onClick={handleLike}
          className={`flex items-center space-x-2 transition-colors duration-300 ${
            liked ? 'text-cyan-400' : 'text-cyan-600 hover:text-cyan-400'
          }`}
        >
          <svg className="w-5 h-5" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span className="font-medium">{likeCount}</span>
        </button>
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center space-x-2 text-cyan-600 hover:text-cyan-400 transition-colors duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="font-medium">{comments}</span>
        </button>
        <button className="flex items-center space-x-2 text-cyan-600 hover:text-cyan-400 transition-colors duration-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          <span className="font-medium">Share</span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="mt-4 pt-4 border-t border-cyan-500/20">
          <div className="space-y-3">
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="Write a comment..."
                className="cyber-input flex-1"
              />
              <button className="cyber-button px-4">Post</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
