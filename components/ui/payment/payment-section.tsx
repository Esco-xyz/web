'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PricingCard } from './pricing-card';
import { PaymentMethodCard } from './payment-method-card';

const PRICING_PLANS = [
  {
    title: 'Starter',
    price: '$29',
    features: [
      'Basic power optimization',
      '24/7 monitoring',
      'Email support',
      'Monthly reports',
    ],
  },
  {
    title: 'Pro',
    price: '$79',
    features: [
      'Advanced optimization',
      'Real-time analytics',
      'Priority support',
      'Weekly reports',
      'Custom alerts',
    ],
    isPopular: true,
  },
  {
    title: 'Enterprise',
    price: '$199',
    features: [
      'Full optimization suite',
      'Dedicated support',
      'Daily reports',
      'API access',
      'Custom integration',
      'SLA guarantee',
    ],
  },
];

export function PaymentSection() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">Choose Your Plan</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your needs and power optimization goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              onSelect={() => setSelectedPlan(index)}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedPlan !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-md mx-auto"
            >
              <h3 className="text-xl font-semibold mb-4 text-center">
                Select Payment Method
              </h3>
              <div className="space-y-3">
                {['bitcoin', 'litecoin', 'paypal'].map((method) => (
                  <PaymentMethodCard
                    key={method}
                    method={method as any}
                    selected={selectedPaymentMethod === method}
                    onSelect={() => setSelectedPaymentMethod(method)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}