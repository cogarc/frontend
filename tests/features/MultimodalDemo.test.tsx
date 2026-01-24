import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MultimodalDemo from '@/features/multimodal/MultimodalDemo';

describe('MultimodalDemo', () => {
  it('renders the component', () => {
    render(<MultimodalDemo />);
    expect(screen.getByText(/Multi-modal Demos/i)).toBeInTheDocument();
  });

  it('allows switching between tabs', () => {
    render(<MultimodalDemo />);
    const imageTab = screen.getByText(/Image Generation/i);
    fireEvent.click(imageTab);
    expect(screen.getByPlaceholderText(/futuristic cityscape/i)).toBeInTheDocument();
  });

  it('generates text response when input is provided', async () => {
    render(<MultimodalDemo />);
    const input = screen.getByPlaceholderText(/Write a short story/i);
    fireEvent.change(input, { target: { value: 'Test prompt' } });
    
    const generateButton = screen.getByText(/Generate Text/i);
    fireEvent.click(generateButton);

    await waitFor(() => {
      expect(screen.getByText(/Generated response for/i)).toBeInTheDocument();
    });
  });
});
