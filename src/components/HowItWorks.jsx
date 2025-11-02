import React from 'react';
import { Layers, Users, Link } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Users,
    title: 'Onboard creators & devs',
    desc: 'Define contribution surfaces — content, code, curation, or compute. Connect wallets and identities.',
  },
  {
    icon: Layers,
    title: 'Activate the data layer',
    desc: 'Stream usage and attribution into a unified, queryable substrate that agents can reason over.',
  },
  {
    icon: Link,
    title: 'Set revenue primitives',
    desc: 'Leverage x402 and ERC-8004 to route value to contributors automatically — on Base.',
  },
];

const HowItWorks = () => {
  return (
    <section id="get-started" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_90%_10%,rgba(34,197,94,0.07),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h2>
          <p className="mt-3 text-neutral-300">Three simple steps to unlock agent-native revenue.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-neutral-900/60 p-6 backdrop-blur-lg"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 ring-1 ring-emerald-500/20">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-300">{s.desc}</p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
