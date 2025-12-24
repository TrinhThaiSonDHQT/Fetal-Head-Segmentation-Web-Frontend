# Component Architecture

## Component Hierarchy

```
App
├── ErrorBoundary
├── Header (inline)
├── ImageUpload (main component)
│   ├── UsageGuide
│   ├── UI Components
│   │   ├── Card
│   │   ├── Button
│   │   ├── Alert
│   │   └── Badge
│   └── Image Preview & Results
└── Footer (inline)
```

## Core Components

### App.tsx

Main application component that structures the layout with header, main content area, and footer. Wraps content in ErrorBoundary for error handling.

### ImageUpload.tsx

Primary feature component handling:

- File selection and validation
- Image preview generation
- Upload process with loading states
- Results display with quality metrics
- Error handling and retry logic
- Confidence scoring visualization

**Key Features**:

- Accepts multiple image formats (JPEG, PNG, GIF, BMP, WebP)
- 16 MB file size limit
- Real-time validation feedback
- Retry mechanism with counter
- Displays validation warnings from backend

### UsageGuide.tsx

Informational component providing user guidance on:

- Acceptable image types (2D B-mode ultrasound scans)
- Recommended image content (fetal head circumference views)
- What to avoid (non-medical images, 3D renders)

### ErrorBoundary.tsx

React error boundary implementation that:

- Catches JavaScript errors in component tree
- Displays fallback UI when errors occur
- Logs errors to console for debugging
- Provides reset mechanism to recover from errors

## UI Components

### Card

Container component with header and content sections for consistent layout structure.

### Button

Reusable button component with:

- Multiple variants (default, outline)
- Disabled state support
- Loading state support
- Icon integration

### Alert

Notification component with variants:

- `info` - Blue informational alerts
- `warning` - Yellow warning messages
- `error` - Red error messages
- `success` - Green success notifications

Includes title and description areas for structured messaging.

### Badge

Small label component for displaying status or categories with variants:

- `success` - High confidence indicator
- `warning` - Medium confidence indicator
- `error` - Low confidence indicator

## Component Patterns

### State Management

- Local state using React hooks (`useState`, `useRef`)
- API state managed by RTK Query hooks
- Form state with controlled inputs

### Error Handling

- Validation errors displayed inline
- Upload errors with contextual messages
- Network error detection and retry
- Error boundary for crash protection

### Loading States

- Spinner animation during processing
- Disabled buttons during operations
- Loading text feedback

### Responsive Design

- Mobile-first approach with TailwindCSS
- Grid layouts for flexible content
- Responsive spacing and typography
