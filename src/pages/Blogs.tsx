import React, { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import { Search } from 'lucide-react';
import { useBlogContext } from '../context/BlogContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import AdminButton from '../components/AdminButton';

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { blogPosts } = useBlogContext();
  
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-glass text-gray-200">
      <Header />
      
      {/* Hero section */}
      <motion.div 
        className="pt-36 pb-12 md:pt-40 md:pb-20 relative glass-panel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Travel Insights & Stories
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Discover travel tips, destination guides, and stories from our expert team
          </motion.p>
          
          {/* Search bar */}
          <motion.div 
            className="max-w-md mx-auto mt-8 relative"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-elsol-sage" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pl-10 pr-4 bg-black/60 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-elsol-sage text-gray-200 placeholder-gray-500 transition-all duration-300 hover:border-elsol-sage/50"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Blog posts grid */}
      <div className="elsol-section">
        <div className="container mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <BlogCard post={post} />
                </motion.div>
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
      
      <Footer />
      
      {/* Admin Button outside the section for proper positioning */}
      <AdminButton />
    </div>
  );
};

export default Blogs;
