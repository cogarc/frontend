import { Explanation, FeatureImportance, AttentionMap } from '@/types';

export const mockExplanations: Explanation[] = [
  {
    id: 'exp-1',
    model: 'gpt-4',
    input: 'What is the capital of France?',
    output: 'The capital of France is Paris.',
    features: [
      { feature: 'capital', importance: 0.95 },
      { feature: 'France', importance: 0.90 },
      { feature: 'What', importance: 0.15 },
      { feature: 'is', importance: 0.10 },
      { feature: 'the', importance: 0.05 },
    ],
    attention: {
      tokens: ['What', 'is', 'the', 'capital', 'of', 'France', '?'],
      weights: [
        [0.1, 0.1, 0.1, 0.3, 0.1, 0.2, 0.1],
        [0.1, 0.1, 0.1, 0.3, 0.1, 0.2, 0.1],
        [0.1, 0.1, 0.1, 0.3, 0.1, 0.2, 0.1],
        [0.05, 0.05, 0.05, 0.4, 0.1, 0.25, 0.1],
        [0.1, 0.1, 0.1, 0.3, 0.1, 0.2, 0.1],
        [0.05, 0.05, 0.05, 0.25, 0.1, 0.4, 0.1],
        [0.1, 0.1, 0.1, 0.3, 0.1, 0.2, 0.1],
      ],
    },
  },
  {
    id: 'exp-2',
    model: 'llama-2-7b',
    input: 'Explain quantum computing',
    output: 'Quantum computing uses quantum mechanical phenomena to perform computations.',
    features: [
      { feature: 'quantum', importance: 0.98 },
      { feature: 'computing', importance: 0.92 },
      { feature: 'Explain', importance: 0.20 },
    ],
  },
];

export const generateExplanation = (model: string, input: string, output: string): Explanation => {
  const words = input.toLowerCase().split(/\s+/);
  const features: FeatureImportance[] = words.map((word, index) => ({
    feature: word,
    importance: 0.5 + (index % 3) * 0.15,
  }));

  return {
    id: `exp-${Date.now()}`,
    model,
    input,
    output,
    features: features.sort((a, b) => b.importance - a.importance),
  };
};
