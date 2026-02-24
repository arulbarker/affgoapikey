# 🎨 AI Photo Studio - Google AI Studio Build Version

**70 AI Tools Complete** for Photo & Video Generation powered by Google Gemini AI

This is the **Google AI Studio Build** version of AI Photo Studio, designed to run with a Node.js backend for secure API key management and deployment to various hosting platforms.

---

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Troubleshooting](#troubleshooting)
- [Changelog](#changelog)

---

## ✨ Features

### 70 AI Tools Across 6 Categories:

1. **Product Photography (5 Tools)**
   - Mockup Studio, POV Tangan, Foto Produk (7-20), Photo Angle Pro, Foto Touring

2. **UGC Content Affiliate GO (8 Tools)**
   - Foto Produk, Affiliate Islami (24 themes), Virtual Try-On, Pose Fashion, Food Selfie, Product Review, Iklan Produk, Professional Headshot

3. **Family & Lifestyle (10 Tools)**
   - Family Photo, Wedding, New Born, Profesi Anak, Umrah/Haji, Pas Foto, Photo Booth, Desain Rumah, Sketsa, Carousel

4. **Creative Tools PRO (17 Tools)**
   - Miniature Me, Halu Idol, Sticker, Hair Generator, Expression Changer, Story Update, Photo Angle, Style Matcher, Thumbnail Pro, Cover Photo, Photo Restoration, Logo Generator, Mascot Generator, Face Swap, Background Remover, Photo Extender, Story Board, Twibon

5. **Video & Audio PRO (4 Tools)**
   - VEO Generator, Opal Image to Video, Voice Over Pro, Video Analyzer Pro

6. **Security & Business (22 Tools)**
   - Email Login System, Anti-Piracy Token, Session Monitor, and 19+ marketing/business tools

---

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional, for version control)
- **Gemini API Key** - [Get your free API key](https://makersuite.google.com/app/apikey)

---

## 📦 Installation

### 1. Clone or Download the Repository

```bash
# If using Git
git clone <your-repository-url>
cd canvas_aiphotostudio

# Or download and extract the ZIP file
```

### 2. Install Dependencies

```bash
npm install
```

This will install:
- `express` - Web server framework
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variable management
- `node-fetch` - HTTP requests to Gemini API
- `body-parser` - Request body parsing
- `nodemon` - Development hot-reload (dev dependency)

---

## ⚙️ Configuration

### 1. Setup Environment Variables

Copy the example environment file and configure it:

```bash
cp .env.example .env
```

### 2. Edit `.env` File

Open `.env` in a text editor and add your credentials:

```env
# REQUIRED: Get your Gemini API key from https://makersuite.google.com/app/apikey
GEMINI_API_KEY=your_actual_gemini_api_key_here

# OPTIONAL: For login system (if using Google Apps Script)
GOOGLE_SCRIPT_URL=your_google_apps_script_url_here

# Server configuration
PORT=3000
NODE_ENV=development
```

**⚠️ IMPORTANT**:
- Never commit the `.env` file to Git (it's already in `.gitignore`)
- Keep your API key secret and secure
- Get a free Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

---

## 🚀 Running Locally

### Development Mode (with auto-reload)

```bash
npm run dev
```

This starts the server with `nodemon` which automatically restarts when you make changes.

### Production Mode

```bash
npm start
```

### Access the Application

Once the server is running, open your browser and go to:

```
http://localhost:3000
```

You should see:

```
╔════════════════════════════════════════════════╗
║                                                ║
║     🎨 AI Photo Studio Server Running 🎨      ║
║                                                ║
║     Port: 3000                                 ║
║     Environment: development                   ║
║                                                ║
║     Access the app at:                         ║
║     👉 http://localhost:3000                   ║
║                                                ║
╚════════════════════════════════════════════════╝
```

---

## 🌐 Deployment

### Deploy to Google Cloud Platform (App Engine)

1. **Create `app.yaml`:**

```yaml
runtime: nodejs18

env_variables:
  GEMINI_API_KEY: "your_api_key_here"
  GOOGLE_SCRIPT_URL: "your_script_url_here"

handlers:
- url: /.*
  script: auto
  secure: always
```

2. **Deploy:**

```bash
gcloud app deploy
```

### Deploy to Vercel

1. **Install Vercel CLI:**

```bash
npm install -g vercel
```

2. **Create `vercel.json`:**

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```

3. **Deploy:**

```bash
vercel
```

4. **Add environment variables in Vercel Dashboard:**
   - Go to Settings > Environment Variables
   - Add `GEMINI_API_KEY` and `GOOGLE_SCRIPT_URL`

### Deploy to Heroku

1. **Create `Procfile`:**

```
web: node server.js
```

2. **Deploy:**

```bash
heroku create your-app-name
heroku config:set GEMINI_API_KEY=your_api_key_here
git push heroku main
```

### Deploy to Railway

1. **Go to [Railway.app](https://railway.app/)**
2. **Click "New Project" > "Deploy from GitHub"**
3. **Select your repository**
4. **Add environment variables:**
   - `GEMINI_API_KEY`
   - `GOOGLE_SCRIPT_URL`
   - `PORT` (Railway sets this automatically)

---

## 📁 Project Structure

```
canvas_aiphotostudio/
├── public/                    # Frontend files (served by Express)
│   ├── index.html            # Main application (from kode.html)
│   └── api-helper.js         # API proxy wrapper script
├── server.js                 # Express backend server
├── package.json              # Node.js dependencies
├── .env                      # Environment variables (DO NOT COMMIT)
├── .env.example              # Example environment file
├── .gitignore                # Git ignore rules
├── README.md                 # This file
├── CLAUDE.md                 # Development guidelines
└── kode.html                 # Original development file (DO NOT EDIT)
```

**File Purposes:**

- **`server.js`**: Express backend that proxies API calls to Gemini API
- **`public/index.html`**: Frontend HTML (copy of `kode.html`, with api-helper.js included)
- **`public/api-helper.js`**: JavaScript that intercepts Gemini API calls and routes them through backend
- **`kode.html`**: Original development file - DO NOT EDIT (always edit `public/index.html`)
- **`.env`**: Contains sensitive API keys (ignored by Git)

---

## 📡 API Documentation

### Backend Endpoints

#### 1. Health Check

```http
GET /api/health
```

**Response:**
```json
{
  "status": "OK",
  "message": "AI Photo Studio API is running"
}
```

#### 2. Gemini API Proxy

```http
POST /api/gemini/:model
```

**Parameters:**
- `:model` - Gemini model name (e.g., `gemini-2.5-flash-image-preview`)

**Request Body:**
```json
{
  "endpoint": "generateContent",
  "payload": {
    "contents": [...],
    "generationConfig": {...}
  }
}
```

**Response:** Gemini API response (JSON)

#### 3. Login System Proxy

```http
GET /api/login?action=login&email=xxx&token=yyy
```

**Query Parameters:**
- `action` - Login action (login, cek)
- `email` - User email
- `token` - Session token

**Response:**
```json
{
  "status": "SUKSES",
  "nama": "User Name"
}
```

---

## 🔍 How It Works

### API Flow

```
Frontend (Browser)
    ↓
    | fetch('https://generativelanguage.googleapis.com/...')
    ↓
api-helper.js (intercepts)
    ↓
    | POST /api/gemini/:model
    ↓
server.js (Express Backend)
    ↓
    | Adds API key from .env
    | Forwards to Gemini API
    ↓
Google Gemini API
    ↓
    | Response with generated content
    ↓
server.js
    ↓
Frontend (displays result)
```

### Security Benefits

1. **API Key Protection**: API key stays on server, never exposed to browser
2. **CORS Control**: Backend controls which origins can access the API
3. **Rate Limiting**: Can add rate limiting middleware easily
4. **Request Validation**: Backend can validate requests before forwarding
5. **Logging**: Centralized logging of all API requests

---

## 🐛 Troubleshooting

### Issue: "Failed to fetch" or "API key not configured"

**Solution:**
1. Check if `.env` file exists in project root
2. Verify `GEMINI_API_KEY` is set in `.env`
3. Restart the server: `Ctrl+C` then `npm start`

### Issue: "Cannot find module 'express'"

**Solution:**
```bash
npm install
```

### Issue: "Port 3000 already in use"

**Solution:**
Change port in `.env`:
```env
PORT=4000
```

Or kill the process using port 3000:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### Issue: Images not generating

**Solution:**
1. Open browser console (F12)
2. Check for error messages
3. Verify API key is valid at [Google AI Studio](https://makersuite.google.com/app/apikey)
4. Check server logs for errors
5. Test API status: Open `http://localhost:3000/api/health`

### Issue: Login system not working

**Solution:**
1. Verify `GOOGLE_SCRIPT_URL` is set in `.env`
2. Check Google Apps Script is deployed with "Anyone" access
3. Test script URL directly in browser
4. Check browser console for errors

---

## 📝 Development Notes

### Editing the Application

**⚠️ IMPORTANT:**
- **ALWAYS edit** `public/index.html` (the production version)
- **NEVER edit** `kode.html` (this is the Canvas version backup)

### Adding New Features

1. Edit `public/index.html` to add frontend code
2. If feature needs new API calls, they will automatically be proxied through backend
3. Test locally: `npm run dev`
4. Deploy to your hosting platform

### Debugging

Enable detailed logging in `server.js`:

```javascript
// Add this to see all API requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
```

---

## 📜 Changelog

### Version 17.0.0 - Google AI Studio Build (January 2025)

- ✅ Converted from single-file Canvas app to Node.js + Express architecture
- ✅ Added backend API proxy for secure Gemini API calls
- ✅ Implemented environment-based configuration
- ✅ Added deployment support for Google Cloud, Vercel, Heroku, Railway
- ✅ Improved security: API keys no longer exposed in frontend
- ✅ Added health check endpoint
- ✅ Maintained all 70 AI tools functionality

### Previous Versions

See `CLAUDE.md` for complete changelog of Canvas version (v1.0 - v16.9)

---

## 📄 License

MIT License - See LICENSE file for details

---

## 🤝 Support

For issues or questions:
1. Check [Troubleshooting](#troubleshooting) section
2. Review `CLAUDE.md` for detailed feature documentation
3. Open an issue on GitHub (if available)

---

## 👨‍💻 Author

**Arul CG**
- AI Photo Studio v17.0
- 70 AI Tools Complete
- Built with ❤️ using Google Gemini AI

---

**Enjoy creating amazing AI-generated photos and videos! 🎨✨**
