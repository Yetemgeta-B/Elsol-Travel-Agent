import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import ScrollButtons from '../components/ScrollButtons';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white pt-24 pb-16">
      <ScrollButtons />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-elsol-sage">Contact Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get in touch with our team of travel experts. We're here to help you plan your perfect journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="hover-glow p-6 rounded-xl backdrop-blur-sm bg-black/30 border border-elsol-sage/10">
              <h2 className="text-2xl font-semibold mb-6 text-elsol-sage">Visit Our Office</h2>
              
              <div className="space-y-4">
                <div className="flex items-start group">
                  <MapPin className="w-6 h-6 text-elsol-sage mt-1 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-medium text-gray-100">Address</h3>
                    <p className="text-gray-400">
                      Bole Medhanialem, Milkomi city complex 1st floor, office #119<br />
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <Phone className="w-6 h-6 text-elsol-sage mt-1 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-medium text-gray-100">Phone</h3>
                    <p className="text-gray-400">+251 911 234 567</p>
                    <p className="text-gray-400">+251 911 234 568</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <Mail className="w-6 h-6 text-elsol-sage mt-1 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-medium text-gray-100">Email</h3>
                    <p className="text-gray-400">elsoltravel5@gmail.com</p>
                    <p className="text-gray-400">eluua123@yahoo.com</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <Clock className="w-6 h-6 text-elsol-sage mt-1 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-medium text-gray-100">Business Hours</h3>
                    <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-400">Saturday: 9:00 AM - 3:00 PM</p>
                    <p className="text-gray-400">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="hover-glow rounded-xl overflow-hidden backdrop-blur-sm bg-black/30 border border-elsol-sage/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5511363451947!2d38.7929873!3d9.0204463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f0f9a06d85%3A0x4331551f2e0d81!2sBole%20Medhanealem!5e0!3m2!1sen!2set!4v1647870000000!5m2!1sen!2set"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="hover-glow p-6 rounded-xl backdrop-blur-sm bg-black/30 border border-elsol-sage/10">
              <h2 className="text-2xl font-semibold mb-6 text-elsol-sage">Send Us a Message</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-black/50 border border-elsol-sage/20 text-white placeholder-gray-500 focus:outline-none focus:border-elsol-sage transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-black/50 border border-elsol-sage/20 text-white placeholder-gray-500 focus:outline-none focus:border-elsol-sage transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 rounded-lg bg-black/50 border border-elsol-sage/20 text-white placeholder-gray-500 focus:outline-none focus:border-elsol-sage transition-colors"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-black/50 border border-elsol-sage/20 text-white placeholder-gray-500 focus:outline-none focus:border-elsol-sage transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-black/50 border border-elsol-sage/20 text-white placeholder-gray-500 focus:outline-none focus:border-elsol-sage transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full elsol-button flex items-center justify-center group hover:scale-105 transition-transform duration-300"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 