import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import { AnimatedCard, AnimatedHeading } from './ui/MotionPrimitives';
import { easeSmooth, viewportOnce } from '../lib/motion';

export function ProblemSolution() {
  const points = [
    {
      problem: "Opaque Asian supply chains with hidden customs fees",
      solution: "100% transparent DDP shipping — customs and delivery handled"
    },
    {
      problem: "High minimum order quantities (MOQs) tying up cash",
      solution: "Low initial MOQs and absolutely no minimums on repeat orders"
    },
    {
      problem: "Unpredictable lead times causing production delays",
      solution: "Guaranteed 10-18 day delivery to your EU warehouse"
    },
    {
      problem: "Lack of certified sustainable and eco-friendly materials",
      solution: "Extensive FSC® certified and compostable label options"
    },
    {
      problem: "Inconsistent quality failing strict EU compliance",
      solution: "ISO 9001:2015 certified production with export-grade QC"
    }
  ];

  return (
    <section className="py-24 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedHeading as="h2" className="text-[10px] uppercase font-bold text-primary tracking-[0.2em] mb-3">
            The Problem We Solve
          </AnimatedHeading>
          <AnimatedHeading as="h3" delay={0.08} className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
            Your Current Label Supplier Is Costing You More Than You Think
          </AnimatedHeading>
          <AnimatedHeading as="p" delay={0.16} className="text-gray-400 text-lg">
            Most European brands are overpaying for labels - or compromising on quality because the alternative seems risky. It isn't.
          </AnimatedHeading>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <AnimatedCard
              className="bg-[#2A2A2A] rounded-3xl p-8 border border-gray-700"
              whileHover={{ y: -6, scale: 1.01, boxShadow: '0 24px 48px rgba(0,0,0,0.35)' }}
            >
              <h4 className="text-xl font-bold mb-8 text-gray-300 border-b border-gray-700 pb-4">
                The Problem You're Facing
              </h4>
              <ul className="space-y-6">
                {points.map((p, i) => (
                  <motion.li
                    key={i}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4, ease: easeSmooth }}
                    viewport={viewportOnce}
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5 text-center font-bold">X</div>
                    <span className="text-gray-300">{p.problem}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedCard>

            <AnimatedCard
              delay={0.12}
              className="bg-white rounded-3xl p-8 border border-light-border text-charcoal shadow-2xl relative"
              whileHover={{ y: -6, scale: 1.01, boxShadow: '0 32px 64px rgba(0,0,0,0.18)' }}
            >
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.15, rotate: 12 }}
                transition={{ type: 'spring', stiffness: 320 }}
              >
                <CheckCircle className="w-6 h-6 text-white" />
              </motion.div>
              <h4 className="text-xl font-bold mb-8 text-primary border-b border-light-border pb-4">
                The Prakash Labels Solution
              </h4>
              <ul className="space-y-6">
                {points.map((p, i) => (
                  <motion.li
                    key={i}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4, ease: easeSmooth }}
                    viewport={viewportOnce}
                    whileHover={{ x: 4 }}
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal font-medium">{p.solution}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
}
