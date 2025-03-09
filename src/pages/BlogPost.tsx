
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useBlogContext } from '../context/BlogContext';
import Header from '../components/Header';

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
      <div className="min-h-screen bg-black/90 backdrop-blur-md flex items-center justify-center">
        <Header />
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-200">Blog Post Not Found</h2>
          <Link to="/blogs" className="elsol-button">
            <ArrowLeft size={16} className="mr-2" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black/90 backdrop-blur-md text-gray-200">
      <Header />
      
      <div className="pt-24">
        {/* Back button */}
        <div className="container mx-auto px-4 py-6">
          <Link to="/blogs" className="inline-flex items-center text-elsol-sage hover:underline">
            <ArrowLeft size={16} className="mr-2" />
            Back to All Blogs
          </Link>
        </div>
        
        {/* Hero Image */}
        <div className="w-full aspect-video max-h-[500px] overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="elsol-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
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
                  <button className="p-2 rounded-full bg-black/60 hover:bg-elsol-sage hover:text-black transition-colors">
                    <Facebook size={18} />
                  </button>
                  <button className="p-2 rounded-full bg-black/60 hover:bg-elsol-sage hover:text-black transition-colors">
                    <Twitter size={18} />
                  </button>
                  <button className="p-2 rounded-full bg-black/60 hover:bg-elsol-sage hover:text-black transition-colors">
                    <Linkedin size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
