import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { buttonHover, buttonTap } from '../lib/motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#industries', label: 'Industries', chevron: true },
    { href: '#capabilities', label: 'Capabilities' },
    { href: '#sustainability', label: 'Sustainability' },
    { href: '#why-us', label: 'Why Us' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-3' : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center">
        <div className="flex items-center gap-10">
          <motion.div
            className="flex flex-col cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <span className="text-2xl font-black tracking-tight text-charcoal">PRAKASH<span className="text-primary">LABELS</span></span>
            <span className="text-[9px] uppercase tracking-widest font-bold opacity-60">Premium Export Division</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-dark-gray">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="hover:text-primary flex items-center gap-1 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                whileHover={{ y: -1 }}
              >
                {link.label}
                {link.chevron && <ChevronDown className="w-4 h-4" />}
              </motion.a>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-dark-gray text-sm mr-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Quotes in 24h
          </div>
          <motion.button
            whileHover={buttonHover}
            whileTap={buttonTap}
            className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-2xl font-bold text-sm shadow-md"
          >
            Get Free Quote
          </motion.button>
        </div>

        <motion.button
          className="md:hidden p-2 text-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-light-border p-4 flex flex-col gap-2 overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-charcoal font-medium p-2 hover:bg-light-gray hover:text-primary rounded-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="bg-primary text-white px-4 py-3 rounded-2xl font-medium w-full mt-2"
            >
              Get Free Quote
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
