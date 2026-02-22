import type { Metadata } from "next";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/theme';
import AppBar from '@/components/layout/AppBar';
import Footer from '@/components/layout/Footer';
import ConsentGate from '@/components/consent/ConsentGate';
import { Box } from '@mui/material';
import "./globals.css";

export const metadata: Metadata = {
  title: "CogArc - Cognitive Architecture Showcase",
  description: "Showcasing advancements in cognitive architectures with generative AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AppBar />
            {children}
            <Footer />
          </Box>
          <ConsentGate />
        </ThemeProvider>
      </body>
    </html>
  );
}
