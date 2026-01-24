'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { Agent, AgentWorkflow } from '@/types';
import { mockAgents, mockWorkflows, createMockWorkflow } from '@/lib/mockData/mockAgenticData';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'success';
    case 'running':
      return 'info';
    case 'error':
      return 'error';
    default:
      return 'default';
  }
};

export default function AgenticSystems() {
  const [workflows, setWorkflows] = useState<AgentWorkflow[]>(mockWorkflows);
  const [agents] = useState<Agent[]>(mockAgents);
  const [openDialog, setOpenDialog] = useState(false);
  const [newWorkflowName, setNewWorkflowName] = useState('');
  const [selectedAgents, setSelectedAgents] = useState<string[]>([]);

  const handleCreateWorkflow = () => {
    if (newWorkflowName && selectedAgents.length > 0) {
      const newWorkflow = createMockWorkflow(newWorkflowName, selectedAgents);
      setWorkflows([newWorkflow, ...workflows]);
      setNewWorkflowName('');
      setSelectedAgents([]);
      setOpenDialog(false);
    }
  };

  const toggleAgentSelection = (agentId: string) => {
    setSelectedAgents((prev) =>
      prev.includes(agentId) ? prev.filter((id) => id !== agentId) : [...prev, agentId]
    );
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Agentic AI Systems
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Manage autonomous AI agents and multi-agent workflows
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpenDialog(true)}
        >
          New Workflow
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {agents.map((agent) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={agent.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <SmartToyIcon sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="h6">{agent.name}</Typography>
                </Box>
                <Chip
                  label={agent.status}
                  color={getStatusColor(agent.status) as any}
                  size="small"
                  sx={{ mb: 2 }}
                />
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Type: {agent.type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tools: {agent.tools.join(', ')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" gutterBottom>
        Workflows
      </Typography>
      <Grid container spacing={2}>
        {workflows.map((workflow) => (
          <Grid size={{ xs: 12, md: 6 }} key={workflow.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h6">{workflow.name}</Typography>
                  <Chip
                    label={workflow.status}
                    color={getStatusColor(workflow.status) as any}
                    size="small"
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Agents: {workflow.agents.length}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Created: {new Date(workflow.createdAt).toLocaleString()}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button
                    size="small"
                    startIcon={<PlayArrowIcon />}
                    variant="outlined"
                    disabled={workflow.status === 'running'}
                  >
                    Run
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Create New Workflow</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Workflow Name"
            value={newWorkflowName}
            onChange={(e) => setNewWorkflowName(e.target.value)}
            sx={{ mb: 3, mt: 1 }}
          />
          <Typography variant="subtitle2" gutterBottom>
            Select Agents
          </Typography>
          <List>
            {agents.map((agent) => (
              <ListItem key={agent.id} disablePadding>
                <ListItemButton onClick={() => toggleAgentSelection(agent.id)}>
                  <ListItemIcon>
                    {selectedAgents.includes(agent.id) ? (
                      <CheckCircleIcon color="primary" />
                    ) : (
                      <RadioButtonUncheckedIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={agent.name} secondary={agent.type} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button
            onClick={handleCreateWorkflow}
            variant="contained"
            disabled={!newWorkflowName || selectedAgents.length === 0}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
