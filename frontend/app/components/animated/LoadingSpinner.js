'use client';

import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 50, color = '#4F46E5' }) => {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          border: `4px solid rgba(0, 0, 0, 0.1)`,
          borderTop: `4px solid ${color}`,
          borderRight: `4px solid ${color}`
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          ease: "linear",
          repeat: Infinity
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
