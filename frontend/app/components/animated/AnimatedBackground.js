'use client';

import { motion } from 'framer-motion';

const AnimatedBackground = ({ children, numberOfElements = 10, color = 'indigo' }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {Array.from({ length: numberOfElements }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full bg-${color}-500 opacity-10`}
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: Math.random() * 5 + 10,
              repeat: Infinity,
              yoyo: true,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
