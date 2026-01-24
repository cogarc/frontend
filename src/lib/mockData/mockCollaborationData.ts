import { CollaborationSession, Message } from '@/types';

export const mockSessions: CollaborationSession[] = [
  {
    id: 'session-1',
    userId: 'user-1',
    messages: [
      {
        id: 'msg-1',
        role: 'user',
        content: 'Can you help me understand how RAG works?',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
      },
      {
        id: 'msg-2',
        role: 'assistant',
        content: 'RAG (Retrieval-Augmented Generation) combines retrieval systems with generative models to provide more accurate answers by first retrieving relevant information.',
        timestamp: new Date(Date.now() - 3590000).toISOString(),
        feedback: 'positive',
      },
      {
        id: 'msg-3',
        role: 'user',
        content: 'Can you give me a more detailed explanation?',
        timestamp: new Date(Date.now() - 1800000).toISOString(),
      },
      {
        id: 'msg-4',
        role: 'assistant',
        content: 'Certainly! RAG works in two stages: 1) Retrieval: The system searches a knowledge base for relevant documents or chunks. 2) Generation: The retrieved context is used to augment the prompt, helping the model generate more accurate and contextually relevant responses.',
        timestamp: new Date(Date.now() - 1790000).toISOString(),
      },
    ],
    status: 'active',
    createdAt: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: 'session-2',
    userId: 'user-1',
    messages: [
      {
        id: 'msg-5',
        role: 'user',
        content: 'What are the benefits of fine-tuning?',
        timestamp: new Date(Date.now() - 86400000).toISOString(),
      },
      {
        id: 'msg-6',
        role: 'assistant',
        content: 'Fine-tuning allows you to adapt a pre-trained model to specific tasks or domains, improving performance on your particular use case while leveraging the general knowledge from pre-training.',
        timestamp: new Date(Date.now() - 86390000).toISOString(),
        feedback: 'positive',
      },
    ],
    status: 'completed',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
];

export const addMessageToSession = (
  sessionId: string,
  role: 'user' | 'assistant',
  content: string
): Message | null => {
  const session = mockSessions.find(s => s.id === sessionId);
  if (!session) return null;

  const message: Message = {
    id: `msg-${Date.now()}`,
    role,
    content,
    timestamp: new Date().toISOString(),
  };

  session.messages.push(message);
  return message;
};

export const createSession = (userId: string): CollaborationSession => {
  const session: CollaborationSession = {
    id: `session-${Date.now()}`,
    userId,
    messages: [],
    status: 'active',
    createdAt: new Date().toISOString(),
  };
  
  mockSessions.push(session);
  return session;
};
