'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, MessageSquare, Users, User, LogOut } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', icon: Home, label: 'Dashboard' },
    { href: '/messages', icon: MessageSquare, label: 'Messages' },
    { href: '/friends', icon: Users, label: 'Friends' },
    { href: '/profile', icon: User, label: 'Profile' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-dark/95 backdrop-blur-sm border-b border-cyber-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyber-blue to-cyber-accent rounded-lg flex items-center justify-center shadow-cyber">
              <span className="text-cyber-darker font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold text-gradient">CypheraX</span>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-cyber-blue/20 text-cyber-blue shadow-cyber'
                      : 'text-gray-400 hover:text-cyber-blue hover:bg-cyber-blue/10'
                  }`}
                >
                  <Icon size={20} />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
            
            {/* Logout Button */}
            <button
              onClick={() => {
                // Handle logout
                document.cookie = 'token=; Max-Age=0; path=/;';
                window.location.href = '/auth/login';
              }}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-300"
            >
              <LogOut size={20} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
