# Phase 1: Next.js Frontend Setup with Mock Data

## Overview

This document describes the setup and structure of the CogArc frontend application built with Next.js, TypeScript, and Material-UI (MUI).

## Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with MUI theme
│   │   ├── page.tsx            # Homepage
│   │   ├── multimodal/         # Multi-modal demo page
│   │   ├── agentic/            # Agentic systems page
│   │   ├── finetuning/         # Fine-tuning page
│   │   ├── rag/                # RAG page
│   │   ├── explainability/     # Explainability page
│   │   └── collaboration/      # Collaboration page
│   ├── components/             # Reusable components
│   │   └── layout/             # Layout components (AppBar, Footer, PageContainer)
│   ├── features/               # Feature-based modules
│   │   ├── multimodal/
│   │   ├── agentic/
│   │   ├── finetuning/
│   │   ├── rag/
│   │   ├── explainability/
│   │   └── collaboration/
│   ├── lib/                    # Utilities and services
│   │   └── mockData/           # Mock data for all domain areas
│   ├── types/                  # TypeScript type definitions
│   └── theme/                  # MUI theme configuration
├── public/                     # Static assets
├── tests/                      # Test files
│   ├── components/             # Component tests
│   ├── features/               # Feature tests
│   └── e2e/                    # End-to-end tests
└── docs/                      # Documentation

```

## Key Technologies

- **Next.js 16+**: React framework with App Router
- **TypeScript**: Type-safe development
- **Material-UI (MUI) v5**: Component library and theming
- **Emotion**: CSS-in-JS styling (required by MUI)

## Component Documentation

### Layout Components

#### AppBar
- Responsive navigation bar with drawer for mobile
- Contains links to all 6 domain areas
- Fixed position at top of page

#### Footer
- Simple footer with copyright information
- Responsive design

#### PageContainer
- Wrapper component for page content
- Handles spacing and responsive margins
- Accounts for AppBar and Sidebar width

### Feature Components

#### MultimodalDemo
- Demonstrates text, image, and audio generation
- Tab-based interface for different modalities
- Mock data integration for responses

#### AgenticSystems
- Displays AI agents and workflows
- Create new workflows with multiple agents
- Status tracking for agents and workflows

#### FinetuningDemo
- Manage fine-tuning jobs
- Track training progress
- Create new fine-tuning jobs

#### RAGDemo
- Document search and retrieval interface
- Query input and results display
- Document management sidebar

#### ExplainabilityView
- Generate model explanations
- Feature importance visualization
- Input/output analysis

#### CollaborationInterface
- Chat-like interface for human-AI collaboration
- Session management
- Message feedback system

## Mock Data

All feature components use mock data located in `src/lib/mockData/`:

- `mockMultimodalData.ts`: Text, image, and audio responses
- `mockAgenticData.ts`: Agents and workflows
- `mockFinetuningData.ts`: Fine-tuning jobs
- `mockRAGData.ts`: Documents and queries
- `mockExplainabilityData.ts`: Model explanations
- `mockCollaborationData.ts`: Collaboration sessions and messages

## Development Workflow

1. **Start development server**: `npm run dev`
2. **Run tests**: `npm test`
3. **Run tests in watch mode**: `npm run test:watch`
4. **Generate coverage report**: `npm run test:coverage`
5. **Run E2E tests**: `npm run test:e2e`

## Testing

### Unit Tests
- Located in `tests/components/` and `tests/features/`
- Uses Jest and React Testing Library
- Target: 70%+ code coverage

### E2E Tests
- Located in `tests/e2e/`
- Uses Playwright
- Tests user flows across the application

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Run E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui
```

## Responsive Design

The application is fully responsive using MUI's breakpoint system:

- **xs**: 0px (mobile)
- **sm**: 600px (tablet)
- **md**: 900px (small desktop)
- **lg**: 1200px (desktop)
- **xl**: 1536px (large desktop)

Key responsive features:
- Collapsible navigation drawer on mobile
- Grid layouts that adapt to screen size
- Touch-friendly interactions
- Optimized typography for different screen sizes

## State Management

Currently using React's built-in state management (useState, useContext). For more complex state needs, consider:
- Zustand (lightweight)
- Redux Toolkit (for complex state)
- React Query (for server state)

## Next Steps

1. Connect to backend APIs (Phase 2)
2. Replace mock data with real API calls
3. Add authentication (optional)
4. Implement error handling
5. Add loading states
6. Optimize performance

## Troubleshooting

### Common Issues

1. **MUI styles not applying**: Ensure Emotion is properly configured
2. **TypeScript errors**: Run `npm run build` to check for type errors
3. **Tests failing**: Clear Jest cache with `npm test -- --clearCache`
4. **Port already in use**: Change port with `npm run dev -- -p 3001`

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Material-UI Documentation](https://mui.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Testing Library](https://testing-library.com/react)
- [Playwright Documentation](https://playwright.dev/)
