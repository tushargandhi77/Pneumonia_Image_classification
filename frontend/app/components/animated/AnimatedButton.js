'use client';

import { motion } from 'framer-motion';

const AnimatedButton = ({ 
  children, 
  onClick, 
  className = '', 
  type = 'button', 
  disabled = false, 
  whileHover = { scale: 1.05 }, 
  whileTap = { scale: 0.95 } 
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`rounded-full font-bold py-3 px-8 transition duration-300 ease-in-out ${className}`}
      whileHover={whileHover}
      whileTap={whileTap}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
