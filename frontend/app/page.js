'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaInfo, FaLungsVirus } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import StatsSection from './components/StatsSection';
import Tilt3DCard from './components/animated/Tilt3DCard';
import PageTransition from './components/PageTransition';

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[index]);
        setIndex(index + 1);
      }, 40); // adjust speed of typing
      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return <span>{displayedText}</span>;
};

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" },
    tap: { scale: 0.95 }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Hero section */}
        <div className="flex flex-col justify-center items-center text-center pt-20 pb-24 px-4 relative">
          {/* Background animated elements */}
          <div className="absolute inset-0 overflow-hidden z-0">
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-indigo-500 opacity-10"
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

          <motion.div
            className="relative z-10 p-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="flex justify-center mb-8"
              variants={itemVariants}
              animate={pulseAnimation}
            >
              <FaLungsVirus className="text-8xl text-indigo-400" />
            </motion.div>

            <motion.h1 
              className="text-6xl font-extrabold mb-4"
              variants={itemVariants}
            >
              Welcome to <span className="text-indigo-400">PneumoDetect</span>
            </motion.h1>

            <motion.div 
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              <TypingText text="An AI-powered tool to assist in the diagnosis of pneumonia from chest X-ray images. Fast, reliable, and easy to use." />
            </motion.div>

            <motion.div 
              className="space-y-4 md:space-y-0 md:space-x-6 flex flex-col md:flex-row justify-center items-center"
              variants={itemVariants}
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link href="/prediction" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg flex items-center justify-center space-x-2 w-64 md:w-auto">
                  <span>Get Started</span>
                  <FaArrowRight />
                </Link>
              </motion.div>
              
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link href="/about" className="glass hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full text-lg flex items-center justify-center space-x-2 w-64 md:w-auto">
                  <span>Learn More</span>
                  <FaInfo />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats section */}
        <StatsSection />

        {/* Features section */}
        <div className="py-16 px-4 bg-gray-800 bg-opacity-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Key Features
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Instant Analysis",
                  description: "Get results within seconds of uploading your X-ray image.",
                  icon: "⚡"
                },
                {
                  title: "High Accuracy",
                  description: "Our AI model has been trained on thousands of labeled images to ensure reliable results.",
                  icon: "🎯"
                },
                {
                  title: "User Friendly",
                  description: "Simple interface designed for healthcare professionals and researchers.",
                  icon: "👥"
                }
              ].map((feature, index) => (
                <Tilt3DCard
                  key={index}
                  className="p-6"
                  bgGradient={true}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </Tilt3DCard>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="py-20 px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to get started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Upload your chest X-ray image and receive an instant analysis powered by our advanced AI model.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/prediction" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-full text-lg inline-block">
                Try it now
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="py-8 bg-gray-800 bg-opacity-30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-500">© 2025 PneumoDetect | A machine learning project for medical imaging</p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
