'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState<string | null>('1');
  const [messageInput, setMessageInput] = useState('');

  // Mock data
  const chats = [
    {
      id: '1',
      username: 'CyberNinja',
      lastMessage: 'Hey! Check out the new features',
      timestamp: '2m ago',
      unread: 2,
      avatar: '🥷',
    },
    {
      id: '2',
      username: 'CodeMaster',
      lastMessage: 'Thanks for the feedback!',
      timestamp: '1h ago',
      unread: 0,
      avatar: '👨‍💻',
    },
    {
      id: '3',
      username: 'TechGuru',
      lastMessage: 'Let\'s collaborate on this project',
      timestamp: '3h ago',
      unread: 5,
      avatar: '🧙',
    },
  ];

  const messages = [
    {
      id: '1',
      sender: 'CyberNinja',
      content: 'Hey! Check out the new features',
      timestamp: '10:30 AM',
      isOwn: false,
    },
    {
      id: '2',
      sender: 'You',
      content: 'Looks amazing! Love the cyber theme',
      timestamp: '10:32 AM',
      isOwn: true,
    },
    {
      id: '3',
      sender: 'CyberNinja',
      content: 'Thanks! The blue gradient is my favorite part',
      timestamp: '10:33 AM',
      isOwn: false,
    },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    console.log('Sending message:', messageInput);
    setMessageInput('');
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="cyber-card overflow-hidden" style={{ height: 'calc(100vh - 180px)' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 h-full">
            {/* Chat List */}
            <div className="border-r border-cyan-500/20 overflow-y-auto">
              <div className="p-4 border-b border-cyan-500/20">
                <h2 className="text-xl font-bold text-cyan-300">Messages</h2>
              </div>
              <div className="divide-y divide-cyan-500/10">
                {chats.map((chat) => (
                  <button
                    key={chat.id}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`w-full p-4 text-left hover:bg-slate-800/50 transition-colors ${
                      selectedChat === chat.id ? 'bg-slate-800/30' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-3xl">{chat.avatar}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-cyan-300 font-semibold truncate">
                            {chat.username}
                          </h3>
                          <span className="text-xs text-cyan-700">{chat.timestamp}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-cyan-600 text-sm truncate">{chat.lastMessage}</p>
                          {chat.unread > 0 && (
                            <span className="bg-cyan-600 text-white text-xs rounded-full px-2 py-0.5 ml-2">
                              {chat.unread}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat View */}
            <div className="md:col-span-2 flex flex-col">
              {selectedChat ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-cyan-500/20 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">🥷</div>
                      <div>
                        <h3 className="text-cyan-300 font-semibold">CyberNinja</h3>
                        <p className="text-cyan-700 text-sm">Active now</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors">
                        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </button>
                      <button className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors">
                        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.isOwn
                              ? 'bg-cyan-600 text-white'
                              : 'bg-slate-800 text-cyan-100'
                          }`}
                        >
                          <p>{message.content}</p>
                          <p className={`text-xs mt-1 ${message.isOwn ? 'text-cyan-200' : 'text-cyan-700'}`}>
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <form onSubmit={handleSendMessage} className="p-4 border-t border-cyan-500/20">
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
                      >
                        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                      <input
                        type="text"
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        placeholder="Type a message..."
                        className="cyber-input flex-1"
                      />
                      <button type="submit" className="cyber-button">
                        Send
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-cyan-600">
                  <p>Select a chat to start messaging</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
