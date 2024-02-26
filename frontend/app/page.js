'use client'
import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setPrediction(null); // Reset prediction when a new image is selected
  };

  const handlePredictClick = async () => {
    if (!selectedFile) {
      alert('Please select an image');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  return (
    <div>
      <h1>Image Classification</h1>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <button onClick={handlePredictClick}>Predict</button>

      {selectedFile && (
        <div>
          <h2>Selected Image:</h2>
          <img src={URL.createObjectURL(selectedFile)} alt="Selected" style={{ maxWidth: '80%' }} />
        </div>
      )}

      {prediction && <p>Prediction: {prediction}</p>}
    </div>
  );
};

export default ImageUpload;
