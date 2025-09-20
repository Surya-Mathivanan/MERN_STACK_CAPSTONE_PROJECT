# DSA Pathway - MERN Stack Application

A personalized learning platform for Data Structures and Algorithms with AI-powered learning paths.

## Features

- **Google OAuth Authentication** (replaced Firebase)
- **MongoDB Database** for storing questions and user data
- **Express.js Backend** with RESTful APIs
- **React Frontend** with TypeScript
- **Personalized Learning Paths** based on user assessment
- **Skill Verification Quizzes**
- **Interactive Practice Problems**
- **Video Learning Resources**

## Project Structure

```
MERN_STACK_CAPSTONE_PROJECT/
├── backend/                 # Express.js server
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── config/             # Passport configuration
│   ├── server.js           # Main server file
│   ├── migrateQuestions.js # Database migration script
│   └── package.json
├── src/                    # React frontend
│   ├── components/         # React components
│   ├── services/           # API services
│   ├── data/               # Static data (migrated to DB)
│   ├── types/              # TypeScript types
│   └── App.tsx             # Main React app
└── package.json            # Frontend dependencies
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Google OAuth credentials

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/dsa-pathway
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. Start MongoDB (if running locally):
   ```bash
   mongod
   ```

5. Run the migration script to populate questions:
   ```bash
   node migrateQuestions.js
   ```

6. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate back to the root directory:
   ```bash
   cd ..
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:5000/auth/google/callback`
6. Copy Client ID and Client Secret to your `.env` file

## API Endpoints

### Authentication
- `GET /auth/google` - Initiate Google OAuth
- `GET /auth/google/callback` - OAuth callback
- `GET /auth/me` - Get current user
- `POST /auth/logout` - Logout

### Questions
- `GET /api/questions` - Get all questions
- `GET /api/questions/level/:level` - Get questions by level
- `GET /api/questions/:id` - Get question by ID
- `POST /api/questions` - Create new question
- `PUT /api/questions/:id` - Update question
- `DELETE /api/questions/:id` - Delete question

## Technologies Used

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Passport.js** - Authentication middleware
- **JWT** - JSON Web Tokens
- **Bcrypt** - Password hashing

### Frontend
- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Development

### Running in Development Mode

1. Start the backend server:
   ```bash
   cd backend && npm run dev
   ```

2. Start the frontend server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Start the backend in production:
   ```bash
   cd backend && npm start
   ```

## Migration from Firebase

This project has been migrated from Firebase authentication to a custom Google OAuth implementation using Passport.js. The main changes include:

- Removed Firebase dependency
- Added Express.js backend with Passport Google OAuth strategy
- Implemented JWT-based authentication
- Migrated questions from static data to MongoDB
- Updated frontend to use RESTful APIs instead of Firebase SDK

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
