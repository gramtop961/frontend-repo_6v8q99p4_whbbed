import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-inter text-white">
      {/* Simple top bar */}
      <header className="fixed inset-x-0 top-0 z-20 border-b border-white/5 bg-black/30 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="text-sm font-medium tracking-tight text-neutral-200">Agentic Revenue Layer</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-neutral-300 sm:flex">
            <a href="#learn-more" className="hover:text-emerald-400">Features</a>
            <a href="#get-started" className="hover:text-emerald-400">Get started</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <HowItWorks />
      </main>

      <Footer />
    </div>
  );
}

export default App;
