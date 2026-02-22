'use client';

import React, { useState, useLayoutEffect } from 'react';
import Script from 'next/script';
import { getConsent, setConsent, type ConsentStatus } from '@/lib/consent';
import ConsentBanner from './ConsentBanner';

const GA_MEASUREMENT_ID = 'G-6HQGE0R8RS';

export default function ConsentGate() {
  const [consent, setConsentState] = useState<ConsentStatus | null>(null);

  useLayoutEffect(() => {
    const stored = getConsent();
    setConsentState(stored === 'granted' ? 'granted' : stored === 'denied' ? 'denied' : 'denied');
  }, []);

  const handleAccept = () => {
    setConsent('granted');
    setConsentState('granted');
  };

  const handleDecline = () => {
    setConsent('denied');
    setConsentState('denied');
  };

  if (consent === 'granted') {
    return (
      <>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </>
    );
  }

  return <ConsentBanner onAccept={handleAccept} onDecline={handleDecline} />;
}
