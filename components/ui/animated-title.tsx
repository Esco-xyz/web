'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export function AnimatedTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-6 left-6 z-50 flex items-center gap-2"
    >
      <Zap className="w-6 h-6 text-blue-400" />
      <motion.h1 
        className="text-xl font-bold gradient-text"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        PlentifulPower
      </motion.h1>
    </motion.div>
  );
}