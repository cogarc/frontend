# CogArc Frontend

A fully responsive Next.js application showcasing cognitive architectures with generative AI, built with TypeScript and Material-UI.

## Features

- **Multi-modal Demos**: Text, image, and audio generation
- **Agentic Systems**: Autonomous AI agents and workflows
- **Fine-tuning**: Model fine-tuning job management
- **RAG**: Retrieval-Augmented Generation with document search
- **Explainability**: Model decision explanations
- **Human-AI Collaboration**: Interactive collaboration interfaces

## Tech Stack

- **Next.js 16+** (App Router)
- **TypeScript**
- **Material-UI (MUI) v7**
- **Emotion** (CSS-in-JS)
- **Jest** + **React Testing Library** (Unit tests)
- **Playwright** (E2E tests)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

### Testing

```bash
# Unit tests
npm test

# Watch mode
npm run test:watch

# Coverage
npm run test:coverage

# E2E tests
npm run test:e2e
```

## Project Structure

```
frontend/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # Reusable components
│   ├── features/         # Feature modules
│   ├── lib/              # Utilities and mock data
│   ├── types/            # TypeScript types
│   └── theme/            # MUI theme
├── tests/                # Test files
└── docs/                 # Documentation
```

## Documentation

- [Phase 1 Setup Guide](docs/phase1-setup.md)
- [Vercel Deployment Guide](docs/vercel-deployment.md)

## Deployment

This application is configured for deployment on Vercel. See [docs/vercel-deployment.md](docs/vercel-deployment.md) for detailed instructions.

## License

Private - CogArc Organization
