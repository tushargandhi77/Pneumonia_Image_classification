'use client';

import { motion } from 'framer-motion';
import { FaFlask, FaLaptopCode, FaBrain, FaUserMd, FaChartBar, FaShieldAlt } from 'react-icons/fa';
import AnimatedHeading from '../components/animated/AnimatedHeading';
import AnimatedCard from '../components/animated/AnimatedCard';
import PageTransition from '../components/PageTransition';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
      className="w-full md:w-1/2 lg:w-1/3 p-4"
      variants={itemVariants}
    >
      <AnimatedCard 
        className="h-full text-center hover:bg-gray-700 transition-colors duration-300"
        delay={delay}
      >
        <div className="flex justify-center mb-4">
          <motion.div
            className="w-16 h-16 bg-indigo-500 bg-opacity-20 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 102, 241, 0.3)' }}
          >
            <Icon className="text-indigo-400 text-2xl" />
          </motion.div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </AnimatedCard>
    </motion.div>
  );

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <AnimatedHeading className="text-5xl font-bold text-center mb-6 text-white">
            About PneumoDetect
          </AnimatedHeading>
          
          <motion.div 
            className="max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatedCard className="text-center">
              <h2 className="text-3xl font-semibold mb-4">AI-Powered Pneumonia Detection</h2>
              <p className="text-lg text-gray-300 mb-4">
                PneumoDetect leverages the power of deep learning to classify chest X-ray images as either indicative of Pneumonia or Normal. The goal is to provide a fast, accessible, and reliable tool to assist medical professionals in diagnosing pneumonia.
              </p>
              <div className="w-24 h-1 bg-indigo-500 mx-auto my-6 rounded-full"></div>
              <p className="text-gray-400">
                This application is designed for educational and demonstration purposes and should not replace professional medical advice.
              </p>
            </AnimatedCard>
          </motion.div>
          
          <div className="mb-16">
            <AnimatedHeading 
              className="text-3xl font-bold text-center mb-10 text-white"
              as="h2"
              delay={0.4}
            >
              How It Works
            </AnimatedHeading>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-500 bg-opacity-30 rounded"></div>
                
                {[
                  {
                    title: "Upload X-ray Image",
                    description: "Upload a chest X-ray image through our secure interface.",
                    icon: "📤"
                  },
                  {
                    title: "AI Analysis",
                    description: "Our deep learning model analyzes the image for patterns associated with pneumonia.",
                    icon: "🧠"
                  },
                  {
                    title: "Get Results",
                    description: "Receive immediate feedback on whether the X-ray shows signs of pneumonia.",
                    icon: "📋"
                  },
                  {
                    title: "Consult with Doctor",
                    description: "Share the results with your healthcare provider for proper diagnosis.",
                    icon: "👨‍⚕️"
                  }
                ].map((step, index) => (
                  <motion.div 
                    key={index}
                    className="relative flex items-start mb-12"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 ml-auto'}`}>
                      <AnimatedCard delay={0.1 * index}>
                        <div className="text-4xl mb-3">{step.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-400">{step.description}</p>
                      </AnimatedCard>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1 flex items-center justify-center">
                      <motion.div 
                        className="w-8 h-8 rounded-full bg-indigo-600 border-4 border-gray-800 z-10 flex items-center justify-center text-white font-bold"
                        whileHover={{ scale: 1.2 }}
                      >
                        {index + 1}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <AnimatedHeading 
              className="text-3xl font-bold text-center mb-8 text-white"
              as="h2"
              delay={0.6}
            >
              Technology Stack
            </AnimatedHeading>
            
            <motion.div 
              className="flex flex-wrap -mx-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <FeatureCard 
                icon={FaLaptopCode}
                title="Frontend"
                description="Built with Next.js, React, and Tailwind CSS for a responsive and interactive user interface."
                delay={0.1}
              />
              <FeatureCard 
                icon={FaFlask}
                title="Backend"
                description="Powered by Flask (Python) to handle image processing and model integration."
                delay={0.2}
              />
              <FeatureCard 
                icon={FaBrain}
                title="Deep Learning"
                description="Utilizes TensorFlow and Keras to train and deploy a convolutional neural network."
                delay={0.3}
              />
              <FeatureCard 
                icon={FaChartBar}
                title="Data Analysis"
                description="Trained on thousands of labeled X-ray images to achieve high accuracy."
                delay={0.4}
              />
              <FeatureCard 
                icon={FaUserMd}
                title="Medical Focus"
                description="Designed with input from medical imaging specialists to focus on relevant features."
                delay={0.5}
              />
              <FeatureCard 
                icon={FaShieldAlt}
                title="Privacy"
                description="All uploaded images are processed securely and not stored permanently."
                delay={0.6}
              />
            </motion.div>
          </div>
          
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <AnimatedCard>
              <h2 className="text-2xl font-semibold mb-4">Ready to Try It?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Upload your chest X-ray image and get an instant analysis.
              </p>
              <motion.a 
                href="/prediction"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full"
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                Try It Now
              </motion.a>
            </AnimatedCard>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;