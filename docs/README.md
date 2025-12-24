# Frontend Documentation

## Overview

This is the React-based frontend application for the Fetal Head Segmentation system. It provides a web interface for uploading ultrasound images and displaying AI-powered segmentation results.

## Technology Stack

- **Framework**: React 19.2 with TypeScript 5.9
- **Build Tool**: Vite 7.x (using Rolldown)
- **Styling**: TailwindCSS 4.x
- **State Management**: Redux Toolkit 2.10 with RTK Query
- **UI Components**: Custom components with Framer Motion animations
- **Icons**: Lucide React

## Project Structure

```
frontend/
├── src/
│   ├── components/        # React components
│   ├── store/            # Redux store and API configuration
│   ├── types/            # TypeScript type definitions
│   ├── lib/              # Utility functions
│   └── assets/           # Static assets
├── public/               # Public static files
├── docs/                 # Documentation files
└── config files          # Build and development configuration
```

## Key Features

- **Image Upload**: Drag-and-drop or click-to-upload interface
- **Real-time Validation**: Client-side validation for file type and size
- **AI Segmentation**: Integration with backend AI model
- **Quality Metrics**: Display segmentation quality scores and confidence levels
- **Error Handling**: Comprehensive error boundary and user-friendly error messages
- **Responsive Design**: Mobile-friendly interface
- **Usage Guidelines**: Built-in help for users

## Development

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn package manager

### Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build production bundle
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

### Development Server

The dev server runs on `localhost:3000` with API proxy configured to forward `/api/*` requests to the backend server at `http://127.0.0.1:5000`.

### Build Output

Production builds are generated in the `dist/` directory using Vite's optimized build process with TypeScript compilation and code splitting.

## Configuration

### Environment Variables

- `VITE_API_BASE_URL` - API base URL (defaults to `/api`)

### Path Aliases

- `@` - Resolves to `./src` directory

### Styling

- TailwindCSS with custom primary color: `#3b82f6` (blue)
- Custom secondary color: `#1e293b` (slate)

## API Integration

Uses Redux Toolkit Query for API state management with:

- Automatic request caching
- Request retry logic (2-3 retries with exponential backoff)
- 30-second timeout for requests
- Type-safe API endpoints

## Browser Support

Modern browsers with ES2015+ support. The build process uses Vite for optimal browser compatibility and performance.
