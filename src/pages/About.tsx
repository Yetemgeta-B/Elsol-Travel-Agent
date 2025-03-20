import React from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Target, 
  Heart, 
  Check, 
  Phone, 
  Mail, 
  MapPin
} from 'lucide-react';
import Layout from '../components/Layout';

const teamMembers = [
  {
    name: 'Yohannes Tadesse',
    role: 'Founder & CEO',
    description: 'With over 15 years in the travel industry, Yohannes leads our vision of creating exceptional travel experiences.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60'
  },
  {
    name: 'Sara Mohammed',
    role: 'Head of Operations',
    description: 'Sara ensures smooth operation of all travel services, specializing in luxury travel arrangements and customer satisfaction.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60'
  },
  {
    name: 'Dawit Haile',
    role: 'Travel Consultant',
    description: 'An expert in crafting personalized travel experiences, Dawit brings 8 years of expertise in international tourism.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60'
  },
  {
    name: 'Bethlehem Alemu',
    role: 'Customer Relations Manager',
    description: 'Dedicated to ensuring every client receives exceptional service and support throughout their travel journey.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60'
  },
  {
    name: 'Michael Gebre',
    role: 'Marketing Director',
    description: 'Leading our digital presence and marketing strategies to showcase the best travel experiences to our clients.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60'
  },
  {
    name: 'Helen Tekle',
    role: 'Finance Manager',
    description: 'Managing financial operations and ensuring the best value for our clients\' travel investments.',
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500&auto=format&fit=crop&q=60'
  }
];

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="page-header">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center section-header">
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-elsol-sage"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                About Elsol Travel Agency
              </motion.h1>
              <div className="h-1.5 w-24 bg-elsol-sage/30 mx-auto mt-4 mb-6 rounded-full"></div>
              <motion.p 
                className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Your trusted partner in creating unforgettable travel experiences since 2018
              </motion.p>
            </motion.div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-elsol-sage mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Elsol Travel Agency
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your trusted partner in creating unforgettable travel experiences since 2018
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="glass-panel p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="mb-4">
                <Eye className="w-8 h-8 text-elsol-sage" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 text-sm sm:text-base">
                To be the leading travel agency in Ethiopia, known for exceptional service and unforgettable travel experiences.
              </p>
            </motion.div>

            <motion.div 
              className="glass-panel p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="mb-4">
                <Target className="w-8 h-8 text-elsol-sage" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 text-sm sm:text-base">
                To provide personalized travel solutions that exceed our clients' expectations while promoting sustainable tourism.
              </p>
            </motion.div>

            <motion.div 
              className="glass-panel p-6 rounded-xl md:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="mb-4">
                <Heart className="w-8 h-8 text-elsol-sage" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Our Values</h2>
              <ul className="text-gray-300 space-y-2 text-sm sm:text-base">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-elsol-sage mr-2 flex-shrink-0" />
                  <span>Excellence in service delivery</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-elsol-sage mr-2 flex-shrink-0" />
                  <span>Integrity and transparency</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-elsol-sage mr-2 flex-shrink-0" />
                  <span>Customer satisfaction</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-elsol-sage mr-2 flex-shrink-0" />
                  <span>Innovation in travel solutions</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-elsol-sage mb-8">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={member.name}
                  className="glass-panel p-6 rounded-xl hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <div className="mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-elsol-sage shadow-lg hover:border-4 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-elsol-sage mb-3 font-medium">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-elsol-sage mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div 
                className="glass-panel p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <div className="mb-4">
                  <Phone className="w-8 h-8 text-elsol-sage mx-auto" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Phone</h3>
                <a 
                  href="tel:+251911123456" 
                  className="text-gray-300 hover:text-elsol-sage transition-colors duration-300"
                >
                  +251 911 123 456
                </a>
              </motion.div>

              <motion.div 
                className="glass-panel p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="mb-4">
                  <Mail className="w-8 h-8 text-elsol-sage mx-auto" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Email</h3>
                <a 
                  href="mailto:info@elsol.com" 
                  className="text-gray-300 hover:text-elsol-sage transition-colors duration-300"
                >
                  info@elsol.com
                </a>
              </motion.div>

              <motion.div 
                className="glass-panel p-6 rounded-xl sm:col-span-2 lg:col-span-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <div className="mb-4">
                  <MapPin className="w-8 h-8 text-elsol-sage mx-auto" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Location</h3>
                <a 
                  href="https://maps.google.com/?q=Addis+Ababa,Ethiopia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-elsol-sage transition-colors duration-300"
                >
                  Bole Medhanialem, Addis Ababa, Ethiopia
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
