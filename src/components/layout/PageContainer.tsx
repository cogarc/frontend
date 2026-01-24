'use client';

import React from 'react';
import { Box, Container } from '@mui/material';

interface PageContainerProps {
  children: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { md: `calc(100% - 240px)` },
        mt: { xs: 7, md: 8 },
        ml: { md: '240px' },
        minHeight: 'calc(100vh - 64px)',
      }}
    >
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
}
