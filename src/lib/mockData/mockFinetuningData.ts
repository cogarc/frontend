import { FinetuningJob } from '@/types';

export const mockFinetuningJobs: FinetuningJob[] = [
  {
    id: 'job-1',
    name: 'GPT-3.5 Fine-tuning for Code',
    model: 'gpt-3.5-turbo',
    status: 'completed',
    progress: 100,
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    completedAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 'job-2',
    name: 'Llama-2 Fine-tuning for Q&A',
    model: 'llama-2-7b',
    status: 'training',
    progress: 65,
    createdAt: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: 'job-3',
    name: 'Mistral Fine-tuning for Summarization',
    model: 'mistral-7b',
    status: 'pending',
    progress: 0,
    createdAt: new Date().toISOString(),
  },
];

export const createMockJob = (name: string, model: string): FinetuningJob => ({
  id: `job-${Date.now()}`,
  name,
  model,
  status: 'pending',
  progress: 0,
  createdAt: new Date().toISOString(),
});

export const updateJobProgress = (jobId: string, progress: number): FinetuningJob | null => {
  const job = mockFinetuningJobs.find(j => j.id === jobId);
  if (!job) return null;
  
  const updatedJob = {
    ...job,
    progress: Math.min(100, Math.max(0, progress)),
    status: progress === 100 ? 'completed' as const : progress > 0 ? 'training' as const : 'pending' as const,
    completedAt: progress === 100 ? new Date().toISOString() : job.completedAt,
  };
  
  const index = mockFinetuningJobs.findIndex(j => j.id === jobId);
  if (index !== -1) {
    mockFinetuningJobs[index] = updatedJob;
  }
  
  return updatedJob;
};
