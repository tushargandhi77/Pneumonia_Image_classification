'use client';

import { useState } from 'react';
import axios from 'axios';

const PredictionPage = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setPrediction(null);
    setError(null);
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

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-center mb-6">Upload X-Ray Image</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="file-upload" className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition duration-300 ease-in-out transform hover:-translate-y-1">
                {file ? file.name : 'Select Image'}
              </label>
              <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} accept="image/jpeg, image/png" />
            </div>
            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 disabled:opacity-50" disabled={!file || loading}>
              {loading ? 'Diagnosing...' : 'Get Diagnosis'}
            </button>
          </form>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {prediction && (
            <div className="mt-8 text-center animate-fade-in">
              <h2 className="text-3xl font-semibold">Diagnosis Result:</h2>
              <p className={`text-2xl font-bold mt-2 ${prediction === 'Pneumonia' ? 'text-red-400' : 'text-green-400'}`}>
                {prediction}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PredictionPage;