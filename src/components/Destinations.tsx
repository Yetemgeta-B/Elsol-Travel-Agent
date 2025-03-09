import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Calendar, DollarSign } from 'lucide-react';

const destinations = [
  {
    image: "https://images.unsplash.com/photo-1597975371270-cf810771f7f5?auto=format&fit=crop&w=800&q=80",
      name: "Lalibela",
    description: "Explore the ancient rock-hewn churches",
    price: "From $599",
    duration: "3-5 days"
  },
  {
    image: "https://images.unsplash.com/photo-1589308454676-62ed2a0fb2a8?auto=format&fit=crop&w=800&q=80",
    name: "Axum",
    description: "Discover the ancient kingdom of Axum",
    price: "From $499",
    duration: "2-4 days"
  },
  {
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
    name: "Simien Mountains",
    description: "Trek through breathtaking landscapes",
    price: "From $699",
    duration: "4-7 days"
  },
  {
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=800&q=80",
    name: "Danakil Depression",
    description: "Experience the world's hottest place",
    price: "From $799",
    duration: "3-6 days"
  },
  {
    image: "https://images.unsplash.com/photo-1523192193543-6e7296d960e4?auto=format&fit=crop&w=800&q=80",
    name: "Omo Valley",
    description: "Meet indigenous tribes and cultures",
    price: "From $899",
    duration: "5-8 days"
  },
  {
    image: "https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?auto=format&fit=crop&w=800&q=80",
    name: "Gondar",
    description: "Visit the medieval castles and churches",
    price: "From $449",
    duration: "2-4 days"
  },
  {
    image: "https://images.unsplash.com/photo-1553685502-9dc47d4e3c54?auto=format&fit=crop&w=800&q=80",
    name: "Bale Mountains",
    description: "Spot rare wildlife and endemic species",
    price: "From $649",
    duration: "4-6 days"
  },
  {
    image: "https://images.unsplash.com/photo-1590094233767-f8e1c7e5aee8?auto=format&fit=crop&w=800&q=80",
    name: "Lake Tana",
    description: "Explore ancient monasteries and islands",
    price: "From $399",
    duration: "2-3 days"
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

const Destinations = () => {
  return (
    <section id="destinations" className="elsol-section section-bg-darker">
      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Popular Destinations
          </motion.h2>
          <motion.p 
            className="section-subheading mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover Ethiopia's most breathtaking locations
          </motion.p>
      </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-panel rounded-xl overflow-hidden group hover-lift hover-glow"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-elsol-sage transition-colors duration-300">
                  {destination.name}
                </h3>
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {destination.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-400">
                    <Calendar size={16} className="mr-1 text-elsol-sage" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <DollarSign size={16} className="mr-1 text-elsol-sage" />
                    <span>{destination.price}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#contact" className="elsol-button-outline inline-flex items-center">
            <Navigation size={16} className="mr-2" />
            Explore All Destinations
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;
