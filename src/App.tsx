/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import Footer from './components/Footer';

// Lazy-load below-the-fold sections for faster initial render
const Solution = lazy(() => import('./components/sections/Solution'));
const Workflow = lazy(() => import('./components/sections/Workflow'));
const CreatorNetwork = lazy(() => import('./components/sections/CreatorNetwork'));
const CaseStudies = lazy(() => import('./components/sections/CaseStudies'));
const ApplicationForm = lazy(() => import('./components/sections/ApplicationForm'));

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent-mint selection:text-background overflow-x-hidden">
      {/* Global Background Noise/Texture — GPU-promoted to avoid repaint thrashing */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
        style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
      />

      <Navbar />

      <main>
        <Hero />
        <Problem />
        <Suspense fallback={<div className="min-h-[50vh]" />}>
          <Solution />
          <Workflow />
          <CreatorNetwork />
          <CaseStudies />
          <ApplicationForm />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
