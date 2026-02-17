'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Search, Send } from 'lucide-react';

interface Chat {
  id: string;
  username: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
}

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
}

export default function MessagesPage() {
  const [chats] = useState<Chat[]>([
    {
      id: '1',
      username: 'cypher_user',
      lastMessage: 'Hey! How are you doing?',
      timestamp: '2m ago',
      unread: 2,
    },
    {
      id: '2',
      username: 'tech_ninja',
      lastMessage: 'Check out this new security tool!',
      timestamp: '1h ago',
      unread: 0,
    },
  ]);

  const [selectedChat, setSelectedChat] = useState<string | null>('1');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      senderId: '1',
      content: 'Hey! How are you doing?',
      timestamp: new Date().toISOString(),
    },
    {
      id: '2',
      senderId: 'me',
      content: 'I am good! How about you?',
      timestamp: new Date().toISOString(),
    },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setMessages([
      ...messages,
      {
        id: Date.now().toString(),
        senderId: 'me',
        content: newMessage,
        timestamp: new Date().toISOString(),
      },
    ]);
    setNewMessage('');
  };

  return (
    <div className="min-h-screen bg-cyber-darker">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gradient mb-2">Messages</h1>
          <p className="text-gray-400">Secure encrypted communication</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-240px)]">
          {/* Chat List */}
          <div className="lg:col-span-1 card-cyber overflow-hidden flex flex-col">
            <div className="p-4 border-b border-cyber-blue/20">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="input-cyber pl-12"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto cyber-scrollbar">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat.id)}
                  className={`p-4 cursor-pointer border-b border-cyber-blue/10 hover:bg-cyber-blue/10 transition-colors ${
                    selectedChat === chat.id ? 'bg-cyber-blue/20' : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-white">{chat.username}</span>
                    <span className="text-xs text-gray-400">{chat.timestamp}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
                    {chat.unread > 0 && (
                      <span className="bg-cyber-blue text-cyber-darker text-xs font-bold px-2 py-1 rounded-full">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="lg:col-span-2 card-cyber overflow-hidden flex flex-col">
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-cyber-blue/20">
                  <h2 className="text-xl font-bold text-white">
                    {chats.find((c) => c.id === selectedChat)?.username}
                  </h2>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto cyber-scrollbar p-4 space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[70%] px-4 py-2 rounded-lg ${
                          msg.senderId === 'me'
                            ? 'bg-cyber-blue text-cyber-darker'
                            : 'bg-cyber-light text-white'
                        }`}
                      >
                        <p>{msg.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-cyber-blue/20">
                  <form onSubmit={handleSendMessage} className="flex space-x-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type a message..."
                      className="input-cyber flex-1"
                    />
                    <button
                      type="submit"
                      className="btn-cyber px-6"
                    >
                      <Send size={20} />
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-gray-400">Select a conversation to start messaging</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
