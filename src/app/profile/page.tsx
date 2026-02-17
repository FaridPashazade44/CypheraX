'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import PostCard from '@/components/PostCard';
import { Calendar, Mail, MapPin, Link as LinkIcon, Edit } from 'lucide-react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'posts' | 'about'>('posts');
  
  const profile = {
    username: 'current_user',
    email: 'user@cypherax.com',
    location: 'Cyberspace',
    website: 'https://example.com',
    bio: 'Cybersecurity enthusiast | Privacy advocate | Tech lover',
    joinedDate: 'January 2024',
    stats: {
      posts: 42,
      friends: 128,
      followers: 256,
    },
  };

  const userPosts = [
    {
      id: '1',
      username: profile.username,
      content: 'Working on some exciting new security features! Stay tuned. 🔐',
      likes: 23,
      comments: 5,
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      username: profile.username,
      content: 'Just finished reading about zero-knowledge proofs. Mind-blowing stuff!',
      likes: 18,
      comments: 3,
      createdAt: new Date(Date.now() - 86400000).toISOString(),
    },
  ];

  return (
    <div className="min-h-screen bg-cyber-darker">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        {/* Profile Header */}
        <div className="card-cyber mb-6">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            {/* Avatar */}
            <div className="w-32 h-32 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center shadow-cyber-lg">
              <span className="text-white font-bold text-5xl">
                {profile.username[0].toUpperCase()}
              </span>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h1 className="text-3xl font-bold text-white">{profile.username}</h1>
                <button className="btn-cyber mt-2 md:mt-0 flex items-center justify-center space-x-2">
                  <Edit size={18} />
                  <span>Edit Profile</span>
                </button>
              </div>

              <p className="text-gray-300 mb-4">{profile.bio}</p>

              {/* Stats */}
              <div className="flex justify-center md:justify-start space-x-8 mb-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-cyber-blue">{profile.stats.posts}</p>
                  <p className="text-sm text-gray-400">Posts</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-cyber-blue">{profile.stats.friends}</p>
                  <p className="text-sm text-gray-400">Friends</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-cyber-blue">{profile.stats.followers}</p>
                  <p className="text-sm text-gray-400">Followers</p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>Joined {profile.joinedDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <LinkIcon size={16} />
                  <a href={profile.website} className="link-cyber">
                    {profile.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6">
          <button
            onClick={() => setActiveTab('posts')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'posts'
                ? 'bg-cyber-blue text-cyber-darker shadow-cyber'
                : 'bg-cyber-dark text-gray-400 hover:text-white'
            }`}
          >
            Posts
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'about'
                ? 'bg-cyber-blue text-cyber-darker shadow-cyber'
                : 'bg-cyber-dark text-gray-400 hover:text-white'
            }`}
          >
            About
          </button>
        </div>

        {/* Content */}
        <div>
          {activeTab === 'posts' && (
            <div className="space-y-4">
              {userPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}

          {activeTab === 'about' && (
            <div className="card-cyber">
              <h2 className="text-2xl font-bold text-white mb-4">About</h2>
              <div className="space-y-4 text-gray-300">
                <p>{profile.bio}</p>
                <div className="border-t border-cyber-blue/20 pt-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Cybersecurity', 'Privacy', 'Encryption', 'Open Source'].map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
