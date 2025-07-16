'use client';

import { motion } from 'framer-motion';

const AnimatedHeading = ({ 
  children, 
  className = '', 
  delay = 0,
  as = 'h1'
}) => {
  const Tag = as;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
    >
      <Tag className={className}>
        {children}
      </Tag>
    </motion.div>
  );
};

export default AnimatedHeading;
