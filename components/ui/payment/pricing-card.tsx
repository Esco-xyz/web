'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../button';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  onSelect: () => void;
}

export function PricingCard({ title, price, features, isPopular, onSelect }: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "relative p-6 rounded-xl backdrop-blur-sm bg-card/30 border border-border/50",
        "transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/10",
        isPopular && "border-blue-500/50"
      )}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-500 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="text-3xl font-bold gradient-text mb-1">{price}</div>
        <p className="text-muted-foreground">per month</p>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-2"
          >
            <Check className="w-5 h-5 text-blue-500" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>

      <Button 
        onClick={onSelect}
        className={cn(
          "w-full",
          isPopular ? "bg-blue-500 hover:bg-blue-600" : "bg-secondary hover:bg-secondary/80"
        )}
      >
        Get Started
      </Button>
    </motion.div>
  );
}