import Navbar from '@/components/Navbar';
import PostCard from '@/components/PostCard';

export default function Profile() {
  // Mock data
  const userPosts = [
    {
      id: '1',
      username: 'YourUsername',
      content: 'Just joined CypheraX! Excited to connect with everyone here. 🚀',
      timestamp: '1 day ago',
      likes: 15,
      comments: 3,
    },
    {
      id: '2',
      username: 'YourUsername',
      content: 'Working on some cool projects. Will share updates soon!',
      timestamp: '3 days ago',
      likes: 23,
      comments: 7,
    },
  ];

  const achievements = [
    { icon: '🏆', title: 'Early Adopter', description: 'Joined in the first month' },
    { icon: '⭐', title: 'Popular', description: '100+ connections' },
    { icon: '💬', title: 'Conversationalist', description: '500+ messages sent' },
    { icon: '📝', title: 'Content Creator', description: '50+ posts created' },
  ];

  const stats = [
    { label: 'Posts', value: '24' },
    { label: 'Friends', value: '156' },
    { label: 'Followers', value: '342' },
    { label: 'Following', value: '189' },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Profile Header */}
        <div className="cyber-card p-8 mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Avatar */}
            <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-5xl font-bold cyber-glow">
              Y
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-cyan-300 mb-2">YourUsername</h1>
              <p className="text-cyan-600 mb-4">
                Software Developer | Cyber Enthusiast | Building the future
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                  #Developer
                </span>
                <span className="px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                  #CyberSecurity
                </span>
                <span className="px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                  #Tech
                </span>
              </div>
              <div className="flex items-center space-x-4 text-cyan-600">
                <div className="flex items-center space-x-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Joined January 2024</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-2">
              <button className="cyber-button">Edit Profile</button>
              <button className="bg-slate-800/50 hover:bg-slate-800 text-cyan-400 font-medium px-6 py-2 rounded-lg border border-cyan-500/30 transition-colors">
                Settings
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
              <div className="text-cyan-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex space-x-2 mb-6">
              <button className="px-6 py-2 bg-cyan-600 text-white rounded-lg font-medium">
                Posts
              </button>
              <button className="px-6 py-2 bg-slate-800/50 text-cyan-400 hover:bg-slate-800 rounded-lg font-medium transition-colors">
                Photos
              </button>
              <button className="px-6 py-2 bg-slate-800/50 text-cyan-400 hover:bg-slate-800 rounded-lg font-medium transition-colors">
                Videos
              </button>
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {userPosts.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Achievements */}
            <div className="cyber-card p-6">
              <h2 className="text-xl font-bold text-cyan-300 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                Achievements
              </h2>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
                  >
                    <div className="text-3xl">{achievement.icon}</div>
                    <div>
                      <h3 className="text-cyan-400 font-semibold">{achievement.title}</h3>
                      <p className="text-cyan-700 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity */}
            <div className="cyber-card p-6">
              <h2 className="text-xl font-bold text-cyan-300 mb-4">Recent Activity</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-cyan-600 text-sm">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span>Posted a new update</span>
                </div>
                <div className="flex items-center space-x-2 text-cyan-600 text-sm">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span>Made 5 new connections</span>
                </div>
                <div className="flex items-center space-x-2 text-cyan-600 text-sm">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span>Unlocked an achievement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
