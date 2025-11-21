# 🎯 QR Code Generator

A beautiful, dark-themed QR code generator built with Python Flask backend and vanilla JavaScript frontend. Generate custom QR codes with dynamic styling options and download them instantly!

![Python](https://img.shields.io/badge/Python-3.11-blue.svg)
![Flask](https://img.shields.io/badge/Flask-3.0.3-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## ✨ Features

- 🎨 **Customizable Design** - Choose custom colors for foreground and background
- 📏 **Adjustable Size** - Control QR code size and border thickness with sliders
- 🌙 **Dark Theme UI** - Modern, sleek dark-themed interface with smooth animations
- 🔄 **Reset Function** - Quick reset button to clear all inputs and start fresh
- ⬇️ **Download Option** - Save generated QR codes as PNG images
- 📱 **Responsive Design** - Works perfectly on desktop and mobile devices
- ⚡ **Real-time Generation** - Instant QR code creation with live preview

## 🚀 Live Demo

🔗 **[View Live Demo](https://qr-code-generator-qa2o.onrender.com/)**

## 🛠️ Installation

### Prerequisites

- Python 3.11 or higher
- pip (Python package installer)
- Git

### Local Setup

1. **Clone the repository**
git clone https://github.com/YOUR_USERNAME/qr-code-generator.git
cd qr-code-generator


2. **Create virtual environment**
python -m venv venv


3. **Activate virtual environment**

**Windows:**
.\venv\Scripts\activate


**macOS/Linux:**
source venv/bin/activate


4. **Install dependencies**
pip install -r requirements.txt


5. **Run the application**
python app.py


6. **Access the application**

Open your browser and navigate to: `http://127.0.0.1:5000`

## 📖 Usage

1. **Enter Data**: Type any text, URL, or data in the text area
2. **Customize Colors**: Choose foreground and background colors
3. **Adjust Size**: Use sliders to control size and border thickness
4. **Generate**: Click "Generate QR Code" button
5. **Download**: Click "Download QR Code" to save as PNG
6. **Reset**: Click "Reset" to clear all inputs

## 📁 Project Structure

qr_code_generator/
│
├── app.py # Flask backend server
├── requirements.txt # Python dependencies
├── runtime.txt # Python version specification
├── Procfile # Deployment configuration
├── .gitignore # Git ignore file
├── README.md # Project documentation
│
├── static/ # Static files
│ ├── css/
│ │ └── styles.css # Dark theme styles
│ ├── js/
│ │ └── scripts.js # Frontend JavaScript
│ └── images/
│
└── templates/ # HTML templates
└── index.html # Main HTML interface


## 💻 Technologies Used

### Backend
- **Python 3.11** - Programming language
- **Flask 3.0.3** - Web framework
- **qrcode 7.4.2** - QR code generation library
- **Pillow 10.4.0** - Image processing
- **Gunicorn 21.2.0** - WSGI HTTP server

### Frontend
- **HTML5** - Structure
- **CSS3** - Styling with modern gradients and animations
- **Vanilla JavaScript** - Dynamic interactions
- **Fetch API** - Asynchronous requests

## 🌐 Deployment

### Deploy to Render.com

1. **Push to GitHub**
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/qr-code-generator.git
git push -u origin main


2. **Deploy on Render**
- Go to [Render.com](https://render.com)
- Click "New" → "Web Service"
- Connect your GitHub repository
- Configure:
  - **Build Command**: `pip install -r requirements.txt`
  - **Start Command**: `gunicorn app:app`
  - **Instance Type**: Free
- Click "Create Web Service"

## 📡 API Documentation

### Generate QR Code

**Endpoint:** `/generate-qr`  
**Method:** `POST`  
**Content-Type:** `application/json`

**Request Body:**
{
"text": "Your text or URL here",
"fill_color": "#ffffff",
"back_color": "#000000",
"box_size": 10,
"border": 2
}


**Response:** PNG image file

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Your Name**

- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)

## 🔮 Future Enhancements

- [ ] Add QR code history/gallery
- [ ] Bulk QR code generation
- [ ] More customization options (logos, patterns)
- [ ] Different QR code formats (SVG, PDF)
- [ ] User accounts and saved QR codes


**Built with ❤️ using Python Flask**

