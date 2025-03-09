
import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-black/60 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="aspect-video overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1 text-elsol-sage" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1 text-elsol-sage" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-200 line-clamp-2">{post.title}</h3>
        <p className="text-gray-400 mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center text-sm text-gray-400">
            <User size={14} className="mr-1 text-elsol-sage" />
            <span>{post.author}</span>
          </div>
          <Link to={`/blog/${post.slug}`} className="text-elsol-sage font-medium hover:underline">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
