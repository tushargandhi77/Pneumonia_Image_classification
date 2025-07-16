'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { FaCloudUploadAlt, FaSpinner, FaCheckCircle, FaTimesCircle, FaSyncAlt } from 'react-icons/fa';
import AnimatedButton from '../components/animated/AnimatedButton';
import AnimatedHeading from '../components/animated/AnimatedHeading';
import AnimatedCard from '../components/animated/AnimatedCard';
import LoadingSpinner from '../components/animated/LoadingSpinner';
import PageTransition from '../components/PageTransition';
import Preloader from '../components/Preloader';

const PredictionPage = () => {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);
  const [showPreloader, setShowPreloader] = useState(true);

  // Simulate a page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      processFile(selectedFile);
    }
  };

  const processFile = (selectedFile) => {
    if (!selectedFile.type.match('image/jpeg') && !selectedFile.type.match('image/png')) {
      setError('Please select a valid JPEG or PNG image.');
      return;
    }

    setFile(selectedFile);
    setPrediction(null);
    setError(null);

    // Create image preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    try {
      const res = await axios.post('http://127.0.0.1:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPrediction(res.data.prediction);
    } catch (err) {
      setError('An error occurred during prediction. Please try again.');
      console.error(err);
    }
    setLoading(false);
  };

  const resetForm = () => {
    setFile(null);
    setImagePreview(null);
    setPrediction(null);
    setError(null);
  };

  if (showPreloader) {
    return <Preloader />;
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <AnimatedHeading className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
            Pneumonia Detection Tool
          </AnimatedHeading>
          
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Upload a chest X-ray image and our AI will analyze it for potential signs of pneumonia. 
            For best results, use a clear frontal chest X-ray in JPEG or PNG format.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <AnimatedCard className="mb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div 
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors duration-300 ${dragActive ? 'border-indigo-400 bg-indigo-400 bg-opacity-10' : 'border-gray-600 hover:border-gray-400'}`}
                  onClick={() => fileInputRef.current.click()}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input 
                    ref={fileInputRef}
                    id="file-upload" 
                    type="file" 
                    className="hidden" 
                    onChange={handleFileChange} 
                    accept="image/jpeg, image/png" 
                  />
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {!imagePreview ? (
                      <div className="py-6">
                        <FaCloudUploadAlt className="text-5xl text-indigo-400 mx-auto mb-4" />
                        <p className="text-gray-300 mb-2">Drag & drop your X-ray image here</p>
                        <p className="text-gray-500 text-sm">or click to select file</p>
                      </div>
                    ) : (
                      <div className="relative">
                        <img 
                          src={imagePreview} 
                          alt="X-ray preview" 
                          className="max-h-[300px] rounded mx-auto object-contain" 
                        />
                        <p className="mt-3 text-gray-300">{file.name}</p>
                        <button 
                          type="button" 
                          className="absolute top-2 right-2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-red-500 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            resetForm();
                          }}
                        >
                          <FaTimesCircle />
                        </button>
                      </div>
                    )}
                  </motion.div>
                </div>
                
                <div className="flex justify-center">
                  <AnimatedButton 
                    type="submit" 
                    className={`bg-indigo-600 hover:bg-indigo-700 text-white ${(!file || loading) ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!file || loading}
                    whileHover={file && !loading ? { scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" } : {}}
                  >
                    {loading ? (
                      <div className="flex items-center space-x-2">
                        <FaSpinner className="animate-spin" />
                        <span>Analyzing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <span>Get Diagnosis</span>
                        {file && <FaCheckCircle />}
                      </div>
                    )}
                  </AnimatedButton>
                </div>
              </form>
            </AnimatedCard>
            
            <AnimatePresence>
              {error && (
                <motion.div 
                  className="bg-red-900 bg-opacity-70 text-white p-4 rounded-lg mb-8 flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaTimesCircle className="text-red-400 mr-2" />
                  <p>{error}</p>
                </motion.div>
              )}
              
              {prediction && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <AnimatedCard className="text-center p-8 bg-opacity-80">
                    <h2 className="text-2xl font-semibold mb-4">Diagnosis Result</h2>
                    
                    <div className="mb-6">
                      {prediction === 'Pneumonia' ? (
                        <motion.div 
                          className="inline-block bg-red-500 bg-opacity-20 text-red-400 text-3xl font-bold py-3 px-6 rounded-lg"
                          animate={{ 
                            scale: [1, 1.05, 1],
                            backgroundColor: ['rgba(239, 68, 68, 0.2)', 'rgba(239, 68, 68, 0.3)', 'rgba(239, 68, 68, 0.2)']
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {prediction}
                        </motion.div>
                      ) : (
                        <motion.div 
                          className="inline-block bg-green-500 bg-opacity-20 text-green-400 text-3xl font-bold py-3 px-6 rounded-lg"
                          animate={{ 
                            scale: [1, 1.05, 1],
                            backgroundColor: ['rgba(34, 197, 94, 0.2)', 'rgba(34, 197, 94, 0.3)', 'rgba(34, 197, 94, 0.2)']
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {prediction}
                        </motion.div>
                      )}
                    </div>
                    
                    <p className="text-gray-300 mb-6">
                      {prediction === 'Pneumonia' 
                        ? 'The AI has detected patterns consistent with pneumonia in this X-ray. Please consult with a healthcare professional for proper diagnosis and treatment.' 
                        : 'The AI did not detect signs of pneumonia in this X-ray. However, this is not a substitute for professional medical advice.'}
                    </p>
                    
                    <AnimatedButton 
                      onClick={resetForm}
                      className="bg-gray-700 hover:bg-gray-600 text-white"
                    >
                      <div className="flex items-center space-x-2">
                        <FaSyncAlt />
                        <span>Analyze Another Image</span>
                      </div>
                    </AnimatedButton>
                  </AnimatedCard>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PredictionPage;