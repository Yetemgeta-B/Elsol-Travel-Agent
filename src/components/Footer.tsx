import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-bg border-t border-elsol-sage/10">
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="hover-glow p-4 rounded-xl transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-white">ELSOL Travel</h3>
            <p className="text-gray-400 mb-4">
              Your trusted IATA accredited travel partner, providing exceptional service since 2017.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-elsol-sage transition-colors hover:scale-110 transform duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-elsol-sage transition-colors hover:scale-110 transform duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-elsol-sage transition-colors hover:scale-110 transform duration-300">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-elsol-sage transition-colors hover:scale-110 transform duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="hover-glow p-4 rounded-xl transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-elsol-sage transition-colors hover:translate-x-1 transform inline-block">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-elsol-sage transition-colors hover:translate-x-1 transform inline-block">Services</Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-elsol-sage transition-colors hover:translate-x-1 transform inline-block">Destinations</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-elsol-sage transition-colors hover:translate-x-1 transform inline-block">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-elsol-sage transition-colors hover:translate-x-1 transform inline-block">Contact</Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-400 hover:text-elsol-sage transition-colors hover:translate-x-1 transform inline-block">Blogs</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="hover-glow p-4 rounded-xl transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin size={20} className="text-elsol-sage mt-1 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  Bole Medhanialem, Milkomi city complex 1st floor, office #119<br />
                  Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex items-center group">
                <Phone size={20} className="text-elsol-sage mr-2 group-hover:scale-110 transition-transform duration-300" />
                <a href="tel:+251911234567" className="text-gray-400 group-hover:text-white transition-colors duration-300">+251 911 234 567</a>
              </li>
              <li className="flex items-center group">
                <Mail size={20} className="text-elsol-sage mr-2 group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:info@elsol.travel" className="text-gray-400 group-hover:text-white transition-colors duration-300">info@elsol.travel</a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="hover-glow p-4 rounded-xl transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-white">Business Hours</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white transition-colors duration-300">Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li className="text-gray-400 hover:text-white transition-colors duration-300">Saturday: 9:00 AM - 3:00 PM</li>
              <li className="text-gray-400 hover:text-white transition-colors duration-300">Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-2 border-t border-gray-800">
          <p className="text-center text-gray-400 hover:text-white transition-colors duration-300 text-sm py-1">
            {new Date().getFullYear()} ELSOL Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
