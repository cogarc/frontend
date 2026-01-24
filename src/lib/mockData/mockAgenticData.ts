import { Agent, AgentWorkflow } from '@/types';

export const mockAgents: Agent[] = [
  {
    id: 'agent-1',
    name: 'Research Agent',
    type: 'single',
    status: 'idle',
    tools: ['web_search', 'document_analysis'],
  },
  {
    id: 'agent-2',
    name: 'Code Generation Agent',
    type: 'single',
    status: 'running',
    tools: ['code_generation', 'code_review'],
  },
  {
    id: 'agent-3',
    name: 'Data Analysis Agent',
    type: 'single',
    status: 'completed',
    tools: ['data_processing', 'visualization'],
  },
];

export const mockWorkflows: AgentWorkflow[] = [
  {
    id: 'workflow-1',
    name: 'Research and Analysis Workflow',
    agents: [mockAgents[0], mockAgents[2]],
    status: 'completed',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 'workflow-2',
    name: 'Code Development Workflow',
    agents: [mockAgents[1]],
    status: 'running',
    createdAt: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: 'workflow-3',
    name: 'Multi-Agent Collaboration',
    agents: mockAgents,
    status: 'pending',
    createdAt: new Date().toISOString(),
  },
];

export const createMockWorkflow = (name: string, agentIds: string[]): AgentWorkflow => {
  const selectedAgents = mockAgents.filter(agent => agentIds.includes(agent.id));
  return {
    id: `workflow-${Date.now()}`,
    name,
    agents: selectedAgents,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };
};
