'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  Paper,
  Divider,
  LinearProgress,
} from '@mui/material';
import { Explanation } from '@/types';
import { mockExplanations, generateExplanation } from '@/lib/mockData/mockExplainabilityData';
import PsychologyIcon from '@mui/icons-material/Psychology';

export default function ExplainabilityView() {
  const [explanations, setExplanations] = useState<Explanation[]>(mockExplanations);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [model, setModel] = useState('gpt-4');

  const handleGenerateExplanation = () => {
    if (input && output) {
      const explanation = generateExplanation(model, input, output);
      setExplanations([explanation, ...explanations]);
      setInput('');
      setOutput('');
    }
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Model Explainability
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Understand model decisions with feature importance and attention visualizations.
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Generate Explanation
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              select
              SelectProps={{ native: true }}
              sx={{ mb: 2 }}
            >
              <option value="gpt-4">GPT-4</option>
              <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
              <option value="llama-2-7b">Llama-2-7B</option>
              <option value="mistral-7b">Mistral-7B</option>
            </TextField>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter model input"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Output"
              value={output}
              onChange={(e) => setOutput(e.target.value)}
              placeholder="Enter model output"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Button
              variant="contained"
              onClick={handleGenerateExplanation}
              disabled={!input || !output}
            >
              Generate Explanation
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Typography variant="h6" gutterBottom>
        Explanations
      </Typography>
      <Grid container spacing={3}>
        {explanations.map((explanation) => {
          return (
            <Grid size={{ xs: 12 }} key={explanation.id}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PsychologyIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="h6">{explanation.model}</Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Input:
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      {explanation.input}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Output:
                    </Typography>
                    <Typography variant="body1">
                      {explanation.output}
                    </Typography>
                  </Box>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="subtitle2" gutterBottom>
                    Feature Importance
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {explanation.features.slice(0, 10).map((feature, index) => (
                      <Box key={index} sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                          <Typography variant="body2">{feature.feature}</Typography>
                          <Typography variant="body2" fontWeight="bold">
                            {(feature.importance * 100).toFixed(1)}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={feature.importance * 100}
                          sx={{ height: 8, borderRadius: 4 }}
                        />
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
