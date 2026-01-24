// Multi-modal types
export interface MultimodalRequest {
  type: 'text' | 'image' | 'audio';
  input: string | File;
  outputType?: 'text' | 'image' | 'audio';
}

export interface MultimodalResponse {
  id: string;
  type: 'text' | 'image' | 'audio';
  output: string;
  timestamp: string;
}

// Agentic systems types
export interface Agent {
  id: string;
  name: string;
  type: 'single' | 'multi';
  status: 'idle' | 'running' | 'completed' | 'error';
  tools: string[];
}

export interface AgentWorkflow {
  id: string;
  name: string;
  agents: Agent[];
  status: 'pending' | 'running' | 'completed' | 'failed';
  createdAt: string;
}

// Fine-tuning types
export interface FinetuningJob {
  id: string;
  name: string;
  model: string;
  status: 'pending' | 'training' | 'completed' | 'failed';
  progress: number;
  createdAt: string;
  completedAt?: string;
}

// RAG types
export interface Document {
  id: string;
  title: string;
  content: string;
  uploadedAt: string;
  chunks?: DocumentChunk[];
}

export interface DocumentChunk {
  id: string;
  documentId: string;
  content: string;
  embedding?: number[];
}

export interface RAGQuery {
  id: string;
  query: string;
  results: RAGResult[];
  timestamp: string;
}

export interface RAGResult {
  documentId: string;
  chunkId: string;
  content: string;
  score: number;
}

// Explainability types
export interface Explanation {
  id: string;
  model: string;
  input: string;
  output: string;
  features: FeatureImportance[];
  attention?: AttentionMap;
}

export interface FeatureImportance {
  feature: string;
  importance: number;
}

export interface AttentionMap {
  tokens: string[];
  weights: number[][];
}

// Collaboration types
export interface CollaborationSession {
  id: string;
  userId: string;
  messages: Message[];
  status: 'active' | 'completed';
  createdAt: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  feedback?: 'positive' | 'negative' | 'neutral';
}
