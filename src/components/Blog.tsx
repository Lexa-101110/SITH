
import React, { useState } from 'react';
import { Search, Calendar, Tag, Play, ExternalLink, Clock } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const posts = [
    {
      title: "Phoenix Alpha First Launch Success",
      excerpt: "After months of development, Phoenix Alpha achieved a perfect launch with successful parachute deployment at 1,200 feet. This milestone represents a major breakthrough in our amateur rocketry journey.",
      date: "2024-01-15",
      category: "Launch Report",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      featured: true
    },
    {
      title: "Optimizing KNO₃ Fuel Mixtures",
      excerpt: "Technical analysis of different fuel ratios and their impact on thrust curves and burn characteristics. Learn about our experimental approach to solid fuel optimization.",
      date: "2024-01-10",
      category: "Technical",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
    },
    {
      title: "3D Printing PETG Engine Challenges",
      excerpt: "Lessons learned from printing rocket engines in PETG, including temperature control and layer adhesion. Discover the engineering challenges we overcame.",
      date: "2024-01-05",
      category: "Manufacturing",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
    },
    {
      title: "Static Fire Test Documentation",
      excerpt: "Complete documentation of our static fire test procedures and safety protocols. A comprehensive guide to safe rocket engine testing.",
      date: "2024-01-01",
      category: "Testing",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      title: "Flight Computer Arduino Design",
      excerpt: "Building custom flight computers with Arduino for data logging, altimeter functions, and parachute deployment control systems.",
      date: "2023-12-28",
      category: "Electronics",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1518644730709-0835105d9daa"
    },
    {
      title: "Recovery System Innovations",
      excerpt: "Exploring dual-deploy parachute systems and electronic deployment mechanisms for safer and more reliable rocket recovery.",
      date: "2023-12-20",
      category: "Testing",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2"
    }
  ];

  const categories = ['All', 'Launch Report', 'Technical', 'Manufacturing', 'Testing', 'Electronics'];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Launch Report': 'from-violet-500 to-purple-600',
      'Technical': 'from-teal-500 to-cyan-600',
      'Manufacturing': 'from-indigo-500 to-blue-600',
      'Testing': 'from-purple-500 to-pink-600',
      'Electronics': 'from-emerald-500 to-teal-600'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="blog" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
            Nova Project Blog
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-violet-400 to-teal-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Development updates, technical insights, and launch documentation from our journey to the stars
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-6 py-4 bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all"
          >
            {categories.map(category => (
              <option key={category} value={category} className="bg-gray-900">
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="bg-gradient-to-r from-violet-400 to-teal-400 bg-clip-text text-transparent">
                Featured Article
              </span>
            </h3>
            <article className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-violet-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] group">
              <div className="lg:flex">
                <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                  {featuredPost.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <a
                        href={featuredPost.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600/90 backdrop-blur-sm rounded-full p-6 hover:bg-red-600 transition-all hover:scale-110 group"
                      >
                        <Play className="h-10 w-10 text-white ml-1" />
                      </a>
                    </div>
                  )}
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-4 py-2 bg-gradient-to-r ${getCategoryColor(featuredPost.category)} text-white text-sm font-medium rounded-full`}>
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors">
                    {featuredPost.title}
                  </h4>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <button className="flex items-center text-violet-400 hover:text-violet-300 transition-colors font-medium group">
                      Read Article
                      <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <article key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                {post.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a
                      href={post.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600/80 backdrop-blur-sm rounded-full p-4 hover:bg-red-600 transition-all hover:scale-110"
                    >
                      <Play className="h-6 w-6 text-white ml-0.5" />
                    </a>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(post.category)} text-white text-xs font-medium rounded-full`}>
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3 text-xs text-gray-400">
                  <span className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3 line-clamp-2 group-hover:text-violet-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="flex items-center text-violet-400 hover:text-violet-300 transition-colors font-medium text-sm group">
                  Read More
                  <ExternalLink className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-lg mb-4">No articles found</div>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
