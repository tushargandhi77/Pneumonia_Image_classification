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

- **Home Page**: [Add screenshot of the main interface where users upload images]
- **Prediction Result**: [Add screenshot showing a sample prediction output]
- **Mobile View**: [Add screenshot of the responsive design on a mobile device]

To add screenshots:
1. Save your screenshots in a folder (e.g., `screenshots/`).
2. Update this README with Markdown image links, e.g.:
   ```markdown
   ![Home Page](screenshots/home-page.png)
   ```

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