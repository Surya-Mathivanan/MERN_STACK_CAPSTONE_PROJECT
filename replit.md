# DSA Learning Pathway Application

## Overview
This is a comprehensive Data Structures and Algorithms (DSA) learning platform built with React, TypeScript, and Vite. The application provides personalized learning paths based on user assessment and skill verification, helping students and professionals master DSA concepts through adaptive learning.

## Project State
- **Status**: Successfully configured for Replit environment
- **Last Updated**: September 08, 2025
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Architecture
- **Frontend**: React SPA with TypeScript
- **Port Configuration**: 5000 (configured for Replit proxy)
- **Host Configuration**: 0.0.0.0 for external access
- **HMR**: Configured for Replit environment

## Key Features
1. **Intelligent Assessment System**: Comprehensive questionnaire for skill evaluation
2. **Adaptive Skill Verification**: Quiz system for intermediate/advanced users
3. **Personalized Learning Paths**: AI-driven curriculum generation
4. **Multi-Platform Resources**: Integration with LeetCode, GeeksforGeeks, Codeforces
5. **Video Learning**: Curated YouTube tutorials
6. **Theory Content**: Educational articles and documentation
7. **PDF Generation**: Downloadable study guides

## Components Structure
- **WelcomePage**: Landing page with feature highlights
- **AssessmentForm**: Multi-step user evaluation form
- **SkillVerificationQuiz**: Adaptive quiz for skill validation
- **Dashboard**: Central hub with personalized learning path
- **PracticeProblems**: Curated coding challenges
- **VideoLearning**: Tutorial video collections
- **TheoryContent**: Educational articles library
- **PDFDownloader**: Study guide generator

## Configuration
- **Vite Config**: Configured for Replit environment with proper host/port settings
- **Deployment**: Configured for autoscale deployment using npm build/preview
- **TypeScript**: Strict type checking enabled
- **Tailwind**: Utility-first CSS framework

## Recent Changes
- **September 08, 2025**: 
  - Configured Vite for Replit environment (host: 0.0.0.0, port: 5000)
  - Fixed component type issues in PDFDownloader
  - Set up workflow for development server
  - Configured deployment settings
  - Resolved LSP diagnostics

## Development Workflow
- **Development Server**: `npm run dev` (configured as workflow)
- **Build**: `npm run build`
- **Preview**: `npm run preview`
- **Lint**: `npm run lint`

## Dependencies
- React 18.3.1
- TypeScript 5.5.3
- Vite 5.4.2
- Tailwind CSS 3.4.1
- Lucide React 0.344.0

## User Preferences
- Clean, modern UI with gradient backgrounds
- Responsive design for all screen sizes
- Accessibility considerations with ARIA labels
- Professional color scheme (purple/violet branding)