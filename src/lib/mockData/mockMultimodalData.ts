import { MultimodalResponse } from '@/types';

export const mockMultimodalResponses: MultimodalResponse[] = [
  {
    id: '1',
    type: 'text',
    output: 'This is a generated text response from the AI model. It demonstrates text generation capabilities.',
    timestamp: new Date().toISOString(),
  },
  {
    id: '2',
    type: 'image',
    output: 'https://via.placeholder.com/512x512?text=Generated+Image',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: '3',
    type: 'audio',
    output: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    timestamp: new Date(Date.now() - 7200000).toISOString(),
  },
];

export const generateMockTextResponse = (input: string): MultimodalResponse => ({
  id: Date.now().toString(),
  type: 'text',
  output: `Generated response for: "${input}". This is a mock response demonstrating text generation capabilities.`,
  timestamp: new Date().toISOString(),
});

export const generateMockImageResponse = (prompt: string): MultimodalResponse => ({
  id: Date.now().toString(),
  type: 'image',
  output: `https://via.placeholder.com/512x512?text=${encodeURIComponent(prompt)}`,
  timestamp: new Date().toISOString(),
});

export const generateMockAudioResponse = (text: string): MultimodalResponse => ({
  id: Date.now().toString(),
  type: 'audio',
  output: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${Math.floor(Math.random() * 10) + 1}.mp3`,
  timestamp: new Date().toISOString(),
});
