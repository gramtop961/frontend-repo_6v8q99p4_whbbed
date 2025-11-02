import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Link, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-neutral-950 text-white">
      {/* 3D Cover Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_10%,rgba(34,197,94,0.18),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-16 text-center md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-black/40 px-4 py-2 text-sm text-emerald-300 backdrop-blur"
        >
          <Bot className="h-4 w-4 text-emerald-400" />
          Agentic Builders on Base
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
        >
          Powering new revenue streams for creators and devs
          <span className="block bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent">
            through agentic contribution and a data layer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-base text-neutral-300 md:text-lg"
        >
          Built with x402 & ERC-8004 on Base — a modern, programmable substrate for value accrual across apps, agents, and communities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#get-started"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-black shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
          >
            <Rocket className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            Launch your agent
          </a>
          <a
            href="#learn-more"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-500/40 bg-black/40 px-5 py-3 font-medium text-emerald-200 backdrop-blur transition hover:border-emerald-400/60 hover:text-emerald-100"
          >
            <Link className="h-5 w-5" />
            Learn more
          </a>
        </motion.div>

        {/* Bottom hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 text-sm text-neutral-400"
        >
          Live on-chain primitives: x402 • ERC-8004 • Base L2
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
