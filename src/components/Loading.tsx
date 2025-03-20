
import React from 'react';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 glass-panel rounded-2xl overflow-hidden flex flex-col items-center justify-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-elsol-sage/5 to-transparent"></div>
        
        {/* Animated clouds */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute cloud"
              initial={{ 
                x: "120%", 
                y: `${20 + i * 15}%`,
                opacity: 0.1 + (i * 0.05)
              }}
              animate={{ 
                x: "-120%",
                opacity: [0.1 + (i * 0.05), 0.3 + (i * 0.05), 0.1 + (i * 0.05)]
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5
              }}
            />
          ))}
        </div>

        {/* Plane icon with animation */}
        <motion.div
          className="relative z-10 mb-6"
          animate={{
            y: [-8, 8, -8],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <Plane size={48} className="text-elsol-sage filter drop-shadow-[0_0_8px_rgba(83,133,44,0.6)]" />
        </motion.div>

        {/* ELSOL TRAVEL text */}
        <motion.div
          className="text-center relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-2xl font-bold tracking-wider"
            animate={{ 
              color: ['#53852c', '#6ca93b', '#53852c'] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ELSOL TRAVEL
          </motion.h2>
        </motion.div>

        {/* Loading text with dots animation */}
        <motion.div
          className="mt-4 text-elsol-sage/80 font-medium relative z-10"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex items-center">
            <span>Loading</span>
            {[...Array(3)].map((_, i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
                className="ml-0.5"
              >
                .
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Globe travel effect */}
        <motion.div 
          className="absolute bottom-4 w-full flex justify-center opacity-50"
          animate={{
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-elsol-sage to-transparent"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;
