
import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';
import { Search } from 'lucide-react';
import { useBlogContext } from '../context/BlogContext';
import Header from '../components/Header';

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { blogPosts } = useBlogContext();
  
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black/90 backdrop-blur-md text-gray-200">
      <Header />
      
      {/* Hero section */}
      <div className="pt-24 pb-12 md:pt-36 md:pb-20 relative glass-panel">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Insights & Stories</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover travel tips, destination guides, and stories from our expert team
          </p>
          
          {/* Search bar */}
          <div className="max-w-md mx-auto mt-8 relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-elsol-sage" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pl-10 pr-4 bg-black/60 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-elsol-sage text-gray-200 placeholder-gray-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog posts grid */}
      <div className="elsol-section">
        <div className="container mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-2">No results found</h3>
              <p className="text-gray-400">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
