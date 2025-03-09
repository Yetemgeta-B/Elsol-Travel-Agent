import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Calendar, DollarSign } from 'lucide-react';

const destinations = [
  {
    image: "https://media.istockphoto.com/id/697529054/photo/the-church-of-saint-george-in-lalibela.jpg?s=612x612&w=0&k=20&c=j3ua9h08NmxB9tym1qyP4Y378OAn1famGva6dA9CZO8=",
      name: "Lalibela",
    description: "Explore the ancient rock-hewn churches",
    price: "From 5,999 birr",
    duration: "3-5 days"
  },
  {
    image: "https://cdn.britannica.com/23/93423-050-107B2836/obelisk-kingdom-Aksum-Ethiopian-name-city.jpg?w=300",
    name: "Axum",
    description: "Discover the ancient kingdom of Axum",
    price: "From 6,750 birr",
    duration: "2-4 days"
  },
  {
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
    name: "Dubai",
    description: "Enjoy the most enjoyable place",
    price: "From 60,000 birr",
    duration: "4-7 days"
  },
  {
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=800&q=80",
    name: "Thailand",
    description: "Experience the world's hottest place",
    price: "From 79,999 birr",
    duration: "3-6 days"
  },
  {
    image: "https://images.unsplash.com/photo-1523192193543-6e7296d960e4?auto=format&fit=crop&w=800&q=80",
    name: "China",
    description: "Meet the tallest buildings in the world",
    price: "From 5,999 birr",
    duration: "5-8 days"
  },
  {
    image: "https://media.istockphoto.com/id/618832938/photo/fasilidas-palace-in-fasil-ghebbi-site-gonder.jpg?s=612x612&w=0&k=20&c=gxUWJntla_3ecm9I0-nx_ryikS8Bynb46v1fEWUSCoA=",
    name: "Gondar",
    description: "Visit the medieval castles and churches",
    price: "From 5,999 birr",
    duration: "2-4 days"
  },
  {
    image: "https://media.istockphoto.com/id/526809323/photo/view-of-the-bale-mountains-national-park-ethiopia.jpg?s=612x612&w=0&k=20&c=xZnvZNlESQoHLkXaqi3l4IQKf3tb49EwtEX98YABTTk=",
    name: "Bale Mountains",
    description: "Spot rare wildlife and endemic species",
    price: "From 3,789 birr",
    duration: "4-6 days"
  },
  {
    image: "https://media.istockphoto.com/id/480958609/photo/tiss-abay-falls-on-the-blue-nile-river-ethiopia.jpg?s=612x612&w=0&k=20&c=wljYjFrMNNPdgtDPAkTFYD4sUsyqp-7-_oYTlj6AExA=",
    name: "Lake Tana",
    description: "Explore ancient monasteries and islands",
    price: "From 9,899 birr",
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
            Discover Ethiopia's and world wide most breathtaking locations 
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
