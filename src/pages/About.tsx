import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Target, 
  Heart,
  Shield,
  Globe,
  Clock,
  Smile
} from 'lucide-react';
import ScrollButtons from '../components/ScrollButtons';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We are passionate about creating memorable travel experiences for our clients.'
  },
  {
    icon: Shield,
    title: 'Trust',
    description: 'Building trust through transparency and reliable service delivery.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Committed to delivering excellence in every aspect of our service.'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Connected worldwide to provide the best travel solutions.'
  }
];

const achievements = [
  {
    number: '5000+',
    label: 'Happy Travelers'
  },
  {
    number: '50+',
    label: 'Destinations'
  },
  {
    number: '6+',
    label: 'Years Experience'
  },
  {
    number: '24/7',
    label: 'Support'
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white pt-24 pb-16">
      <ScrollButtons />
      
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-elsol-sage">About ELSOL Travel</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Your trusted IATA accredited travel partner since 2017, dedicated to creating exceptional travel experiences and unforgettable memories.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-elsol-sage">Our Story</h2>
            <p className="text-gray-300">
              Founded in 2017, ELSOL Travel has grown from a small local agency to a trusted name in the travel industry. Our journey began with a simple mission: to make travel accessible, enjoyable, and memorable for everyone.
            </p>
            <p className="text-gray-300">
              Today, we serve thousands of happy travelers, providing comprehensive travel solutions including flight bookings, hotel reservations, tour packages, and more. Our IATA accreditation stands as a testament to our commitment to excellence and industry standards.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="hover-glow p-6 rounded-xl backdrop-blur-sm bg-black/30 border border-elsol-sage/10 text-center"
              >
                <div className="text-3xl font-bold text-elsol-sage mb-2">{achievement.number}</div>
                <div className="text-gray-300 text-sm">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-elsol-sage text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group hover-glow p-6 rounded-xl backdrop-blur-sm bg-black/30 border border-elsol-sage/10 text-center transition-all duration-300 hover:border-elsol-sage/30"
              >
                <value.icon className="w-12 h-12 mx-auto mb-4 text-elsol-sage group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-3 text-gray-100 group-hover:text-elsol-sage transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-elsol-sage">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you plan your next adventure. Contact our team of travel experts today.
          </p>
          <a
            href="#contact"
            className="elsol-button inline-flex items-center hover:scale-110 transition-transform duration-300"
          >
            <Users className="w-5 h-5 mr-2" />
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 