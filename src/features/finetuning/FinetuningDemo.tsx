'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  IconButton,
} from '@mui/material';
import { FinetuningJob } from '@/types';
import { mockFinetuningJobs, createMockJob } from '@/lib/mockData/mockFinetuningData';
import TuneIcon from '@mui/icons-material/Tune';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const models = ['gpt-3.5-turbo', 'gpt-4', 'llama-2-7b', 'llama-2-13b', 'mistral-7b', 'claude-3'];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'success';
    case 'training':
      return 'info';
    case 'failed':
      return 'error';
    default:
      return 'default';
  }
};

export default function FinetuningDemo() {
  const [jobs, setJobs] = useState<FinetuningJob[]>(mockFinetuningJobs);
  const [openDialog, setOpenDialog] = useState(false);
  const [newJobName, setNewJobName] = useState('');
  const [selectedModel, setSelectedModel] = useState('gpt-3.5-turbo');

  const handleCreateJob = () => {
    if (newJobName) {
      const newJob = createMockJob(newJobName, selectedModel);
      setJobs([newJob, ...jobs]);
      setNewJobName('');
      setSelectedModel('gpt-3.5-turbo');
      setOpenDialog(false);
    }
  };

  const handleDeleteJob = (jobId: string) => {
    setJobs(jobs.filter((job) => job.id !== jobId));
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Fine-tuning
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Manage and track fine-tuning jobs for custom models
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpenDialog(true)}
        >
          New Job
        </Button>
      </Box>

      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid size={{ xs: 12, md: 6 }} key={job.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Box>
                    <Typography variant="h6">{job.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Model: {job.model}
                    </Typography>
                  </Box>
                  <Box>
                    <Chip
                      label={job.status}
                      color={getStatusColor(job.status) as any}
                      size="small"
                      sx={{ mb: 1 }}
                    />
                    <IconButton
                      size="small"
                      onClick={() => handleDeleteJob(job.id)}
                      color="error"
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Progress</Typography>
                    <Typography variant="body2">{job.progress}%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={job.progress} />
                </Box>
                <Typography variant="caption" color="text.secondary">
                  Created: {new Date(job.createdAt).toLocaleString()}
                </Typography>
                {job.completedAt && (
                  <Typography variant="caption" color="text.secondary" display="block">
                    Completed: {new Date(job.completedAt).toLocaleString()}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Create Fine-tuning Job</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Job Name"
            value={newJobName}
            onChange={(e) => setNewJobName(e.target.value)}
            sx={{ mb: 3, mt: 1 }}
          />
          <TextField
            fullWidth
            select
            label="Model"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
          >
            {models.map((model) => (
              <MenuItem key={model} value={model}>
                {model}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button
            onClick={handleCreateJob}
            variant="contained"
            disabled={!newJobName}
          >
            Create Job
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
