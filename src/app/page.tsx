import PageContainer from '@/components/layout/PageContainer';
import { Typography, Grid, Card, CardContent, CardActions, Button, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HandshakeIcon from '@mui/icons-material/Handshake';

const features = [
  {
    title: 'Multi-modal Demos',
    description: 'Explore text, image, and audio generation capabilities',
    icon: <TextFieldsIcon sx={{ fontSize: 40 }} />,
    path: '/multimodal',
    color: '#1976d2',
  },
  {
    title: 'Agentic Systems',
    description: 'Discover autonomous AI agents and multi-agent workflows',
    icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
    path: '/agentic',
    color: '#9c27b0',
  },
  {
    title: 'Fine-tuning',
    description: 'Manage and track fine-tuning jobs for custom models',
    icon: <TuneIcon sx={{ fontSize: 40 }} />,
    path: '/finetuning',
    color: '#ed6c02',
  },
  {
    title: 'RAG',
    description: 'Retrieval-Augmented Generation with document search',
    icon: <SearchIcon sx={{ fontSize: 40 }} />,
    path: '/rag',
    color: '#2e7d32',
  },
  {
    title: 'Explainability',
    description: 'Understand model decisions with visual explanations',
    icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
    path: '/explainability',
    color: '#d32f2f',
  },
  {
    title: 'Human-AI Collaboration',
    description: 'Interactive interfaces for collaborative AI interactions',
    icon: <HandshakeIcon sx={{ fontSize: 40 }} />,
    path: '/collaboration',
    color: '#0288d1',
  },
];

export default function Home() {
  return (
    <PageContainer>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
          Welcome to CogArc
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Cognitive Architecture Showcase - Exploring the Future of Generative AI
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          This platform demonstrates advancements in cognitive architectures across six key domains:
          multi-modal AI, agentic systems, fine-tuning, retrieval-augmented generation, explainability,
          and human-AI collaboration.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {features.map((feature) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={feature.title}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ color: feature.color, mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h5" component="h2" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={feature.path} sx={{ color: feature.color }}>
                  Explore
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
}
