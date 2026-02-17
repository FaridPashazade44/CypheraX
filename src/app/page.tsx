'use client';

import Link from 'next/link';
import { Shield, Lock, Zap, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-cyber">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 text-center">
          {/* Logo */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyber-blue to-cyber-accent rounded-lg shadow-cyber-lg mb-6 animate-glow">
            <span className="text-cyber-darker font-bold text-3xl">C</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">CypheraX</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The Next Generation Secure Social Platform
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Connect, share, and communicate with confidence. Built with security-first architecture
            and cutting-edge encryption technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/auth/signup" className="btn-cyber text-lg px-8 py-4">
              Get Started
            </Link>
            <Link
              href="/auth/login"
              className="px-8 py-4 bg-cyber-dark text-white font-bold rounded-lg border-2 border-cyber-blue hover:bg-cyber-blue/10 transition-all duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Why Choose <span className="text-gradient">CypheraX</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-cyber text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyber-blue/20 rounded-full mb-4">
                <Shield className="text-cyber-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Secure by Design</h3>
              <p className="text-gray-400">
                End-to-end encryption for all your communications and data.
              </p>
            </div>

            <div className="card-cyber text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyber-blue/20 rounded-full mb-4">
                <Lock className="text-cyber-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Privacy First</h3>
              <p className="text-gray-400">
                Your data belongs to you. We never sell or share your information.
              </p>
            </div>

            <div className="card-cyber text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyber-blue/20 rounded-full mb-4">
                <Zap className="text-cyber-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-400">
                Optimized performance for seamless real-time interactions.
              </p>
            </div>

            <div className="card-cyber text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyber-blue/20 rounded-full mb-4">
                <Users className="text-cyber-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Connect Securely</h3>
              <p className="text-gray-400">
                Build meaningful connections in a safe, encrypted environment.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="py-8 text-center border-t border-cyber-blue/20">
          <p className="text-gray-400">
            © 2024 CypheraX. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
