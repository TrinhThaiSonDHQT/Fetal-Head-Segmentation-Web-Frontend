# Build Configuration

## Vite Configuration

### Build Tool

Uses Vite 7.x (Rolldown variant) for fast development and optimized production builds.

### Plugins

- **@vitejs/plugin-react**: React Fast Refresh and JSX transform

### Path Resolution

Path alias configured:

- `@` → `./src` directory

Enables clean imports:

```typescript
import { utils } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
```

### Development Server

- **Port**: 3000
- **Proxy Configuration**:
  - Target: `http://127.0.0.1:5000`
  - Path: `/api/*`
  - Change Origin: Enabled
  - Timeout: 60 seconds
  - Proxy Timeout: 60 seconds

## TypeScript Configuration

### tsconfig.json

Main TypeScript configuration for the project with ES2020 target and strict type checking.

### tsconfig.app.json

Application-specific configuration extending base config for `src/` directory.

### tsconfig.node.json

Node.js-specific configuration for build scripts and configuration files.

## TailwindCSS Configuration

### Content Scanning

Scans for classes in:

- `./index.html`
- `./src/**/*.{js,ts,jsx,tsx}`

### Custom Theme

Extended colors:

- **primary**: `#3b82f6` (Blue)
- **secondary**: `#1e293b` (Slate)

### PostCSS

PostCSS configuration with:

- TailwindCSS plugin (@tailwindcss/postcss)
- Autoprefixer for browser compatibility

## ESLint Configuration

### Plugins

- `@eslint/js` - Core ESLint rules
- `typescript-eslint` - TypeScript-specific rules
- `eslint-plugin-react-hooks` - React Hooks linting
- `eslint-plugin-react-refresh` - React Fast Refresh validation

### Globals

Browser and ES2020 global variables configured.

## Package Management

### Dependencies

Production dependencies:

- React ecosystem (React, ReactDOM)
- State management (Redux Toolkit, React-Redux)
- UI libraries (Framer Motion, Lucide React)
- Utility libraries (clsx, class-variance-authority, tailwind-merge)

### Dev Dependencies

- TypeScript toolchain
- Vite build tools
- TailwindCSS and PostCSS
- ESLint and plugins
- Type definitions (@types/\*)

### Package Override

Uses `rolldown-vite@7.2.2` as Vite replacement for enhanced build performance.

## Build Output

### Production Build

1. TypeScript compilation (`tsc -b`)
2. Vite bundle optimization
3. Output to `dist/` directory
4. Code splitting and tree shaking
5. Asset optimization and minification

### Preview Mode

Serves production build locally for testing before deployment.
