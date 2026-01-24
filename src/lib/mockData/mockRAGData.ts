import { Document, RAGQuery, RAGResult } from '@/types';

export const mockDocuments: Document[] = [
  {
    id: 'doc-1',
    title: 'Introduction to Cognitive Architectures',
    content: 'Cognitive architectures are computational frameworks that aim to model the structure and processes of human cognition. They provide a foundation for building intelligent systems that can reason, learn, and adapt.',
    uploadedAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 'doc-2',
    title: 'Generative AI and Large Language Models',
    content: 'Large language models have revolutionized the field of artificial intelligence. These models, trained on vast amounts of text data, can generate human-like text, answer questions, and perform various language tasks.',
    uploadedAt: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: 'doc-3',
    title: 'Retrieval-Augmented Generation',
    content: 'RAG combines the power of retrieval systems with generative models. By retrieving relevant information from a knowledge base before generating responses, RAG systems can provide more accurate and contextually relevant answers.',
    uploadedAt: new Date(Date.now() - 259200000).toISOString(),
  },
];

export const mockRAGQueries: RAGQuery[] = [
  {
    id: 'query-1',
    query: 'What are cognitive architectures?',
    results: [
      {
        documentId: 'doc-1',
        chunkId: 'chunk-1',
        content: 'Cognitive architectures are computational frameworks that aim to model the structure and processes of human cognition.',
        score: 0.95,
      },
    ],
    timestamp: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: 'query-2',
    query: 'How does RAG work?',
    results: [
      {
        documentId: 'doc-3',
        chunkId: 'chunk-3',
        content: 'RAG combines the power of retrieval systems with generative models. By retrieving relevant information from a knowledge base before generating responses...',
        score: 0.92,
      },
    ],
    timestamp: new Date(Date.now() - 7200000).toISOString(),
  },
];

export const searchDocuments = (query: string): RAGResult[] => {
  const results: RAGResult[] = [];
  const queryLower = query.toLowerCase();
  
  mockDocuments.forEach(doc => {
    if (doc.content.toLowerCase().includes(queryLower)) {
      results.push({
        documentId: doc.id,
        chunkId: `chunk-${doc.id}`,
        content: doc.content,
        score: 0.85 + Math.random() * 0.1,
      });
    }
  });
  
  return results.sort((a, b) => b.score - a.score);
};

export const createRAGQuery = (query: string): RAGQuery => {
  const results = searchDocuments(query);
  return {
    id: `query-${Date.now()}`,
    query,
    results,
    timestamp: new Date().toISOString(),
  };
};
