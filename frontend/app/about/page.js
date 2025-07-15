import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-8 animate-fade-in-down">About This Project</h1>
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8 animate-fade-in-up">
          <h2 className="text-3xl font-semibold mb-4">Pneumonia Detection from X-Ray Images</h2>
          <p className="text-lg mb-4">
            This application leverages the power of deep learning to classify chest X-ray images as either indicative of Pneumonia or Normal. The goal is to provide a fast, accessible, and reliable tool to assist medical professionals in diagnosing pneumonia.
          </p>
          <h3 className="text-2xl font-semibold mb-3">Technology Stack</h3>
          <ul className="list-disc list-inside mb-4 text-lg">
            <li><span className="font-semibold">Frontend:</span> Next.js, React, Tailwind CSS</li>
            <li><span className="font-semibold">Backend:</span> Flask (Python)</li>
            <li><span className="font-semibold">Machine Learning:</span> TensorFlow, Keras</li>
          </ul>
          <p className="text-lg">
            The model was trained on a large dataset of chest X-ray images, learning to identify the subtle patterns and features that distinguish a lung with pneumonia from a healthy one. This tool is intended for educational and demonstrational purposes and should not be used as a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;