import React from 'react';
import { motion } from 'framer-motion';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      {/* Loading container with glass effect */}
      <div className="relative w-[300px] h-[300px] glass-panel rounded-xl overflow-hidden">
        {/* Sky background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black">
          {/* Clouds */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute cloud"
              initial={{ x: "150px", y: `${30 + i * 20}%` }}
              animate={{ x: "-150px" }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2
              }}
            />
          ))}
        </div>

        {/* Landmarks
        <div className="absolute bottom-0 w-full h-32 flex items-end justify-around">
          <motion.div
            className="landmark eiffel-tower"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 0.5 }}
          />
          <motion.div
            className="landmark burj-khalifa"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 0.7 }}
          />
          <motion.div
            className="landmark taj-mahal"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 0.9 }}
          />
        </div> */}

        {/* Centered plane */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="plane" />
        </motion.div>

        {/* Loading text */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-elsol-sage text-lg font-medium"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Loading...
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;
