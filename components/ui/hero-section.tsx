'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { Button } from './button';

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-grid-white/[0.02] bg-grid" />
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-8"
        >
          <Zap className="w-16 h-16 text-blue-400 animate-pulse" />
        </motion.div>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4 gradient-text"
        >
          Power Reimagined
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Unleash the future of power optimization with our revolutionary platform
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button 
            size="lg" 
            className="text-lg px-8 bg-gradient-to-r from-blue-500 via-orange-400 to-purple-500 hover:opacity-90"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
  );
}