'use client';

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="relative">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="w-16 h-16"
        >
          <Loader2 className="w-16 h-16 text-primary animate-spin" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
        >
          <span className="text-sm text-muted-foreground">Loading...</span>
        </motion.div>
      </div>
    </motion.div>
  );
}