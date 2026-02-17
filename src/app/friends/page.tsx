'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { UserPlus, UserCheck, UserX, Search } from 'lucide-react';

interface Friend {
  id: string;
  username: string;
  status: 'online' | 'offline';
  mutualFriends: number;
}

interface FriendRequest {
  id: string;
  username: string;
  mutualFriends: number;
}

export default function FriendsPage() {
  const [activeTab, setActiveTab] = useState<'friends' | 'requests' | 'suggestions'>('friends');
  
  const [friends] = useState<Friend[]>([
    { id: '1', username: 'cypher_user', status: 'online', mutualFriends: 12 },
    { id: '2', username: 'tech_ninja', status: 'offline', mutualFriends: 8 },
    { id: '3', username: 'crypto_master', status: 'online', mutualFriends: 15 },
  ]);

  const [requests] = useState<FriendRequest[]>([
    { id: '1', username: 'secure_dev', mutualFriends: 5 },
    { id: '2', username: 'privacy_advocate', mutualFriends: 3 },
  ]);

  const [suggestions] = useState<Friend[]>([
    { id: '1', username: 'network_pro', status: 'offline', mutualFriends: 7 },
    { id: '2', username: 'data_scientist', status: 'online', mutualFriends: 4 },
  ]);

  return (
    <div className="min-h-screen bg-cyber-darker">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gradient mb-2">Friends</h1>
          <p className="text-gray-400">Manage your connections</p>
        </div>

        {/* Search */}
        <div className="card-cyber mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search friends..."
              className="input-cyber pl-12"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6">
          <button
            onClick={() => setActiveTab('friends')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'friends'
                ? 'bg-cyber-blue text-cyber-darker shadow-cyber'
                : 'bg-cyber-dark text-gray-400 hover:text-white'
            }`}
          >
            Friends ({friends.length})
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'requests'
                ? 'bg-cyber-blue text-cyber-darker shadow-cyber'
                : 'bg-cyber-dark text-gray-400 hover:text-white'
            }`}
          >
            Requests ({requests.length})
          </button>
          <button
            onClick={() => setActiveTab('suggestions')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'suggestions'
                ? 'bg-cyber-blue text-cyber-darker shadow-cyber'
                : 'bg-cyber-dark text-gray-400 hover:text-white'
            }`}
          >
            Suggestions
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeTab === 'friends' &&
            friends.map((friend) => (
              <div key={friend.id} className="card-cyber">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center relative">
                    <span className="text-white font-bold">
                      {friend.username[0].toUpperCase()}
                    </span>
                    {friend.status === 'online' && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-cyber-dark"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{friend.username}</h3>
                    <p className="text-sm text-gray-400">
                      {friend.mutualFriends} mutual friends
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 px-4 py-2 bg-cyber-blue/20 text-cyber-blue rounded-lg hover:bg-cyber-blue/30 transition-colors">
                    Message
                  </button>
                  <button className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors">
                    <UserX size={18} />
                  </button>
                </div>
              </div>
            ))}

          {activeTab === 'requests' &&
            requests.map((request) => (
              <div key={request.id} className="card-cyber">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {request.username[0].toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{request.username}</h3>
                    <p className="text-sm text-gray-400">
                      {request.mutualFriends} mutual friends
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 px-4 py-2 bg-cyber-blue text-cyber-darker rounded-lg hover:bg-cyber-accent transition-colors font-semibold flex items-center justify-center space-x-2">
                    <UserCheck size={18} />
                    <span>Accept</span>
                  </button>
                  <button className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors">
                    <UserX size={18} />
                  </button>
                </div>
              </div>
            ))}

          {activeTab === 'suggestions' &&
            suggestions.map((suggestion) => (
              <div key={suggestion.id} className="card-cyber">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {suggestion.username[0].toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{suggestion.username}</h3>
                    <p className="text-sm text-gray-400">
                      {suggestion.mutualFriends} mutual friends
                    </p>
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-cyber-blue text-cyber-darker rounded-lg hover:bg-cyber-accent transition-colors font-semibold flex items-center justify-center space-x-2">
                  <UserPlus size={18} />
                  <span>Add Friend</span>
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
