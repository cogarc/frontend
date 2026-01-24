'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Tabs,
  Tab,
  Paper,
  Chip,
} from '@mui/material';
import { MultimodalResponse } from '@/types';
import {
  mockMultimodalResponses,
  generateMockTextResponse,
  generateMockImageResponse,
  generateMockAudioResponse,
} from '@/lib/mockData/mockMultimodalData';
import ImageIcon from '@mui/icons-material/Image';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import AudioFileIcon from '@mui/icons-material/AudioFile';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function MultimodalDemo() {
  const [tabValue, setTabValue] = useState(0);
  const [input, setInput] = useState('');
  const [responses, setResponses] = useState<MultimodalResponse[]>(mockMultimodalResponses);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleGenerate = () => {
    if (!input.trim()) return;

    let newResponse: MultimodalResponse;
    if (tabValue === 0) {
      newResponse = generateMockTextResponse(input);
    } else if (tabValue === 1) {
      newResponse = generateMockImageResponse(input);
    } else {
      newResponse = generateMockAudioResponse(input);
    }

    setResponses([newResponse, ...responses]);
    setInput('');
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Multi-modal Demos
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Explore text, image, and audio generation capabilities using generative AI models.
      </Typography>

      <Paper sx={{ mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth">
          <Tab icon={<TextFieldsIcon />} label="Text Generation" />
          <Tab icon={<ImageIcon />} label="Image Generation" />
          <Tab icon={<AudioFileIcon />} label="Audio Generation" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Box>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Enter text prompt"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., Write a short story about AI..."
              sx={{ mb: 2 }}
            />
            <Button variant="contained" onClick={handleGenerate} disabled={!input.trim()}>
              Generate Text
            </Button>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Box>
            <TextField
              fullWidth
              label="Enter image prompt"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., A futuristic cityscape at sunset"
              sx={{ mb: 2 }}
            />
            <Button variant="contained" onClick={handleGenerate} disabled={!input.trim()}>
              Generate Image
            </Button>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Box>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Enter text for audio generation"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., Hello, this is a test of text-to-speech..."
              sx={{ mb: 2 }}
            />
            <Button variant="contained" onClick={handleGenerate} disabled={!input.trim()}>
              Generate Audio
            </Button>
          </Box>
        </TabPanel>
      </Paper>

      <Typography variant="h6" gutterBottom>
        Recent Responses
      </Typography>
      <Grid container spacing={2}>
        {responses.map((response) => (
          <Grid size={{ xs: 12, md: 6 }} key={response.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Chip label={response.type} color="primary" size="small" />
                  <Typography variant="caption" color="text.secondary">
                    {new Date(response.timestamp).toLocaleString()}
                  </Typography>
                </Box>
                {response.type === 'text' && (
                  <Typography variant="body1">{response.output}</Typography>
                )}
                {response.type === 'image' && (
                  <Box
                    component="img"
                    src={response.output}
                    alt="Generated"
                    sx={{ width: '100%', borderRadius: 1 }}
                  />
                )}
                {response.type === 'audio' && (
                  <Box>
                    <audio controls style={{ width: '100%' }}>
                      <source src={response.output} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
