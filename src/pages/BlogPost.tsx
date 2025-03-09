
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useBlogContext } from '../context/BlogContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getBlogPost } = useBlogContext();
  const post = getBlogPost(slug || '');
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-glass flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-200">Blog Post Not Found</h2>
            <Link to="/blogs" className="elsol-button inline-flex items-center transition-all duration-300 hover:shadow-glow">
              <ArrowLeft size={16} className="mr-2" />
              Back to Blogs
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-glass text-gray-200 flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32">
        {/* Back button */}
        <motion.div 
          className="container mx-auto px-4 py-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/blogs" className="inline-flex items-center text-elsol-sage hover:underline transition-all duration-300 hover:text-white">
            <ArrowLeft size={16} className="mr-2" />
            Back to All Blogs
          </Link>
        </motion.div>
        
        {/* Hero Image */}
        <motion.div 
          className="w-full aspect-video max-h-[500px] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Content */}
        <div className="elsol-section">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto glass-panel p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {/* Meta data */}
              <div className="flex flex-wrap items-center mb-6 text-gray-400 text-sm">
                <div className="flex items-center mr-6 mb-2">
                  <Calendar size={16} className="mr-2 text-elsol-sage" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <Clock size={16} className="mr-2 text-elsol-sage" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center mb-2">
                  <User size={16} className="mr-2 text-elsol-sage" />
                  <span>{post.author}</span>
                </div>
              </div>
              
              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-100">{post.title}</h1>
              
              {/* Article Content */}
              <div className="prose prose-lg max-w-none prose-headings:text-gray-200 prose-p:text-gray-300 prose-strong:text-gray-200 prose-a:text-elsol-sage mb-10">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
              
              {/* Share buttons */}
              <div className="border-t border-gray-800 pt-6 mt-10">
                <p className="text-gray-400 mb-4">Share this article:</p>
                <div className="flex space-x-4">
                  <button className="p-2 rounded-full bg-black/60 hover:bg-elsol-sage hover:text-black transition-all duration-300 hover:scale-110">
                    <Facebook size={18} />
                  </button>
                  <button className="p-2 rounded-full bg-black/60 hover:bg-elsol-sage hover:text-black transition-all duration-300 hover:scale-110">
                    <Twitter size={18} />
                  </button>
                  <button className="p-2 rounded-full bg-black/60 hover:bg-elsol-sage hover:text-black transition-all duration-300 hover:scale-110">
                    <Linkedin size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
