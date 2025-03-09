import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plane, 
  Hotel, 
  Globe, 
  Headphones, 
  CreditCard, 
  Calendar,
//   Passport,
  Bus,
  Train
} from 'lucide-react';
import ScrollButtons from '../components/ScrollButtons';

const services = [
  {
    icon: Plane,
    title: 'Flight Booking',
    description: 'International and domestic flight reservations with competitive prices and flexible options.'
  },
  {
    icon: Hotel,
    title: 'Hotel Reservations',
    description: 'Book accommodations worldwide, from luxury hotels to budget-friendly options.'
  },
  {
    icon: Globe,
    title: 'Tour Packages',
    description: 'Customized tour packages for individuals and groups to destinations worldwide.'
  },
  {
    // icon: Passport,
    title: 'Visa Assistance',
    description: 'Professional assistance with visa applications and documentation.'
  },
  {
    icon: Bus,
    title: 'Ground Transportation',
    description: 'Reliable ground transportation services including car rentals and transfers.'
  },
  {
    icon: Train,
    title: 'Railway Booking',
    description: 'Book train tickets for scenic rail journeys and efficient travel.'
  },
  {
    icon: CreditCard,
    title: 'Travel Insurance',
    description: 'Comprehensive travel insurance coverage for peace of mind during your journey.'
  },
  {
    icon: Calendar,
    title: 'Event Planning',
    description: 'Corporate event planning and MICE (Meetings, Incentives, Conferences, Events) services.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer support for all your travel needs.'
  }
];

const Services = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-elsol-sage">Our Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Experience seamless travel planning with our comprehensive range of services designed to make your journey memorable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group hover-glow p-6 rounded-xl backdrop-blur-sm bg-black/30 border border-elsol-sage/10 transition-all duration-300 hover:border-elsol-sage/30"
            >
              <div className="flex items-center mb-4">
                <service.icon className="w-8 h-8 text-elsol-sage group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold ml-3 text-gray-100 group-hover:text-elsol-sage transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-elsol-sage">
            Ready to Plan Your Journey?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your travel plans and let us help you create unforgettable experiences.
          </p>
          <a
            href="#contact"
            className="elsol-button inline-flex items-center hover:scale-110 transition-transform duration-300"
          >
            <Headphones className="w-5 h-5 mr-2" />
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services; 