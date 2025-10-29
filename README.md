# DSA Learning Pathway - MERN Stack Capstone Project

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation Guide](#installation-guide)
- [Environment Configuration](#environment-configuration)
- [Running the Project](#running-the-project)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

**DSA Learning Pathway** is a comprehensive MERN (MongoDB, Express.js, React, Node.js) stack application designed to provide personalized Data Structures and Algorithms learning experiences. The platform offers AI-powered learning paths, skill assessments, video tutorials, practice problems, and progress tracking.

### Key Highlights

- **Personalized Learning**: AI-generated learning paths based on user skill level
- **Skill Assessment**: Adaptive quizzes to verify programming proficiency
- **Rich Content**: Curated videos, articles, and coding problems
- **Progress Tracking**: Save and resume your learning journey
- **Modern UI**: Beautiful, responsive interface with space-themed design

## ✨ Features

### Authentication & User Management
- 🔒 **Google OAuth 2.0**: Secure authentication via Google
- 👤 **User Profiles**: Persistent user data and progress tracking
- 🔑 **JWT Sessions**: Secure token-based authentication
- 🚪 **Previous Assessment**: Load your previous learning dashboard anytime

### Learning Features
- 🎯 **Skill Assessment Form**: Multi-step questionnaire to evaluate programming level
- 🧠 **Adaptive Quizzes**: Intermediate/Advanced users take skill verification quizzes
- 📈 **Personalized Dashboard**: Custom learning path based on assessment results
- 📚 **Theory Content**: Curated articles from GeeksforGeeks, JavaTPoint, W3Schools
- 🎥 **Video Learning**: YouTube tutorials from top educators (Striver, CodeWithHarry, etc.)
- 💻 **Practice Problems**: Coding challenges categorized by difficulty and topic
- 📝 **PDF Download**: Generate and download personalized learning roadmap

### User Experience
- 🎨 **Beautiful UI**: Space-themed design with smooth animations
- 📱 **Responsive**: Works seamlessly on desktop, tablet, and mobile
- 🌌 **Navigation**: Intuitive navigation with back buttons and breadcrumbs
- 🔍 **Search & Filter**: Find content by topic, source, creator, and difficulty

## 🛠️ Tech Stack

### Backend Technologies
| Technology | Purpose |
|------------|----------|
| **Node.js (v16+)** | Runtime environment |
| **Express.js** | Web application framework |
| **MongoDB** | NoSQL database for user data and assessments |
| **Mongoose** | MongoDB ODM for schema modeling |
| **Passport.js** | OAuth 2.0 authentication middleware |
| **JWT (jsonwebtoken)** | Secure token-based session management |
| **express-session** | Session middleware |
| **cors** | Cross-origin resource sharing |
| **dotenv** | Environment variable management |

### Frontend Technologies
| Technology | Purpose |
|------------|----------|
| **React 18** | UI library for building components |
| **JavaScript (JSX)** | Component logic and interactivity |
| **Vite** | Fast build tool and dev server |
| **Tailwind CSS** | Utility-first CSS framework |
| **Lucide React** | Beautiful icon library |
| **React Router** (optional) | Client-side routing |

### Development & Deployment
| Tool | Purpose |
|------|----------|
| **Nodemon** | Auto-restart backend on file changes |
| **ESLint** | Code quality and linting |
| **PostCSS** | CSS transformation and optimization |
| **Git** | Version control |
| **npm/yarn** | Package management |

## 🏛️ Architecture Diagram

   │                         │      │                        │
│   • Fetch API         │      │ ● Models:            │      │                        │
│   • JWT Storage       │      │   • User.js           │      │                        │
│                         │      │   • Question.js       │      │                        │
│ ● Routing:            │      │                         │      │                        │
│   • Client-side       │      │ ● Routes:            │      │                        │
│   • Conditional       │      │   • auth.js           │      │                        │
│                         │      │   • user.js           │      │                        │
│ ● Styling:            │      │   • questions.js      │      │                        │
│   • Tailwind CSS      │      │                         │      │                        │
│   • Custom Animations │      │ ● Config:            │      │                        │
│   • Space Theme       │      │   • passport.js       │      │                        │
└─────────────────────────┘      └──────────────────────────┘      └─────────────────────────┘
       │                            │                            │
       │    HTTP/HTTPS + JSON      │      Mongoose ODM         │
       └───────────►────────────┤───────────►────────────┘


                                    ↓

┌─────────────────────────────────────────────────────────────────────────────┐
│                    🌐 EXTERNAL SERVICES & DEPLOYMENT                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  🔐 Authentication      👥 Deployment Platforms      📦 External APIs        │
│  • Google OAuth 2.0      • Frontend: Vercel           • Google Cloud         │
│  • JWT Tokens            • Backend: Render            • OpenAI (Learning)    │
│                          • Database: MongoDB Atlas    • YouTube API          │
│                                                                           │
└─────────────────────────────────────────────────────────────────────────────┘
```
### System Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          DSA LEARNING PATHWAY                            │
│                     Full Stack MERN Application                         │
└─────────────────────────────────────────────────────────────────────────────┘

                                    ↓

┌─────────────────────────┐      ┌──────────────────────────┐      ┌─────────────────────────┐
│   💻 CLIENT LAYER      │      │   ⚙️ SERVER LAYER       │      │   💾 DATABASE LAYER   │
│   (Frontend/React)    │      │   (Backend/Express)   │      │   (MongoDB Atlas)    │
├─────────────────────────┤      ├──────────────────────────┤      ├─────────────────────────┤
│ Port: 5173          │      │ Port: 5000          │      │ Port: 27017        │
│                         │      │                         │      │                        │
│ ● UI Components       │      │ ● RESTful API        │      │ ● Collections:       │
│   • LoginPage         │      │   • /auth/google      │      │   • users            │
│   • WelcomePage       │      │   • /user/profile     │      │   • questions        │
│   • Dashboard         │      │   • /user/assessment  │      │                        │
│   • Assessment        │      │   • /api/questions    │      │ ● Indexes:          │
│   • Quiz              │      │                         │      │   • userId           │
│   • Practice          │      │ ● Authentication:    │      │   • email            │
│   • Videos            │      │   • Passport.js       │      │                        │
│   • Theory            │      │   • JWT Tokens        │      │ ● Storage:         │
│   • PDF Download      │      │   • Google OAuth 2.0  │      │   • User profiles    │
│   • Navigation        │      │                         │      │   • Assessments      │
│                         │      │ ● Middleware:        │      │   • Learning paths   │
│ ● State Management    │      │   • CORS              │      │   • Quiz results     │
│   • React Hooks       │      │   • Session           │      │                        │
│   • Local State       │      │   • Error Handling    │      │                        │
│                         │      │   • Request Logging   │      │                        │
│ ● API Integration     │   
### Data Flow Architecture

```
User Browser                 React App              Express API           MongoDB
┌───────────┐              ┌──────────┐         ┌──────────┐        ┌────────┐
│ 🌐 Chrome │──(1)────►│ App.jsx  │──(2)──►│ Routes   │──(3)──►│ Users  │
│ Firefox  │  Login    │ Services │  Auth   │ Models   │  Query │ Docs   │
│ Safari   │  Request  │ API Call │  Token  │ Mongoose │        └────────┘
└───────────┘              └──────────┘         └──────────┘             │
     │                       │                  │                  │
     │◄──────(6)────────◄│────(5)──────────◄│─────(4)────────────┘
     Render       JWT+Data      JSON Response    MongoDB Result
     UI           in State

Flow Steps:
1. User clicks "Sign in with Google" button
2. React sends HTTP request to /auth/google endpoint
3. Express validates with Google OAuth, queries MongoDB
4. MongoDB returns user data (or creates new user)
5. Express generates JWT token, sends JSON response
6. React stores JWT in localStorage, renders Dashboard
```

## 🔄 Application Flowchart

### Complete User Journey

```
                              ┌─────────────────┐
                              │  🚀 START APP  │
                              │ localhost:5173 │
                              └─────────────────┘
                                      │
                                      ▼
                              ┌─────────────────┐
                              │ Check JWT Token │
                              │  in localStorage │
                              └─────────────────┘
                                      │
                    ┌─────────────┼─────────────┐
                    │ Token?       │              │
          ┌─────────┼─────────┐    │              │
          │         │          │    │              │
         NO        YES        │    │              │
          │         │          │    │              │
          ▼         ▼          │    │              │
   ┌──────────┐  ┌───────────┐ │    │              │
   │ 🔐 LOGIN │  │ Welcome Page│ │    │              │
   │   PAGE   │  └───────────┘ │    │              │
   └──────────┘          │         │              │
         │               │         │              │
         ▼               │         │              │
  ┌─────────────┐      │         │              │
  │ Google OAuth │      │         │              │
  │  Sign In     │      │         │              │
  └─────────────┘      │         │              │
         │               │         │              │
         ▼               │         │              │
  ┌─────────────┐      │         │              │
  │ Redirect to │      │         │              │
  │ Welcome Page│      │         │              │
  │ with Token  │      │         │              │
  └─────────────┘      │         │              │
         │               │         │              │
         └───────────────┼───────┘         │              │
                         │                   │              │
                         ▼                   │              │
                  ┌──────────────────┐     │              │
                  │ 🏠 WELCOME PAGE  │     │              │
                  └──────────────────┘     │              │
                         │                   │              │
          ┌───────────────┼───────────────┐  │              │
          │               │                │  │              │
          ▼               ▼                │  │              │
  ┌────────────────┐  ┌────────────────┐   │  │              │
  │ ⏪ Previous     │  │ ▶️ Start Your │   │  │              │
  │  Assessment    │  │   Journey     │   │  │              │
  └────────────────┘  └────────────────┘   │  │              │
          │               │                │  │              │
          │               ▼                │  │              │
          │        ┌───────────────┐   │  │              │
          │        │ 📋 Assessment  │   │  │              │
          │        │  Form (5 Q's) │   │  │              │
          │        └───────────────┘   │  │              │
          │               │                │  │              │
          │               ▼                │  │              │
          │          Level Check            │  │              │
          │      ┌──────┼──────┐        │  │              │
          │      │       │        │        │  │              │
          │   Beginner  Int/Adv  │        │  │              │
          │      │       │        │        │  │              │
          │      │       ▼        │        │  │              │
          │      │  ┌───────────┐  │        │  │              │
          │      │  │ 🧠 Quiz    │  │        │  │              │
          │      │  │ (10 MCQs)  │  │        │  │              │
          │      │  └───────────┘  │        │  │              │
          │      │       │        │        │  │              │
          │      └───────┼───────┘        │  │              │
          │              │                 │  │              │
          │              ▼                 │  │              │
          │       ┌───────────────────┐ │  │              │
          └───────►│ 📈 DASHBOARD     │◄┘  │              │
                  │  (Personalized)   │     │              │
                  └───────────────────┘     │              │
                           │                │              │
         ┌─────────────────┼─────────────────┐   │              │
         │                │                  │   │              │
         ▼                ▼                  ▼   │              │
  ┌───────────┐  ┌───────────┐  ┌───────────┐  │              │
  │ 💻 Practice │  │ 🎥 Videos  │  │ 📚 Theory  │  │              │
  │  Problems  │  │  Learning │  │  Content  │  │              │
  └───────────┘  └───────────┘  └───────────┘  │              │
         │                │                  │   │              │
         └────────────────┼──────────────────┘   │              │
                          │                       │              │
                          ▼                       │              │
                   ┌──────────────┐              │              │
                   │ 📝 PDF Guide  │              │              │
                   │   Download   │              │              │
                   └──────────────┘              │              │
                          │                       │              │
                          ▼                       │              │
                   ┌──────────────┐              │              │
                   │ 🚪 Logout     │              └─────────────────┘
                   └──────────────┘               Loop: User can
                          │                        navigate between
                          ▼                        all sections
                   ┌──────────────┐               until logout
                   │   ✅ END     │
                   └──────────────┘
```

### Key Decision Points

| Decision Point | Options | Outcome |
|----------------|---------|----------|
| **Token Check** | Token exists / No token | Bypass login or Show login page |
| **User Action** | Previous Assessment / New Journey | Load saved data or Start assessment |
| **Skill Level** | Beginner / Intermediate/Advanced | Skip quiz or Take verification quiz |
| **Learning Mode** | Practice / Videos / Theory | Different content pages |
| **PDF Generation** | Generate / Skip | Download personalized learning path |

### State Persistence

```
LocalStorage:
├── auth_token (JWT)          │ Persists user session
├── user_email              │ Quick access to user info
└── last_visited_page       │ Resume where user left off

MongoDB:
├── User Document
│   ├── emails[]            │ Google account emails
│   ├── name                │ Display name
│   └── assessment          │ Complete assessment data
│       ├── stage          │ School/College/Working
│       ├── level          │ Beginner/Intermediate/Advanced
│       ├── verified       │ Quiz completed?
│       ├── quizScore      │ Score if quiz taken
│       └── completedAt    │ Timestamp
└── Questions Collection   │ Quiz questions database
```

## ✅ Prerequisites

Before you begin, ensure you have the following installed on your machine:

### Required Software
- 🟢 **Node.js** (v16.0.0 or higher) - [Download Here](https://nodejs.org/)
- 📦 **npm** (v8.0.0 or higher) - Comes with Node.js
- 🍃 **MongoDB** - Choose one:
  - **Local MongoDB**: [Download Community Server](https://www.mongodb.com/try/download/community)
  - **MongoDB Atlas**: [Free Cloud Database](https://www.mongodb.com/cloud/atlas/register)
- 🔱 **Git** - [Download Here](https://git-scm.com/downloads)

### Optional but Recommended
- **MongoDB Compass** - GUI for MongoDB (comes with local installation)
- **Postman** - For API testing
- **VS Code** - Recommended code editor with extensions:
  - ESLint
  - Tailwind CSS IntelliSense
  - ES7+ React/Redux/React-Native snippets

### Verify Installation

Check if everything is installed correctly:

```bash
# Check Node.js version
node --version
# Should output: v16.x.x or higher

# Check npm version
npm --version
# Should output: 8.x.x or higher

# Check MongoDB (if installed locally)
mongod --version
# Should output: db version vX.X.X

# Check Git
git --version
# Should output: git version X.X.X
```

## 📚 Installation Guide

### Step 1: Clone the Repository

```bash
# Clone the project
git clone https://github.com/yourusername/MERN_STACK_CAPSTONE_PROJECT.git

# Navigate to project directory
cd MERN_STACK_CAPSTONE_PROJECT
```

### Step 2: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# This will install:
# - express, mongoose, passport, jsonwebtoken
# - cors, dotenv, express-session
# - passport-google-oauth20
```

**Verify Backend Installation:**
```bash
# Check if node_modules was created
dir node_modules     # Windows
ls node_modules      # Mac/Linux
```

### Step 3: Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# This will install:
# - react, react-dom, vite
# - tailwindcss, postcss, autoprefixer
# - lucide-react (icons)
```

**Verify Frontend Installation:**
```bash
# Check if node_modules was created
dir node_modules     # Windows
ls node_modules      # Mac/Linux
```

## ⚙️ Environment Configuration

Environment variables are used to store sensitive information and configuration settings. You need to create `.env` files for both backend and frontend.

### Step 4: Backend Environment Setup

**4.1. Create `.env` file in the backend directory:**

```bash
# Navigate to backend directory
cd backend

# Create .env file
# Windows PowerShell:
New-Item .env -ItemType File

# Mac/Linux/Git Bash:
touch .env
```

**4.2. Add the following variables to `backend/.env`:**

```env
# Server Configuration
PORT=5000

# Database Configuration
# For Local MongoDB:
MONGODB_URI=mongodb://localhost:27017/dsa_pathway

# For MongoDB Atlas (Cloud):
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dsa_pathway?retryWrites=true&w=majority

# Google OAuth Credentials
# Get these from: https://console.cloud.google.com/
GOOGLE_OAUTH_CLIENT_ID=your_google_client_id_here
GOOGLE_OAUTH_CLIENT_SECRET=your_google_client_secret_here

# Callback URL for OAuth
# For Local Development:
CALLBACK_URL=http://localhost:5000/auth/google/callback

# For Production:
# CALLBACK_URL=https://your-backend-url.onrender.com/auth/google/callback

# Frontend URL
# For Local Development:
FRONTEND_URL=http://localhost:5173

# For Production:
# FRONTEND_URL=https://your-frontend-url.vercel.app

# Security Secrets (Generate random strings)
JWT_SECRET=dsa_pathway_jwt_secret_2024_secure_key
SESSION_SECRET=dsa_pathway_session_secret_2024_secure_key
```

**4.3. How to Get Google OAuth Credentials:**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable "Google+ API"
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
5. Configure OAuth consent screen:
   - User Type: External
   - App name: DSA Learning Pathway
   - Add your email
6. Create OAuth Client ID:
   - Application type: Web application
   - Authorized redirect URIs:
     - `http://localhost:5000/auth/google/callback` (for local)
     - `https://your-backend.onrender.com/auth/google/callback` (for production)
7. Copy the Client ID and Client Secret to your `.env` file

**4.4. MongoDB Setup Options:**

**Option A: Local MongoDB**
```bash
# Start MongoDB service
# Windows:
net start MongoDB

# Mac:
brew services start mongodb-community

# Linux:
sudo systemctl start mongod
```

**Option B: MongoDB Atlas (Recommended)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a free account
3. Create a new cluster (Free M0 tier)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database password
7. Replace `<dbname>` with `dsa_pathway`
8. Add to your `.env` file as `MONGODB_URI`

### Step 5: Frontend Environment Setup

**5.1. Create `.env.local` file in the frontend directory:**

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Create .env.local file
# Windows PowerShell:
New-Item .env.local -ItemType File

# Mac/Linux/Git Bash:
touch .env.local
```

**5.2. Add the following variables to `frontend/.env.local`:**

```env
# Backend API URL
# For Local Development:
VITE_API_BASE_URL=http://localhost:5000

# For Production:
# VITE_API_BASE_URL=https://your-backend-url.onrender.com

# Firebase Configuration (if using Firebase - currently commented out in code)
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX

# Google OAuth Client ID (for frontend reference)
GOOGLE_OAUTH_CLIENT_ID=same_as_backend_client_id
GOOGLE_OAUTH_CLIENT_SECRET=same_as_backend_client_secret
```

**⚠️ Important Notes:**
- Never commit `.env` files to Git (already in `.gitignore`)
- Keep your secrets secure and don't share them publicly
- Use different secrets for development and production
- For production, use strong, randomly generated secrets

## 🚀 Running the Project

### Step 6: Start MongoDB (If Using Local MongoDB)

**Before starting the application, make sure MongoDB is running:**

```bash
# Windows:
net start MongoDB
# Or open MongoDB Compass and start the connection

# Mac (Homebrew):
brew services start mongodb-community

# Mac (Manual):
mongod --config /usr/local/etc/mongod.conf

# Linux (systemd):
sudo systemctl start mongod

# Linux (Manual):
sudo mongod --fork --logpath /var/log/mongodb/mongod.log
```

**Verify MongoDB is running:**
```bash
# Check MongoDB status
# Windows:
sc query MongoDB

# Mac:
brew services list | grep mongodb

# Linux:
sudo systemctl status mongod
```

### Step 7: Start the Backend Server

**Open Terminal/Command Prompt #1:**

```bash
# Navigate to backend directory (from project root)
cd backend

# Start the development server
npm run dev

# Alternative:
# npm start  (for production mode)
# node server.js  (manual start)
```

**Expected Output:**
```
[nodemon] starting `node server.js`
Server running on port 5000
MongoDB connected
```

**Verify Backend is Running:**
- Open browser and go to: `http://localhost:5000`
- You should see: `{"message": "DSA Pathway Backend API"}`

**Backend Available Endpoints:**
- 🏠 Home: `http://localhost:5000/`
- 🔐 Auth: `http://localhost:5000/auth/google`
- 👤 User: `http://localhost:5000/user/profile`
- ❓ Questions: `http://localhost:5000/api/questions`

### Step 8: Start the Frontend Application

**Open Terminal/Command Prompt #2 (New Window):**

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Start the development server
npm run dev

# Alternative commands:
# npm run build  (create production build)
# npm run preview  (preview production build)
```

**Expected Output:**
```
  VITE v5.x.x  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Step 9: Access the Application

**Open your browser and navigate to:**
```
http://localhost:5173
```

**You should see the Login Page with:**
- 🎨 Beautiful space-themed UI
- 👍 Google Sign-In button

### Complete Running Checklist

- [ ] MongoDB is running (local or Atlas connection working)
- [ ] Backend `.env` file is created with all required variables
- [ ] Frontend `.env.local` file is created
- [ ] Backend server is running on `http://localhost:5000`
- [ ] Frontend app is running on `http://localhost:5173`
- [ ] Both terminals show no errors
- [ ] Browser shows the login page correctly

### Quick Start Commands (Summary)

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

**Terminal 3 - MongoDB (if local):**
```bash
# Windows:
net start MongoDB

# Mac/Linux:
mongod
```

### Stopping the Application

```bash
# In each terminal window, press:
Ctrl + C  (Windows/Linux)
Cmd + C   (Mac)

# Stop MongoDB (if needed):
# Windows:
net stop MongoDB

# Mac:
brew services stop mongodb-community

# Linux:
sudo systemctl stop mongod
```

## 📡 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/auth/google` | Initiate Google OAuth login | No |
| `GET` | `/auth/google/callback` | OAuth callback handler | No |
| `GET` | `/auth/me` | Get current authenticated user | Yes |
| `POST` | `/auth/assessment` | Save user assessment | Yes |
| `GET` | `/auth/assessment` | Get user assessment | Yes |
| `POST` | `/auth/logout` | Logout current user | Yes |
| `GET` | `/auth/stats` | Get platform statistics | No |

### User Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/user/profile` | Get user profile with assessment | Yes |
| `POST` | `/user/assessment` | Save/Update user assessment | Yes |
| `GET` | `/user/assessment` | Get user's assessment data | Yes |

### Questions Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/api/questions` | Get all questions | No |
| `POST` | `/api/questions` | Create new question | Yes |
| `PUT` | `/api/questions/:id` | Update question by ID | Yes |
| `DELETE` | `/api/questions/:id` | Delete question by ID | Yes |

### Example API Requests

**Get User Profile:**
```bash
curl -X GET http://localhost:5000/user/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

**Save Assessment:**
```bash
curl -X POST http://localhost:5000/user/assessment \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "stage": "College Student",
    "programmingLevel": "Intermediate",
    "dailyHours": "2-4 hours",
    "goal": "Get Job Ready",
    "languages": ["JavaScript", "Python"]
  }'
```

### Response Examples

**Success Response (User Profile):**
```json
{
  "name": "John Doe",
  "emails": ["john@example.com"],
  "assessment": {
    "stage": "College Student",
    "programmingLevel": "Intermediate",
    "dailyHours": "2-4 hours",
    "goal": "Get Job Ready",
    "languages": ["JavaScript", "Python"],
    "verified": true,
    "completedAt": "2024-10-29T10:30:00.000Z"
  }
}
```

**Error Response:**
```json
{
  "message": "No token provided"
}
```

## 🔧 Troubleshooting

### Common Issues and Solutions

#### 1. MongoDB Connection Error

**Problem:** `MongoNetworkError: failed to connect to server`

**Solutions:**
```bash
# Check if MongoDB is running
# Windows:
sc query MongoDB

# Mac:
brew services list | grep mongodb

# Start MongoDB if not running
# Windows:
net start MongoDB

# Mac:
brew services start mongodb-community

# Verify connection string in backend/.env
MONGODB_URI=mongodb://localhost:27017/dsa_pathway
```

#### 2. Backend Port Already in Use

**Problem:** `Error: listen EADDRINUSE: address already in use :::5000`

**Solutions:**
```bash
# Find process using port 5000
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -i :5000
kill -9 <PID>

# Or change PORT in backend/.env
PORT=5001
```

#### 3. Google OAuth Error

**Problem:** `redirect_uri_mismatch` or OAuth not working

**Solutions:**
1. Verify redirect URI in Google Cloud Console matches exactly:
   - `http://localhost:5000/auth/google/callback`
2. Check `CALLBACK_URL` in `backend/.env`
3. Ensure `GOOGLE_OAUTH_CLIENT_ID` and `GOOGLE_OAUTH_CLIENT_SECRET` are correct
4. Try clearing browser cookies and cache

#### 4. Frontend Cannot Connect to Backend

**Problem:** `GET http://localhost:5000/user/profile 404 (Not Found)`

**Solutions:**
1. Verify backend is running on port 5000
2. Check `VITE_API_BASE_URL` in `frontend/.env.local`:
   ```env
   VITE_API_BASE_URL=http://localhost:5000
   ```
3. Restart frontend after changing `.env.local`
4. Check CORS settings in backend

#### 5. "Previous Assessment" Button Not Working

**Problem:** 404 error when clicking "Previous Assessment"

**Solutions:**
1. Restart backend server to load new routes
2. Verify `/user/profile` endpoint exists in `backend/routes/user.js`
3. Check if user has previous assessment data in MongoDB
4. Verify JWT token is valid

#### 6. npm install Errors

**Problem:** Package installation fails

**Solutions:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json  # Mac/Linux
rd /s /q node_modules  # Windows
del package-lock.json   # Windows

# Reinstall
npm install

# If still fails, try with legacy peer deps
npm install --legacy-peer-deps
```

#### 7. Tailwind CSS Not Working

**Problem:** Styles not applying

**Solutions:**
1. Verify `tailwind.config.js` exists in frontend
2. Check `index.css` has Tailwind directives:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
3. Restart frontend dev server

#### 8. Environment Variables Not Loading

**Problem:** App behavior suggests env vars aren't loaded

**Solutions:**
1. Ensure `.env` file is in correct directory (backend root)
2. Ensure `.env.local` file is in frontend root
3. Restart both servers after changing env files
4. Check file names exactly (`.env` not `.env.txt`)
5. For Vite, env vars MUST start with `VITE_`

### Debug Mode

**Enable detailed logging:**

**Backend:**
```javascript
// Add to server.js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});
```

**Frontend:**
```javascript
// Add to api.js
console.log('API Request:', url, options);
```

### Getting Help

If you're still stuck:
1. Check the browser console for errors (F12)
2. Check backend terminal for error messages
3. Verify all checklist items in "Running the Project" section
4. Create an issue on GitHub with:
   - Error message
   - Steps to reproduce
   - Your environment (OS, Node version, etc.)

## 🚀 Deployment

### Backend Deployment on Render

1. **Create a Render Account:**
   - Go to [render.com](https://render.com) and sign up

2. **Connect Repository:**
   - Connect your GitHub repository

3. **Create Web Service:**
   - Click "New" → "Web Service"
   - Select your repository
   - Configure build settings:
     - **Build Command:** `npm install`
     - **Start Command:** `npm start`
   - Add environment variables in Render dashboard

4. **Database Setup:**
   - Use MongoDB Atlas for production database
   - Update `MONGODB_URI` in environment variables

5. **Google OAuth Setup:**
   - Update the redirect URI in Google Cloud Console to: `https://your-render-app.onrender.com/auth/google/callback`
   - Set `CALLBACK_URL` environment variable to the same URL

6. **Deploy:**
   - Render will automatically deploy on git push

### Frontend Deployment on Vercel

1. **Create a Vercel Account:**
   - Go to [vercel.com](https://vercel.com) and sign up

2. **Connect Repository:**
   - Connect your GitHub repository

3. **Deploy Frontend:**
   - Click "New Project"
   - Select your repository
   - Configure build settings:
     - **Framework Preset:** Vite
     - **Root Directory:** `frontend`
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`
   - Add environment variables:
     - `VITE_API_BASE_URL` - `https://mern-stack-capstone-project.onrender.com`

4. **Update API Calls:**
   - Ensure frontend API calls point to production backend URL

5. **Deploy:**
   - Vercel will deploy automatically on git push

## 📁 Project Structure

### 🏛️ Directory Overview

```
MERN_STACK_CAPSTONE_PROJECT/
┌───────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  📦 ROOT DIRECTORY                                                       │
│                                                                             │
└───────────────────────────────────────────────────────────────────────────┘
         │
         ├─── 📝 README.md                 (This file - Complete documentation)
         ├─── 🚫 .gitignore                (Git ignore patterns)
         │
         ├────────────────────────────────────────────────────────┐
         │                                                            │
         │  📥 BACKEND/                                            │
         │  (Node.js + Express.js Server)                           │
         │  Port: 5000                                               │
         │                                                            │
         └────────────────────────────────────────────────────────┘
                 │
                 ├─── ⚙️ config/
                 │       └─── passport.js          (Google OAuth 2.0 Strategy)
                 │                               - Configures Passport.js
                 │                               - Google sign-in strategy
                 │                               - Session serialization
                 │
                 ├─── 📄 models/
                 │       └─── User.js              (MongoDB User Schema)
                 │                               - User data structure
                 │                               - Assessment schema
                 │                               - Mongoose model
                 │
                 ├─── 🛣️ routes/
                 │       ├─── auth.js             (Authentication Routes)
                 │       │                       - /auth/google
                 │       │                       - /auth/google/callback
                 │       │                       - /auth/me
                 │       │                       - /auth/logout
                 │       │
                 │       ├─── user.js             (User Profile Routes)
                 │       │                       - /user/profile
                 │       │                       - /user/assessment (GET/POST)
                 │       │
                 │       └─── questions.js        (Quiz Routes)
                 │                               - /api/questions (CRUD)
                 │
                 ├─── 🚀 server.js               (Express Server Entry Point)
                 │                               - Middleware setup
                 │                               - Database connection
                 │                               - Route registration
                 │                               - Server initialization
                 │
                 ├─── 📦 package.json           (Backend Dependencies)
                 ├─── 🔒 package-lock.json       (Dependency Lock File)
                 └─── 🔑 .env                    (Environment Variables)
                                             - MONGODB_URI
                                             - JWT_SECRET
                                             - GOOGLE_OAUTH_*
                                             - PORT, CALLBACK_URL

         ┌────────────────────────────────────────────────────────┐
         │                                                            │
         │  👨‍💻 FRONTEND/                                           │
         │  (React + Vite Application)                              │
         │  Port: 5173                                               │
         │                                                            │
         └────────────────────────────────────────────────────────┘
                 │
                 ├─── 📁 public/                (Static Assets)
                 │       └─── favicon.ico
                 │
                 ├─── 📚 src/
                 │       │
                 │       ├─── 🧩 components/        (React Components)
                 │       │       │
                 │       │       ├─── 📋 assessment/  (Assessment Module)
                 │       │       │       └─── AssessmentForm.jsx
                 │       │       │               - 5-step questionnaire
                 │       │       │               - Stage, level, hours, goal, languages
                 │       │       │
                 │       │       ├─── 🧠 quiz/          (Quiz Module)
                 │       │       │       └─── SkillVerificationQuiz.jsx
                 │       │       │               - 10 MCQ questions
                 │       │       │               - Level-based questions
                 │       │       │
                 │       │       ├─── 💻 practice/      (Practice Module)
                 │       │       │       └─── PracticeProblems.jsx
                 │       │       │               - Coding challenges
                 │       │       │               - Filter by difficulty
                 │       │       │
                 │       │       ├─── 📝 pdf/           (PDF Module)
                 │       │       │       └─── PDFDownloader.jsx
                 │       │       │               - Generate learning path PDF
                 │       │       │
                 │       │       ├─── 🔐 LoginPage.jsx    (OAuth Login)
                 │       │       ├─── 🏠 WelcomePage.jsx  (Landing Page)
                 │       │       ├─── 📈 Dashboard.jsx    (Main Dashboard)
                 │       │       ├─── 🧭 Navigation.jsx   (Top Nav Bar)
                 │       │       ├─── 🎥 VideoLearning.jsx (Video Tutorials)
                 │       │       └─── 📚 TheoryContent.jsx (Articles)
                 │       │
                 │       ├─── 🔌 services/          (API & Services)
                 │       │       ├─── api.js
                 │       │       │       - Fetch wrapper
                 │       │       │       - JWT token handling
                 │       │       │       - API endpoints
                 │       │       │
                 │       │       └─── learningPathService.js
                 │       │               - AI path generation
                 │       │
                 │       ├─── 📦 models/            (Data Models)
                 │       │       ├─── index.js
                 │       │       └─── appstore.js
                 │       │
                 │       ├─── 🎨 index.css           (Global Styles)
                 │       │       - Tailwind directives
                 │       │       - Custom CSS
                 │       │
                 │       ├─── ⚡ App.jsx              (Root Component)
                 │       │       - App state management
                 │       │       - Routing logic
                 │       │       - Authentication flow
                 │       │
                 │       └─── 🚀 main.jsx            (React Entry Point)
                 │               - ReactDOM.render
                 │
                 ├─── 🌐 index.html             (HTML Template)
                 ├─── ⚙️ vite.config.js         (Vite Configuration)
                 ├─── 🎨 tailwind.config.js     (Tailwind Config)
                 │                               - Custom colors
                 │                               - Space theme
                 │                               - Animations
                 │
                 ├─── 🛠️ postcss.config.js      (PostCSS Config)
                 ├─── ✅ eslint.config.js        (ESLint Rules)
                 ├─── 📦 package.json           (Frontend Dependencies)
                 ├─── 🔒 package-lock.json       (Dependency Lock)
                 └─── 🔑 .env.local              (Environment Variables)
                                             - VITE_API_BASE_URL
                                             - VITE_FIREBASE_*
```

### 📊 Component Hierarchy

```
App.jsx (Root)
│
├─── LoginPage
│       └─── Google OAuth Button
│
├─── WelcomePage
│       ├─── Previous Assessment Button
│       ├─── Start Journey Button
│       └─── Logout Button
│
├─── AssessmentForm
│       └─── 5 Question Steps
│
├─── SkillVerificationQuiz
│       └─── 10 MCQ Questions
│
├─── Dashboard
│       ├─── Navigation (always visible)
│       ├─── User Profile Card
│       ├─── Learning Path Card
│       └─── Feature Cards
│               ├─── Practice
│               ├─── Videos
│               ├─── Theory
│               └─── PDF
│
├─── PracticeProblems
│       ├─── Navigation
│       ├─── Filter Controls
│       └─── Problem Cards
│
├─── VideoLearning
│       ├─── Navigation
│       ├─── Filter/Search
│       └─── Video Cards
│
├─── TheoryContent
│       ├─── Navigation
│       ├─── Filter/Search
│       └─── Article Cards
│
└─── PDFDownloader
        ├─── Navigation
        └─── PDF Generation Form
```

### 💾 Database Schema

```javascript
// MongoDB Collections

Users Collection {
  _id: ObjectId,
  emails: [String],              // Google account emails
  name: String,                  // Display name from Google
  assessment: {
    stage: String,               // "School Student" | "College Student" | "Working Professional"
    programmingLevel: String,    // "Beginner" | "Intermediate" | "Advanced"
    dailyHours: String,          // "< 1 hour" | "1-2 hours" | "2-4 hours" | "> 4 hours"
    goal: String,                // "Learn Basics" | "Interview Prep" | "Get Job Ready" | "Improve Skills"
    languages: [String],         // ["JavaScript", "Python", "Java", "C++", etc.]
    verified: Boolean,           // Quiz completion status
    quizScore: Number,           // 0-10 (if quiz taken)
    completedAt: Date            // Timestamp
  },
  createdAt: Date,
  updatedAt: Date
}

Questions Collection {
  _id: ObjectId,
  question: String,
  options: [String],
  correctAnswer: String,
  difficulty: String,            // "Intermediate" | "Advanced"
  topic: String,
  explanation: String
}
```

### 🔑 Key Files Explained

| File | Lines | Purpose | Key Features |
|------|-------|---------|---------------|
| **Backend** ||||
| `server.js` | ~50 | Express server entry | Middleware, MongoDB, Routes |
| `config/passport.js` | ~40 | OAuth configuration | Google Strategy, User serialization |
| `models/User.js` | ~25 | User data schema | Assessment structure, Mongoose |
| `routes/auth.js` | ~160 | Auth endpoints | Google OAuth, JWT, Logout |
| `routes/user.js` | ~95 | User endpoints | Profile, Assessment CRUD |
| `routes/questions.js` | ~80 | Quiz endpoints | Questions CRUD |
| **Frontend** ||||
| `App.jsx` | ~320 | Root component | State, Routing, Auth flow |
| `main.jsx` | ~10 | React entry | ReactDOM render |
| `services/api.js` | ~70 | API service | Fetch wrapper, JWT handling |
| `services/learningPathService.js` | ~150 | AI path generator | OpenAI integration |
| `components/LoginPage.jsx` | ~105 | Login UI | Google OAuth button |
| `components/WelcomePage.jsx` | ~105 | Landing page | 3 action buttons |
| `components/Dashboard.jsx` | ~170 | Main dashboard | Profile, Learning path, Features |
| `components/assessment/AssessmentForm.jsx` | ~200 | Assessment form | 5-step questionnaire |
| `components/quiz/SkillVerificationQuiz.jsx` | ~250 | Quiz interface | 10 MCQs, Timer, Scoring |
| `components/practice/PracticeProblems.jsx` | ~180 | Practice UI | LeetCode-style problems |
| `components/VideoLearning.jsx` | ~198 | Video library | YouTube embeds, Filters |
| `components/TheoryContent.jsx` | ~256 | Article library | External links, Search |
| `components/pdf/PDFDownloader.jsx` | ~120 | PDF generator | jsPDF integration |
| `components/Navigation.jsx` | ~178 | Top navigation | Desktop + Mobile responsive |
| `tailwind.config.js` | ~96 | Styling config | Custom theme, Animations |

### 📦 Dependencies

#### Backend Package.json
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.0",
    "passport": "^0.6.0",
    "passport-google-oauth20": "^2.0.0",
    "jsonwebtoken": "^9.0.0",
    "express-session": "^1.17.3",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}
```

#### Frontend Package.json
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.3",
    "vite": "^4.4.5",
    "tailwindcss": "^3.3.3",
    "postcss": "^8.4.27",
    "autoprefixer": "^10.4.14",
    "eslint": "^8.45.0"
  }
}
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@example.com or join our Discord channel.

## Acknowledgments

- React documentation
- Express.js guides
- MongoDB documentation
- Tailwind CSS documentation
