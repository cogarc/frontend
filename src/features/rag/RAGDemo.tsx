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
  Chip,
  List,
  ListItem,
  ListItemText,
  Paper,
  Divider,
} from '@mui/material';
import { Document, RAGQuery } from '@/types';
import {
  mockDocuments,
  mockRAGQueries,
  createRAGQuery,
} from '@/lib/mockData/mockRAGData';
import SearchIcon from '@mui/icons-material/Search';
import UploadFileIcon from '@mui/icons-material/UploadFile';

export default function RAGDemo() {
  const [documents] = useState<Document[]>(mockDocuments);
  const [queries, setQueries] = useState<RAGQuery[]>(mockRAGQueries);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const newQuery = createRAGQuery(searchQuery);
      setQueries([newQuery, ...queries]);
      setSearchQuery('');
    }
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Retrieval-Augmented Generation (RAG)
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Search documents and generate contextually relevant responses using RAG.
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Search Documents
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <TextField
                fullWidth
                label="Enter your query"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="e.g., What are cognitive architectures?"
              />
              <Button
                variant="contained"
                startIcon={<SearchIcon />}
                onClick={handleSearch}
                disabled={!searchQuery.trim()}
                sx={{ minWidth: 120 }}
              >
                Search
              </Button>
            </Box>
          </Paper>

          <Typography variant="h6" gutterBottom>
            Recent Queries
          </Typography>
          {queries.map((query) => (
            <Card key={query.id} sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {query.query}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
                  {new Date(query.timestamp).toLocaleString()}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle2" gutterBottom>
                  Results ({query.results.length})
                </Typography>
                {query.results.map((result, index) => (
                  <Card key={index} variant="outlined" sx={{ mb: 1, p: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Chip label={`Score: ${result.score.toFixed(2)}`} size="small" />
                      <Typography variant="caption" color="text.secondary">
                        Doc: {result.documentId}
                      </Typography>
                    </Box>
                    <Typography variant="body2">{result.content}</Typography>
                  </Card>
                ))}
              </CardContent>
            </Card>
          ))}
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">Documents</Typography>
              <Button
                size="small"
                startIcon={<UploadFileIcon />}
                variant="outlined"
              >
                Upload
              </Button>
            </Box>
            <List>
              {documents.map((doc) => (
                <ListItem key={doc.id} sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {doc.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {doc.content.substring(0, 100)}...
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
                    {new Date(doc.uploadedAt).toLocaleDateString()}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
