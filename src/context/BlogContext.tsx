import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BlogPost } from '../types/blog';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../Config/firebaseConfig';

// Initial sample blog posts
const initialBlogPosts: BlogPost[] = [
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

interface BlogContextType {
  blogPosts: BlogPost[];
  addBlogPost: (post: Omit<BlogPost, 'id'>) => void;
  editBlogPost: (post: BlogPost) => void;
  deleteBlogPost: (id: string) => void;
  getBlogPost: (slug: string) => BlogPost | undefined;
  refreshBlogPosts: () => Promise<void>;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlogContext must be used within a BlogProvider');
  }
  return context;
};

interface BlogProviderProps {
  children: ReactNode;
}

export const BlogProvider = ({ children }: BlogProviderProps) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [lastRefresh, setLastRefresh] = useState<number>(Date.now());

  // Function to refresh blog posts
  const refreshBlogPosts = async () => {
    try {
      // Add a small random delay to prevent all clients from refreshing at exactly the same time
      const randomDelay = Math.floor(Math.random() * 500);
      await new Promise(resolve => setTimeout(resolve, randomDelay));
      
      const storedPosts = localStorage.getItem('blogPosts');
      if (storedPosts) {
        setBlogPosts(JSON.parse(storedPosts));
      } else {
        setBlogPosts(initialBlogPosts);
        // Initialize localStorage if it's empty
        localStorage.setItem('blogPosts', JSON.stringify(initialBlogPosts));
      }
      
      setLastRefresh(Date.now());
    } catch (error) {
      console.error('Error refreshing blog posts:', error);
    }
  };

  // Initialize from localStorage or use initial posts
  useEffect(() => {
    refreshBlogPosts();
    
    // Set up a periodic refresh every 30 seconds
    const refreshInterval = setInterval(() => {
      refreshBlogPosts();
    }, 30000);
    
    return () => clearInterval(refreshInterval);
  }, []);

  // Update localStorage when posts change
  useEffect(() => {
    if (blogPosts.length > 0) {
      localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
      
      // Add a timestamp to track when the data was last updated
      localStorage.setItem('blogPostsLastUpdated', Date.now().toString());
      
      // Broadcast the change to other tabs/windows
      const event = new CustomEvent('blogPostsUpdated', { 
        detail: { 
          posts: blogPosts,
          timestamp: Date.now()
        } 
      });
      window.dispatchEvent(event);
    }
  }, [blogPosts]);

  // Listen for changes from other tabs/windows
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'blogPosts' && e.newValue) {
        const newPosts = JSON.parse(e.newValue);
        setBlogPosts(newPosts);
      }
      
      if (e.key === 'blogPostsLastUpdated' && e.newValue) {
        const lastUpdateTime = parseInt(e.newValue, 10);
        // Only refresh if the update is newer than our last refresh
        if (lastUpdateTime > lastRefresh) {
          refreshBlogPosts();
        }
      }
    };

    const handleBlogPostsUpdated = (e: CustomEvent<{posts: BlogPost[], timestamp: number}>) => {
      // Only update if the event data is newer than our last refresh
      if (e.detail.timestamp > lastRefresh) {
        setBlogPosts(e.detail.posts);
        setLastRefresh(e.detail.timestamp);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('blogPostsUpdated', handleBlogPostsUpdated as EventListener);

    // Add a visibility change listener to refresh when tab becomes visible again
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        refreshBlogPosts();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('blogPostsUpdated', handleBlogPostsUpdated as EventListener);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [lastRefresh]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'blogPosts'), (snapshot) => {
      const posts = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title,
          excerpt: data.excerpt,
          content: data.content,
          author: data.author,
          date: data.date,
          readTime: data.readTime,
          imageUrl: data.imageUrl,
          slug: data.slug
        } as BlogPost; // Ensure all fields are included
      });
      setBlogPosts(posts);
    });

    return () => unsubscribe();
  }, []);

  const addBlogPost = (post: Omit<BlogPost, 'id'>) => {
    const newPost: BlogPost = {
      ...post,
      id: Date.now().toString(),
    };
    setBlogPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  const editBlogPost = (updatedPost: BlogPost) => {
    setBlogPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  const getBlogPost = (slug: string) => {
    return blogPosts.find((post) => post.slug === slug);
  };

  return (
    <BlogContext.Provider
      value={{ 
        blogPosts, 
        addBlogPost, 
        editBlogPost, 
        deleteBlogPost, 
        getBlogPost,
        refreshBlogPosts 
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
