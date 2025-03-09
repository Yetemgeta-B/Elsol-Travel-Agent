import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Facebook, Twitter, Linkedin } from 'lucide-react';
import type { BlogPost } from '../components/BlogCard';

// Sample blog posts data (same as in Blogs.tsx)
const sampleBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Hidden Gems in Ethiopia You Need to Visit',
    excerpt: "Discover Ethiopia's best-kept secrets beyond the usual tourist destinations. These lesser-known spots will take your breath away.",
    content: `
      <p>Ethiopia is a land of stunning landscapes, rich history, and vibrant cultures. While attractions like Lalibela and the Danakil Depression are well-known, there are countless hidden treasures waiting to be discovered.</p>
      
      <h2>1. Bale Mountains National Park</h2>
      <p>Home to the Ethiopian wolf, nyala, and over 260 species of birds, the Bale Mountains offer some of the most spectacular scenery in East Africa. The afro-alpine plateau, dramatic peaks, and lush forests create a diverse ecosystem that few travelers get to experience.</p>
      
      <h2>2. Harar's Old Town</h2>
      <p>The ancient walled city of Harar is a UNESCO World Heritage site and one of Islam's holiest cities. Its maze-like streets, colorful markets, and traditional Harari houses provide a glimpse into Ethiopia's complex history. Don't miss the nightly hyena feeding ritual!</p>
      
      <h2>3. Sof Omar Caves</h2>
      <p>This extensive network of limestone caves is one of Ethiopia's natural wonders. The river-carved passages stretch for over 15 kilometers, making it Africa's longest cave system. The play of light on the stalactites and stalagmites creates an otherworldly atmosphere.</p>
      
      <h2>4. Dorze Village</h2>
      <p>Nestled in the hills above Lake Chamo, the Dorze people are known for their unique beehive-shaped homes and exceptional weaving skills. A visit here offers insight into traditional lifestyles that have remained largely unchanged for centuries.</p>
      
      <h2>5. Chebera Churchura National Park</h2>
      <p>This remote park in southwestern Ethiopia is home to elephants, lions, and hippos, yet receives very few visitors. Its pristine forest and savanna landscapes provide an authentic wildlife experience without the crowds.</p>
    `,
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
    content: `
      <p>Taking your first international flight can be both exciting and overwhelming. With proper preparation, you can ensure a smooth journey from takeoff to landing.</p>
      
      <h2>Before Your Trip</h2>
      <p>Start by checking passport requirements for your destination. Many countries require that your passport be valid for at least six months beyond your planned stay. Apply for any necessary visas well in advance, as processing times can vary widely.</p>
      
      <p>Research your destination's customs, local laws, and cultural norms. Understanding basic phrases in the local language can also enhance your experience and show respect to locals.</p>
      
      <h2>Packing Essentials</h2>
      <p>Pack light but smart. Essential items include:</p>
      <ul>
        <li>Travel documents (passport, visa, flight tickets, insurance)</li>
        <li>Medications with prescriptions</li>
        <li>Universal power adapter</li>
        <li>Comfortable clothes layered for varying temperatures</li>
        <li>Basic toiletries (under 100ml for carry-on)</li>
      </ul>
      
      <h2>At the Airport</h2>
      <p>Arrive at least 3 hours before an international flight. This gives you ample time for check-in, security, and any unexpected delays. Keep your passport and boarding pass easily accessible as you'll need to show them multiple times.</p>
      
      <h2>During the Flight</h2>
      <p>Stay hydrated and move around periodically to prevent stiffness. Consider bringing an eye mask, earplugs, and a travel pillow for comfort on long flights. Set your watch to your destination's time zone to begin adjusting to the new schedule.</p>
    `,
    author: 'Samuel Getachew',
    date: 'May 22, 2023',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=800&q=80',
    slug: 'prepare-first-international-flight'
  },
  // Add other blog posts with content
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

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = sampleBlogPosts.find(p => p.slug === slug);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
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
    <div className="min-h-screen bg-black text-gray-200 pt-24">
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
  );
};

export default BlogPost;
