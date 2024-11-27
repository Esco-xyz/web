'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { HeroSection } from '@/components/ui/hero-section';
import { FeatureSection } from '@/components/ui/feature-section';
import { PaymentSection } from '@/components/ui/payment/payment-section';
import { LoadingScreen } from '@/components/ui/loading-screen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      <HeroSection />
      <FeatureSection />
      <PaymentSection />
    </main>
  );
}