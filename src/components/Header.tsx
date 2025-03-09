import React, { useState, useEffect } from 'react';
import { 
  Home,
  Plane,
  Globe,
  Navigation,
  Users,
  Phone,
  BookOpen,
  Menu,
  X 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-2 sm:px-4 mx-2 sm:mx-6 mt-2 sm:mt-6 ${isScrolled ? 'backdrop-blur-lg bg-black/50' : ''}`}>
      <div className="container mx-auto px-2 sm:px-4 md:px-8 max-w-screen-2xl">
        <div className={`relative rounded-full backdrop-blur-md bg-black/30 border border-elsol-sage/10 py-2 sm:py-3 px-3 sm:px-4 overflow-hidden ${isScrolled ? 'shadow-lg' : ''}`}>
          {/* Animated glow effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-elsol-sage/0 via-elsol-sage/10 to-elsol-sage/0 animate-glow-move" />
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-between">        
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter flex items-center transition-transform hover:scale-105">
                <Plane className="mr-1 sm:mr-2 text-elsol-sage group-hover:text-white transition-colors duration-300" size={20} />
                <span className="text-elsol-sage group-hover:text-white transition-colors duration-300">ELSOL</span>
                <span className="text-gray-300 group-hover:text-elsol-sage transition-colors duration-300"> TRAVEL</span>
              </span>
            </Link>
            
            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="p-2 transition-all text-gray-300 hover:text-elsol-sage active:scale-95"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute left-0 block h-0.5 w-6 bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 top-3' : 'top-1'}`} />
                  <span className={`absolute left-0 block h-0.5 w-6 bg-current transform transition-all duration-300 top-3 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                  <span className={`absolute left-0 block h-0.5 w-6 bg-current transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 top-3' : 'top-5'}`} />
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {[
                { to: "/", icon: Home, label: "Home" },
                { to: "/services", icon: Globe, label: "Services" },
                { to: "/destinations", icon: Navigation, label: "Destinations" },
                { to: "/about", icon: Users, label: "About Us" },
                { to: "/contact", icon: Phone, label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative font-medium transition-all duration-300 hover:text-elsol-sage text-gray-300 flex items-center hover:scale-105 group px-3 py-2 ${location.pathname === item.to ? 'text-elsol-sage' : ''}`}
                >
                  <span className="absolute inset-0 bg-elsol-sage/0 group-hover:bg-elsol-sage/10 rounded-lg transition-colors duration-300" />
                  <item.icon size={16} className={`mr-1.5 text-elsol-sage group-hover:scale-110 transition-transform duration-300 ${location.pathname === item.to ? 'scale-110' : ''}`} />
                  <span className="relative">{item.label}</span>
                </Link>
              ))}
              <Link to="/blogs" 
                className={`elsol-button transition-all duration-300 hover:scale-110 hover:shadow-glow flex items-center ${location.pathname === '/blogs' ? 'bg-elsol-sage text-black' : ''}`}
              >
                <BookOpen size={16} className="mr-1.5" />
                Blogs
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-0 top-[60px] sm:top-[76px] bg-black/95 backdrop-blur-xl transform ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} transition-all duration-300 ease-in-out`}
          onClick={() => setMobileMenuOpen(false)}
        >
          <nav className="flex flex-col h-[calc(100vh-76px)] overflow-y-auto py-6 px-4">
            {[
              { to: "/", icon: Home, label: "Home" },
              { to: "/services", icon: Globe, label: "Services" },
              { to: "/destinations", icon: Navigation, label: "Destinations" },
              { to: "/about", icon: Users, label: "About Us" },
              { to: "/contact", icon: Phone, label: "Contact" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`relative font-medium px-4 py-4 text-gray-300 hover:text-elsol-sage transition-all flex items-center group active:scale-95 ${location.pathname === item.to ? 'text-elsol-sage bg-elsol-sage/10' : ''}`}
                onClick={(e) => e.stopPropagation()}
              >
                <span className="absolute inset-0 bg-elsol-sage/0 group-hover:bg-elsol-sage/10 rounded-lg transition-colors duration-300" />
                <item.icon size={20} className={`mr-3 text-elsol-sage group-hover:scale-110 transition-transform duration-300 ${location.pathname === item.to ? 'scale-110' : ''}`} />
                <span className="relative text-lg">{item.label}</span>
              </Link>
            ))}
            <div className="mt-6 px-4">
              <Link 
                to="/blogs" 
                className={`elsol-button block text-center flex items-center justify-center text-lg active:scale-95 ${location.pathname === '/blogs' ? 'bg-elsol-sage text-black' : ''}`}
                onClick={(e) => e.stopPropagation()}
              >
                <BookOpen size={20} className="mr-3" />
                Blogs
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
