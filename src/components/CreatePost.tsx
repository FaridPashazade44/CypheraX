'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function CreatePost() {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, userId: 'temp-user-id' }),
      });

      if (response.ok) {
        setContent('');
        // Refresh posts or add to list
      }
    } catch (error) {
      console.error('Failed to create post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card-cyber mb-6">
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="input-cyber w-full min-h-[100px] resize-none"
          maxLength={500}
        />
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-400">
            {content.length}/500 characters
          </span>
          <button
            type="submit"
            disabled={!content.trim() || isSubmitting}
            className="btn-cyber flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{isSubmitting ? 'Posting...' : 'Post'}</span>
            <Send size={18} />
          </button>
        </div>
      </form>
    </div>
  );
}
