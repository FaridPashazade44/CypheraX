import Navbar from '@/components/Navbar';
import CreatePost from '@/components/CreatePost';
import PostCard from '@/components/PostCard';

export default function Dashboard() {
  // Mock data for demonstration
  const posts = [
    {
      id: '1',
      username: 'CyberNinja',
      content: 'Just deployed a new feature to CypheraX! The cyber aesthetic is looking amazing! 🚀',
      timestamp: '2 hours ago',
      likes: 42,
      comments: 8,
    },
    {
      id: '2',
      username: 'CodeMaster',
      content: 'Love the new blue theme! The gradient effects are smooth and the animations are on point. Great work team! 💙',
      timestamp: '5 hours ago',
      likes: 28,
      comments: 5,
    },
    {
      id: '3',
      username: 'TechGuru',
      content: 'Working on some exciting AI integrations. Stay tuned for updates! #CypheraX #Innovation',
      timestamp: '1 day ago',
      likes: 65,
      comments: 12,
    },
  ];

  const trendingTopics = [
    { tag: '#CyberSecurity', posts: 1234 },
    { tag: '#WebDev', posts: 856 },
    { tag: '#AI', posts: 742 },
    { tag: '#Blockchain', posts: 523 },
    { tag: '#CypheraX', posts: 401 },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-2">
            <CreatePost />
            <div className="space-y-4">
              {posts.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Trending Topics */}
            <div className="cyber-card p-6 mb-6 sticky top-20">
              <h2 className="text-xl font-bold text-cyan-300 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Trending
              </h2>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <div>
                      <p className="text-cyan-400 font-semibold">{topic.tag}</p>
                      <p className="text-cyan-700 text-sm">{topic.posts} posts</p>
                    </div>
                    <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="cyber-card p-6">
              <h2 className="text-xl font-bold text-cyan-300 mb-4">Your Stats</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-cyan-200">Posts</span>
                  <span className="text-cyan-400 font-bold">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-200">Friends</span>
                  <span className="text-cyan-400 font-bold">156</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-200">Messages</span>
                  <span className="text-cyan-400 font-bold">89</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
