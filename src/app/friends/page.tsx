'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function Friends() {
  const [activeTab, setActiveTab] = useState<'all' | 'requests'>('all');

  // Mock data
  const friends = [
    {
      id: '1',
      username: 'CyberNinja',
      mutualFriends: 23,
      status: 'online',
      avatar: '🥷',
    },
    {
      id: '2',
      username: 'CodeMaster',
      mutualFriends: 15,
      status: 'offline',
      avatar: '👨‍💻',
    },
    {
      id: '3',
      username: 'TechGuru',
      mutualFriends: 31,
      status: 'online',
      avatar: '🧙',
    },
    {
      id: '4',
      username: 'DataWizard',
      mutualFriends: 18,
      status: 'away',
      avatar: '🧙‍♀️',
    },
  ];

  const friendRequests = [
    {
      id: '1',
      username: 'NewUser123',
      mutualFriends: 5,
      avatar: '👤',
    },
    {
      id: '2',
      username: 'DevExplorer',
      mutualFriends: 12,
      avatar: '🚀',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'away':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-cyan-300 mb-2">Friends</h1>
          <p className="text-cyan-600">Manage your connections</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeTab === 'all'
                ? 'bg-cyan-600 text-white'
                : 'bg-slate-800/50 text-cyan-400 hover:bg-slate-800'
            }`}
          >
            All Friends ({friends.length})
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 relative ${
              activeTab === 'requests'
                ? 'bg-cyan-600 text-white'
                : 'bg-slate-800/50 text-cyan-400 hover:bg-slate-800'
            }`}
          >
            Requests
            {friendRequests.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {friendRequests.length}
              </span>
            )}
          </button>
        </div>

        {/* Friends List */}
        {activeTab === 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {friends.map((friend) => (
              <div key={friend.id} className="cyber-card p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="text-4xl">{friend.avatar}</div>
                      <div
                        className={`absolute bottom-0 right-0 w-3 h-3 ${getStatusColor(
                          friend.status
                        )} rounded-full border-2 border-slate-900`}
                      ></div>
                    </div>
                    <div>
                      <h3 className="text-cyan-300 font-semibold">{friend.username}</h3>
                      <p className="text-cyan-700 text-sm">
                        {friend.mutualFriends} mutual friends
                      </p>
                    </div>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-slate-800/50 hover:bg-slate-800 text-cyan-400 font-medium px-4 py-2 rounded-lg transition-colors">
                    Message
                  </button>
                  <button className="flex-1 bg-slate-800/50 hover:bg-slate-800 text-cyan-400 font-medium px-4 py-2 rounded-lg transition-colors">
                    Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Friend Requests */}
        {activeTab === 'requests' && (
          <div className="space-y-4">
            {friendRequests.length > 0 ? (
              friendRequests.map((request) => (
                <div key={request.id} className="cyber-card p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{request.avatar}</div>
                      <div>
                        <h3 className="text-cyan-300 font-semibold text-lg">
                          {request.username}
                        </h3>
                        <p className="text-cyan-700">
                          {request.mutualFriends} mutual friends
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <button className="cyber-button">Accept</button>
                      <button className="bg-slate-800/50 hover:bg-slate-800 text-cyan-400 font-medium px-6 py-2 rounded-lg border border-cyan-500/30 transition-colors">
                        Decline
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="cyber-card p-12 text-center">
                <div className="text-6xl mb-4">👥</div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  No pending requests
                </h3>
                <p className="text-cyan-600">
                  You're all caught up! Check back later for new friend requests.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Suggestions Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">Suggested Friends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="cyber-card p-4 text-center">
                <div className="text-4xl mb-2">🎭</div>
                <h4 className="text-cyan-300 font-semibold mb-1">User{i}</h4>
                <p className="text-cyan-700 text-sm mb-3">{i * 3} mutual friends</p>
                <button className="cyber-button w-full text-sm">Add Friend</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
