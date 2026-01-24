import React from 'react';
import { render, screen } from '@testing-library/react';
import AppBar from '@/components/layout/AppBar';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: () => '/',
}));

describe('AppBar', () => {
  it('renders the app title', () => {
    render(<AppBar />);
    expect(screen.getByText(/CogArc/i)).toBeInTheDocument();
  });

  it('renders navigation items', () => {
    render(<AppBar />);
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Multi-modal/i)).toBeInTheDocument();
    expect(screen.getByText(/Agentic Systems/i)).toBeInTheDocument();
  });
});
