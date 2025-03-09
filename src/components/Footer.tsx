
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter subscription logic here
  };

  return (
    <footer className="bg-elsol-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">ELSOL TRAVEL</h3>
            <p className="text-white/80 mb-4">
              Your trusted IATA accredited travel agency providing comprehensive travel solutions since 2017.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-elsol-sage transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-elsol-sage transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-elsol-sage transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-elsol-sage transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-elsol-sage transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-elsol-sage transition-colors">Services</a>
              </li>
              <li>
                <a href="#destinations" className="text-white/70 hover:text-elsol-sage transition-colors">Destinations</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-elsol-sage transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-elsol-sage transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-elsol-sage transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-elsol-sage transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 text-elsol-sage">📍</span>
                <span className="text-white/70">Bole Medhanialem, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-elsol-sage">📞</span>
                <span className="text-white/70">+251 911 234 567</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-elsol-sage">✉️</span>
                <span className="text-white/70">info@elsoltravel.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-elsol-sage">⏰</span>
                <span className="text-white/70">Mon - Fri: 8:30AM - 6:00PM<br />Sat: 9:00AM - 1:00PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to receive updates on travel deals and promotions.
            </p>
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-elsol-sage"
                required
              />
              <Button type="submit" className="bg-elsol-sage hover:bg-elsol-sage-light text-white">
                <Send size={16} />
              </Button>
            </form>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap justify-center space-x-4">
            <p className="text-white/70 mb-2 w-full text-center">Payment Methods Accepted</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-8" style={{ filter: 'brightness(0) invert(1) opacity(0.7)' }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8" style={{ filter: 'brightness(0) invert(1) opacity(0.7)' }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="American Express" className="h-8" style={{ filter: 'brightness(0) invert(1) opacity(0.7)' }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/Paypal_logo.svg" alt="PayPal" className="h-8" style={{ filter: 'brightness(0) invert(1) opacity(0.7)' }} />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/10 pt-8">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} ELSOL Travel Agency. All rights reserved. | IATA Accredited Agent
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
