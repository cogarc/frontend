'use client';

import React, { useRef, useEffect } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';

export interface ConsentBannerProps {
  onAccept: () => void;
  onDecline: () => void;
}

export default function ConsentBanner({ onAccept, onDecline }: ConsentBannerProps) {
  const acceptRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    acceptRef.current?.focus();
  }, []);

  return (
    <Paper
      component="section"
      role="region"
      aria-label="Performance tracking consent"
      elevation={8}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1300,
        borderRadius: 0,
        px: 2,
        py: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: 'lg',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 2,
          justifyContent: { xs: 'center', sm: 'space-between' },
        }}
      >
        <Typography variant="body1" sx={{ flex: { xs: '1 1 100%', sm: '1 1 auto' }, minWidth: 0 }}>
          By continuing to use this site, you consent to performance and analytics tracking to help
          us improve the experience.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexShrink: 0 }}>
          <Button
            ref={acceptRef}
            variant="contained"
            color="primary"
            onClick={onAccept}
            aria-label="Accept performance tracking"
          >
            Accept
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={onDecline}
            aria-label="Decline performance tracking"
          >
            Decline
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
