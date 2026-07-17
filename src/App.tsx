/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Clients } from './components/Clients';
import { WhyUs } from './components/WhyUs';
import { ProblemSolution } from './components/ProblemSolution';
import { Categories } from './components/Categories';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { QuoteSection } from './components/QuoteSection';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Clients />
        <WhyUs />
        <ProblemSolution />
        <Categories />
        <Process />
        <Gallery />
        <Testimonials />
        <QuoteSection />
      </main>
      <Footer />

      <motion.a
        href="https://wa.me/919311672302"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center gap-2 group"
        whileHover={{ scale: 1.1, boxShadow: '0 12px 32px rgba(37,211,102,0.45)' }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 280 }}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium pr-0 group-hover:pr-2">
          Chat with us
        </span>
      </motion.a>
    </div>
  );
}
