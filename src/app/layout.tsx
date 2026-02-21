import type { Metadata } from "next";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/theme';
import AppBar from '@/components/layout/AppBar';
import Footer from '@/components/layout/Footer';
import { Box } from '@mui/material';
import "./globals.css";
import Script from "next/script";

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
      <head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-6HQGE0R8RS"/>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6HQGE0R8RS');
        `}
      </Script>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AppBar />
            {children}
            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
