# Pneumonia Image Classification Application

## Overview
This project is a web-based application for classifying chest X-ray images to detect pneumonia. The frontend is built using **Next.js**, providing a responsive and user-friendly interface, while the backend is powered by a **Python Flask** server that utilizes a **TensorFlow** model for image classification. The application allows users to upload chest X-ray images and receive predictions indicating whether the image shows signs of pneumonia.

## Features
- Upload chest X-ray images through a web interface.
- Backend processing using a pre-trained TensorFlow model for pneumonia detection.
- Real-time prediction results displayed on the frontend.
- Responsive design for accessibility across devices.

## Prerequisites
Before setting up the project, ensure you have the following installed:
- **Python** (version 3.8 or higher)
- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)
- A compatible web browser (e.g., Chrome, Firefox, Edge)

## Installation

### Backend Setup (Flask + TensorFlow)
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Create a Virtual Environment** (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Backend Dependencies**:
   Ensure you have a `requirements.txt` file in the root directory listing all necessary Python packages (e.g., Flask, TensorFlow, etc.). Install them using:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask Server**:
   ```bash
   python app.py
   ```
   The backend server will typically run on `http://localhost:5000`. Verify the port in your Flask configuration.

### Frontend Setup (Next.js)
1. **Navigate to the Frontend Directory**:
   ```bash
   cd frontend
   ```

2. **Install Frontend Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   The Next.js application will start on `http://localhost:3000` by default. Open this URL in your browser to access the application.

## Usage
1. **Start the Backend**:
   Ensure the Flask server is running (`python app.py` in the root directory).
2. **Start the Frontend**:
   Run the Next.js development server (`npm run dev` in the frontend directory).
3. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`.
4. **Upload an Image**:
   - Use the web interface to select and upload a chest X-ray image.
   - The image will be sent to the Flask backend, processed by the TensorFlow model, and the prediction (e.g., "Pneumonia" or "Normal") will be displayed on the frontend.

## Project Structure
```
pneumonia-classification/
├── app.py                    # Flask application
├── requirements.txt          # Python dependencies
├── model/                    # Directory containing the TensorFlow model
├── frontend/
│   ├── pages/                # Next.js pages
│   ├── components/           # React components
│   ├── package.json          # Node.js dependencies
│   └── ...
├── README.md                 # This file
└── ...
```

## Screenshots
*You can add screenshots here to showcase the application interface. Below are placeholder sections for screenshots you can include:*

<img width="1907" height="935" alt="Image" src="https://github.com/user-attachments/assets/54e8d715-e13b-446f-8228-a3d99e59659c" />

<img width="1871" height="895" alt="Image" src="https://github.com/user-attachments/assets/fb4269a5-8e78-48be-8580-6fad869c5974" />

<img width="1875" height="706" alt="Image" src="https://github.com/user-attachments/assets/de005014-0281-4d3c-9e41-259bff99469d" />

<img width="1899" height="901" alt="Image" src="https://github.com/user-attachments/assets/65c05679-4d55-42ef-bba3-28cf314c78dd" />

<img width="1907" height="874" alt="Image" src="https://github.com/user-attachments/assets/e1a03b99-2aab-426b-97d2-0ae8b538a535" />

<img width="1895" height="889" alt="Image" src="https://github.com/user-attachments/assets/a0c5984b-d13d-4ced-bf69-e15935ac639d" />

<img width="1906" height="905" alt="Image" src="https://github.com/user-attachments/assets/e02921b5-5ed6-4eb6-94ec-453461038094" />


<img width="1904" height="900" alt="Image" src="https://github.com/user-attachments/assets/58238ef5-1dbe-4131-9a35-2495ae84e9f4" />

## Troubleshooting
- **Flask Server Not Responding**:
  - Ensure the Flask server is running and accessible at `http://localhost:5000`.
  - Check for errors in the terminal where `app.py` is running.
- **Frontend Not Connecting to Backend**:
  - Verify that the API endpoint in the Next.js code points to the correct Flask server URL (e.g., `http://localhost:5000`).
  - Check for CORS issues; ensure Flask is configured to allow requests from `http://localhost:3000`.
- **TensorFlow Model Errors**:
  - Confirm that the model file is correctly placed in the `model/` directory.
  - Ensure all dependencies listed in `requirements.txt` are installed.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For questions or support, please contact [Your Email or GitHub Profile].