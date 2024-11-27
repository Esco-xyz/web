'use client';

import { motion } from 'framer-motion';
import { Bitcoin, CreditCard, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';

const PAYMENT_METHODS = {
  bitcoin: {
    icon: Bitcoin,
    name: 'Bitcoin',
    description: 'Pay with BTC',
  },
  litecoin: {
    icon: Wallet,
    name: 'Litecoin',
    description: 'Pay with LTC',
  },
  paypal: {
    icon: CreditCard,
    name: 'PayPal',
    description: 'Friends & Family',
  },
} as const;

type PaymentMethod = keyof typeof PAYMENT_METHODS;

interface PaymentMethodCardProps {
  method: PaymentMethod;
  selected: boolean;
  onSelect: () => void;
}

export function PaymentMethodCard({ method, selected, onSelect }: PaymentMethodCardProps) {
  const { icon: Icon, name, description } = PAYMENT_METHODS[method];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={onSelect}
      className={cn(
        "relative p-4 rounded-lg cursor-pointer transition-all duration-200",
        "backdrop-blur-sm bg-card/30 border border-border/50",
        selected && "border-blue-500 bg-blue-500/5"
      )}
    >
      <motion.div
        initial={false}
        animate={{
          scale: selected ? 1.1 : 1,
          opacity: selected ? 1 : 0.7,
        }}
        className="flex items-center gap-3"
      >
        <div className={cn(
          "p-2 rounded-full",
          selected ? "bg-blue-500 text-white" : "bg-secondary"
        )}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </motion.div>

      {selected && (
        <motion.div
          layoutId="spotlight"
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 rounded-lg pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );
}