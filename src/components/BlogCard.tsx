import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Plane, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatDate } from '../lib/utils';
import { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel rounded-xl overflow-hidden hover-lift w-full"
    >
      <Link to={`/blog/${post.slug}`}>
        <div className="relative h-48 sm:h-56">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          {post.travelDetails?.price && (
            <div className="absolute top-4 right-4 bg-elsol-sage text-black px-3 py-1 rounded-full text-sm sm:text-base font-semibold">
              {post.travelDetails.price}
            </div>
          )}
        </div>

        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-elsol-sage line-clamp-2">
            {post.title}
          </h3>

          {post.travelDetails ? (
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center text-gray-400 text-sm sm:text-base">
                <Plane className="w-4 h-4 mr-2 text-elsol-sage flex-shrink-0" />
                <span className="truncate">{post.travelDetails.airline}</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm sm:text-base">
                <Calendar className="w-4 h-4 mr-2 text-elsol-sage flex-shrink-0" />
                <span className="truncate">
                  {formatDate(post.travelDetails.departureDate)} - {formatDate(post.travelDetails.returnDate)}
                </span>
              </div>
              <div className="flex items-center text-gray-400 text-sm sm:text-base">
                <Clock className="w-4 h-4 mr-2 text-elsol-sage flex-shrink-0" />
                <span className="truncate">
                  {post.travelDetails.departureTime} - {post.travelDetails.returnTime}
                </span>
              </div>
              <div className="flex items-center text-gray-400 text-sm sm:text-base">
                <Briefcase className="w-4 h-4 mr-2 text-elsol-sage flex-shrink-0" />
                <span className="truncate">{post.travelDetails.baggage}</span>
              </div>
            </div>
          ) : (
            <>
              <p className="text-gray-400 mb-4 line-clamp-2 text-sm sm:text-base">{post.excerpt}</p>
              <div className="flex items-center text-xs sm:text-sm text-gray-500 flex-wrap gap-2">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1 text-elsol-sage" />
                  <span className="truncate">{post.author}</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1 text-elsol-sage" />
                  <span>{formatDate(post.date)}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
