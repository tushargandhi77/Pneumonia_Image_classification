'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaDatabase, FaBrain, FaChartLine } from 'react-icons/fa';

const StatsSection = () => {
  // Animated counter logic
  const CounterAnimation = ({ value, duration = 2, symbol = '' }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            let startTime;
            const updateCount = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const progress = timestamp - startTime;
              const progressRatio = Math.min(progress / (duration * 1000), 1);
              setCount(Math.floor(value * progressRatio));
              
              if (progressRatio < 1) {
                requestAnimationFrame(updateCount);
              }
            };
            
            requestAnimationFrame(updateCount);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      
      if (countRef.current) {
        observer.observe(countRef.current);
      }
      
      return () => observer.disconnect();
    }, [value, duration]);
    
    return <span ref={countRef}>{count}{symbol}</span>;
  };

  const stats = [
    { 
      icon: FaUserMd,
      value: 98,
      symbol: '%',
      label: 'Accuracy',
      color: 'text-green-400',
      bgColor: 'bg-green-400/20'
    },
    { 
      icon: FaDatabase,
      value: 5000,
      symbol: '+',
      label: 'X-rays Analyzed',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/20'
    },
    { 
      icon: FaBrain,
      value: 24,
      symbol: '/7',
      label: 'Availability',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/20'
    },
    { 
      icon: FaChartLine,
      value: 3,
      symbol: 's',
      label: 'Avg. Process Time',
      color: 'text-amber-400',
      bgColor: 'bg-amber-400/20'
    }
  ];

  return (
    <div className="py-16 px-4">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose PneumoDetect?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="flex justify-center mb-4">
                <div className={`w-16 h-16 rounded-full ${stat.bgColor} flex items-center justify-center`}>
                  <stat.icon className={`text-2xl ${stat.color}`} />
                </div>
              </div>
              <h3 className="text-4xl font-bold mb-2 text-white">
                <CounterAnimation value={stat.value} symbol={stat.symbol} />
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default StatsSection;
