'use client';

import { motion } from 'framer-motion';
import { Battery, Cpu, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';

const features = [
  {
    icon: Battery,
    title: 'Optimized Power',
    description: 'Advanced algorithms for maximum efficiency and performance',
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Enterprise-grade security with end-to-end encryption',
  },
  {
    icon: Cpu,
    title: 'Smart Processing',
    description: 'AI-powered optimization for real-time adjustments',
  },
];

export function FeatureSection() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the next generation of power optimization with our cutting-edge features
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <feature.icon className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Add more feature details here */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}