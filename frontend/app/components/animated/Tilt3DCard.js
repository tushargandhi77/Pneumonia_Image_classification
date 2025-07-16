'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Tilt3DCard = ({ 
  children, 
  className = '', 
  tiltMaxAngle = 10, 
  scale = 1.05, 
  perspective = 1000,
  transitionDuration = 0.3,
  bgGradient = false
}) => {
  const cardRef = useRef(null);
  const [tiltInfo, setTiltInfo] = useState({ 
    xPercentage: 0, 
    yPercentage: 0, 
    mouseOver: false 
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card
    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;
    
    // Calculate percentage across card (-0.5 to 0.5)
    const xPercentage = (xPos / rect.width - 0.5) * 2;
    const yPercentage = (yPos / rect.height - 0.5) * 2;
    
    setTiltInfo({ xPercentage, yPercentage, mouseOver: true });
  };

  const handleMouseLeave = () => {
    setTiltInfo({ xPercentage: 0, yPercentage: 0, mouseOver: false });
  };

  const cardStyle = {
    transform: tiltInfo.mouseOver
      ? `perspective(${perspective}px) rotateX(${-tiltInfo.yPercentage * tiltMaxAngle}deg) rotateY(${tiltInfo.xPercentage * tiltMaxAngle}deg) scale(${scale})`
      : `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
    transition: `transform ${transitionDuration}s ease-out`,
    transformStyle: 'preserve-3d',
  };

  return (
    <motion.div
      ref={cardRef}
      className={`glass rounded-lg overflow-hidden relative ${className} ${bgGradient ? 'bg-gradient-to-br from-indigo-900/30 to-purple-900/30' : ''}`}
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {bgGradient && tiltInfo.mouseOver && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 pointer-events-none"
          style={{
            transform: `translateX(${tiltInfo.xPercentage * 20}px) translateY(${tiltInfo.yPercentage * 20}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
      )}

      <div style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.div>
  );
};

export default Tilt3DCard;
