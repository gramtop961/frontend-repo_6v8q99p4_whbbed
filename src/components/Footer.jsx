import React from 'react';
import { Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-950 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="text-lg font-semibold tracking-tight">Agentic Revenue Layer</div>
          <p className="mt-1 text-sm text-neutral-400">Built with x402 & ERC-8004 on Base</p>
        </div>
        <div className="flex items-center gap-3 text-neutral-300">
          <a href="#" aria-label="Twitter" className="rounded-md p-2 hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" aria-label="GitHub" className="rounded-md p-2 hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
