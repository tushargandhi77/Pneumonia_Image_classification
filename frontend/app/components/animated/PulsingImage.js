'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const PulsingImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = ''
}) => {
  return (
    <motion.div
      className={className}
      animate={{ 
        scale: [1, 1.03, 1],
        opacity: [0.9, 1, 0.9] 
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity,
        ease: "easeInOut" 
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg shadow-lg"
      />
    </motion.div>
  );
};

export default PulsingImage;
