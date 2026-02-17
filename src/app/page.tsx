import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center">
        {/* Logo/Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 cyber-text animate-pulse-slow">
            ⚡ CypheraX
          </h1>
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </div>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-cyan-300 mb-4">
          Secure Social Network
        </p>
        <p className="text-lg text-cyan-600 mb-12 max-w-2xl mx-auto">
          Connect with friends in a cyber-secure environment. 
          Share your thoughts, chat in real-time, and build your digital community.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link href="/dashboard" className="cyber-button text-lg px-8 py-3 w-full sm:w-auto">
            Enter Dashboard
          </Link>
          <Link 
            href="/profile" 
            className="border-2 border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-cyan-200 font-semibold px-8 py-3 rounded-lg transition-all duration-300 w-full sm:w-auto hover:shadow-lg hover:shadow-cyan-500/30"
          >
            View Profile
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="cyber-card p-6">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Secure</h3>
            <p className="text-cyan-600">End-to-end encrypted communications</p>
          </div>
          <div className="cyber-card p-6">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Fast</h3>
            <p className="text-cyan-600">Real-time updates and messaging</p>
          </div>
          <div className="cyber-card p-6">
            <div className="text-4xl mb-3">🌐</div>
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Connected</h3>
            <p className="text-cyan-600">Build your digital community</p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}