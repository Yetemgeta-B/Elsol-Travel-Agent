
import React, { useState } from 'react';
import BlogCard, { BlogPost } from '../components/BlogCard';
import { Search } from 'lucide-react';

// Sample blog posts data
const sampleBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Hidden Gems in Ethiopia You Need to Visit',
    excerpt: "Discover Ethiopia's best-kept secrets beyond the usual tourist destinations. These lesser-known spots will take your breath away.",
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nunc. Nulla facilisi. Phasellus auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nunc.',
    author: 'Eleni Nigussie',
    date: 'June 15, 2023',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=800&q=80',
    slug: 'top-10-hidden-gems-ethiopia'
  },
  {
    id: '2',
    title: 'How to Prepare for Your First International Flight',
    excerpt: "First time flying abroad? Here's everything you need to know, from packing tips to navigating airports and dealing with jet lag.",
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nunc. Nulla facilisi. Phasellus auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nunc.',
    author: 'Samuel Getachew',
    date: 'May 22, 2023',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=800&q=80',
    slug: 'prepare-first-international-flight'
  },
  {
    id: '3',
    title: 'The Ultimate Guide to Ethiopian Coffee Culture',
    excerpt: 'Experience the rich tradition of Ethiopian coffee ceremonies and learn about the birthplace of coffee.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nunc. Nulla facilisi. Phasellus auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nunc.',
    author: 'Bethlehem Alemu',
    date: 'April 10, 2023',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
    slug: 'ethiopian-coffee-culture-guide'
  },
  {
    id: '4',
    title: 'Budget Travel: Exploring Africa Without Breaking the Bank',
    excerpt: 'Practical tips and strategies for experiencing the diverse beauty of Africa on a budget-friendly itinerary.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nunc. Nulla facilisi. Phasellus auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nunc.',
    author: 'Dawit Mekonnen',
    date: 'March 5, 2023',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=800&q=80',
    slug: 'budget-travel-africa'
  },
  {
    id: '5',
    title: 'Essential Travel Documents: What You Need for International Travel',
    excerpt: "A comprehensive checklist of all the documents you'll need for a smooth international travel experience.",
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nunc. Nulla facilisi. Phasellus auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nunc.',
    author: 'Hanna Girma',
    date: 'February 18, 2023',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    slug: 'essential-travel-documents'
  },
  {
    id: '6',
    title: 'Luxury Travel on a Budget: Tips and Tricks',
    excerpt: 'How to experience luxury accommodations, dining, and experiences without paying full price.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nunc. Nulla facilisi. Phasellus auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nunc.',
    author: 'Eleni Nigussie',
    date: 'January 30, 2023',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1580237072353-751a8a5b2561?auto=format&fit=crop&w=800&q=80',
    slug: 'luxury-travel-budget'
  },
];

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPosts = sampleBlogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-gray-200">
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
