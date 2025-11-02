import React from 'react';
import { Database, Shield, Code2, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Zap,
    title: 'Agentic Contribution',
    desc: 'Agents coordinate, contribute, and accrue value programmatically across your ecosystem.',
  },
  {
    icon: Database,
    title: 'Composable Data Layer',
    desc: 'Unified, queryable data surfaces that connect apps, creators, and protocols for new revenue flows.',
  },
  {
    icon: Code2,
    title: 'x402 + ERC-8004',
    desc: 'Native support for emergent monetization and attribution standards built into your stack.',
  },
  {
    icon: Shield,
    title: 'On Base',
    desc: 'Secure, low-cost, and hyper-scalable on Base L2 — optimized for builders and communities.',
  },
];

const Features = () => {
  return (
    <section id="learn-more" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_10%_20%,rgba(34,197,94,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Why it works</h2>
          <p className="mt-3 text-neutral-300">
            Turn community energy into sustainable rails for value creation with primitives designed for agents and people.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-neutral-900/70 to-neutral-950 p-6 backdrop-blur"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-400 ring-1 ring-emerald-500/20">
                  <f.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">{f.title}</h3>
                  <p className="mt-1 text-sm text-neutral-300">{f.desc}</p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{ background: 'radial-gradient(400px 200px at 80% 0%, rgba(34,197,94,0.10), transparent)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
