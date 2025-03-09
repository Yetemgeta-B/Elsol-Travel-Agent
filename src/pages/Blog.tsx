import React from 'react';
import { useBlogContext } from '../context/BlogContext';
import BlogCard from '../components/BlogCard';
import AdminButton from '../components/AdminButton';
import { motion } from 'framer-motion';

const Blog = () => {
  const { blogPosts } = useBlogContext();

  return (
    <>
      <section className="elsol-section section-bg-darker min-h-screen">
        <div className="relative z-10">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Blog
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover stories, insights, and guides about Ethiopian travel
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 }
                  }
                }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>

          {blogPosts.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-gray-400 text-lg">No blog posts yet. Check back soon!</p>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* Admin Button outside the section for proper positioning */}
      <AdminButton />
    </>
  );
};

export default Blog; 