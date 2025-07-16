'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaHome, FaInfoCircle, FaLungsVirus, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const pathname = usePathname();
  
  const isActive = (path) => {
    return pathname === path;
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav 
      className="glass fixed w-full top-0 z-50 py-3"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/">
          <motion.div 
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLungsVirus className="text-indigo-400 text-2xl" />
            <span className="text-white text-2xl font-bold">PneumoDetect</span>
          </motion.div>
        </Link>
        
        <motion.div className="flex space-x-8" variants={navVariants}>
          <motion.div variants={itemVariants}>
            <Link href="/" className={`flex items-center space-x-1 px-2 py-1 rounded-md transition-colors ${isActive('/') ? 'text-indigo-400 font-bold' : 'text-gray-300 hover:text-white'}`}>
              <FaHome />
              <span>Home</span>
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Link href="/about" className={`flex items-center space-x-1 px-2 py-1 rounded-md transition-colors ${isActive('/about') ? 'text-indigo-400 font-bold' : 'text-gray-300 hover:text-white'}`}>
              <FaInfoCircle />
              <span>About</span>
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Link href="/prediction" className={`flex items-center space-x-1 px-2 py-1 rounded-md transition-colors ${isActive('/prediction') ? 'text-indigo-400 font-bold' : 'text-gray-300 hover:text-white'}`}>
              <FaLungsVirus />
              <span>Predict</span>
            </Link>
          </motion.div>
          
          <motion.a
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white flex items-center space-x-1 px-2 py-1 rounded-md transition-colors"
            variants={itemVariants}
          >
            <FaGithub />
            <span>GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;