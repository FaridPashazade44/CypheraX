'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import CreatePost from '@/components/CreatePost';
import PostCard from '@/components/PostCard';
import { TrendingUp, Users, Activity } from 'lucide-react';

export default function DashboardPage() {
  const [posts, setPosts] = useState([
    {
      id: '1',
      username: 'cypher_user',
      content: 'Just joined CypheraX! Loving the cyber aesthetic! 🔐',
      likes: 15,
      comments: 3,
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      username: 'tech_ninja',
      content: 'The security features on this platform are amazing. Finally, a social network that takes privacy seriously.',
      likes: 28,
      comments: 7,
      createdAt: new Date(Date.now() - 86400000).toISOString(),
    },
  ]);

  const trendingTopics = [
    { name: '#CyberSecurity', posts: 1234 },
    { name: '#Privacy', posts: 892 },
    { name: '#Encryption', posts: 567 },
    { name: '#SecureChat', posts: 445 },
  ];

  return (
    <div className="min-h-screen bg-cyber-darker">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gradient mb-2">Dashboard</h1>
              <p className="text-gray-400">Stay connected with the secure network</p>
            </div>

            <CreatePost />

            <div className="space-y-4">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Stats Card */}
            <div className="card-cyber mb-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Activity className="mr-2 text-cyber-blue" size={24} />
                Your Stats
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Posts</span>
                  <span className="text-white font-semibold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Friends</span>
                  <span className="text-white font-semibold">48</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Messages</span>
                  <span className="text-white font-semibold">5</span>
                </div>
              </div>
            </div>

            {/* Trending Topics */}
            <div className="card-cyber">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <TrendingUp className="mr-2 text-cyber-blue" size={24} />
                Trending Topics
              </h2>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between hover:bg-cyber-blue/10 p-2 rounded-lg cursor-pointer transition-colors"
                  >
                    <span className="text-cyber-blue font-semibold">{topic.name}</span>
                    <span className="text-gray-400 text-sm">{topic.posts} posts</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Friend Suggestions */}
            <div className="card-cyber mt-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Users className="mr-2 text-cyber-blue" size={24} />
                Friend Suggestions
              </h2>
              <div className="space-y-3">
                {['crypto_master', 'secure_dev', 'privacy_advocate'].map((username, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{username[0].toUpperCase()}</span>
                      </div>
                      <span className="text-white">{username}</span>
                    </div>
                    <button className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue rounded-lg hover:bg-cyber-blue/30 transition-colors text-sm">
                      Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
