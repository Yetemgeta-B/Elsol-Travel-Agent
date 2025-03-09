import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plane, 
  Hotel, 
  Globe, 
  CreditCard, 
  Headphones, 
  Shield,
  Briefcase,
  Map
} from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    description: "International and domestic flight reservations with competitive rates and flexible options."
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description: "Luxury and budget accommodations worldwide with exclusive deals and packages."
  },
  {
    icon: Globe,
    title: "Tour Packages",
    description: "Customized tour packages for individuals and groups with expert guidance."
  },
  {
    icon: CreditCard,
    title: "Travel Insurance",
    description: "Comprehensive travel insurance coverage for worry-free journeys."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your travel needs and emergencies."
  },
  {
    icon: Shield,
    title: "Visa Assistance",
    description: "Professional visa processing and documentation assistance."
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description: "Specialized business travel solutions and corporate packages."
  },
  {
    icon: Map,
    title: "Adventure Tours",
    description: "Exciting adventure tours and activities for thrill-seekers."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Services = () => {
  return (
    <section id="services" className="elsol-section section-bg-dark">
      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="section-subheading mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive travel solutions tailored to your needs
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-panel p-6 rounded-xl hover-lift hover-glow group"
            >
              <div className="flex items-start">
                <div className="mr-4">
                  <service.icon 
                    size={24} 
                    className="text-elsol-sage group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-100 group-hover:text-elsol-sage transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
