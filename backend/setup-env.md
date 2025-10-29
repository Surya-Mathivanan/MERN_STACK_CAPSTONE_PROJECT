# Environment Setup

Create a `.env` file in the backend directory with the following variables:

```
MONGODB_URI=mongodb://localhost:27017/dsa-pathway
GOOGLE_OAUTH_CLIENT_ID=your_google_client_id_here
GOOGLE_OAUTH_CLIENT_SECRET=your_google_client_secret_here
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
```

## Setup Instructions:

1. **MongoDB**: Make sure MongoDB is running on your local machine
2. **Google OAuth**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Google+ API
   - Go to "Credentials" > "Create Credentials" > "OAuth 2.0 Client IDs"
   - Set authorized redirect URI to: `http://localhost:5000/auth/google/callback`
   - Copy Client ID and Client Secret to your `.env` file
3. **JWT Secret**: Generate a random string for JWT_SECRET (can use any random string)

## Running the Application:

1. Start MongoDB service
2. Install dependencies: `npm install` (in both backend and frontend directories)
3. Start backend: `npm start` (in backend directory)
4. Start frontend: `npm run dev` (in frontend directory)
