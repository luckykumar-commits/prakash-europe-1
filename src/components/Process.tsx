import { motion } from 'motion/react';
import { AnimatedHeading } from './ui/MotionPrimitives';
import { easeSmooth, viewportOnce } from '../lib/motion';

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Share Requirements",
      desc: "Send artwork, material needs (e.g., eco-friendly) & timeline."
    },
    {
      num: "02",
      title: "Quote & MOQ Check",
      desc: "Clear pricing in 24H with low MOQs and free samples."
    },
    {
      num: "03",
      title: "Compliance & Proofs",
      desc: "Sign-off on EU-compliant digital and physical proofs."
    },
    {
      num: "04",
      title: "ISO Production",
      desc: "Manufactured under strict ISO 9001:2015 QC standards."
    },
    {
      num: "05",
      title: "Delivered DDP",
      desc: "Customs handled. 10-18 days direct to your warehouse."
    },
    {
      num: "06",
      title: "Scale Seamlessly",
      desc: "Zero minimums on repeat orders. Dedicated EU support."
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-light-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <AnimatedHeading as="h2" className="text-[10px] uppercase font-bold text-primary tracking-[0.2em] mb-3">
            Simple Process
          </AnimatedHeading>
          <AnimatedHeading as="h3" delay={0.1} className="text-3xl md:text-5xl font-extrabold text-charcoal leading-tight tracking-tight">
            From Quote to Your Warehouse <br className="hidden md:block" />
            in 6 Simple Steps
          </AnimatedHeading>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-orange-100 via-primary to-orange-100 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center text-center group cursor-pointer"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: easeSmooth }}
                viewport={viewportOnce}
                whileHover={{ y: -6 }}
              >
                <motion.div
                  className="w-24 h-24 rounded-full bg-white border-4 border-primary group-hover:bg-primary flex items-center justify-center mb-6 shadow-sm group-hover:shadow-xl transition-all duration-300 relative z-10"
                  whileHover={{ scale: 1.12, rotate: [0, -4, 4, 0] }}
                  transition={{ type: 'spring', stiffness: 300, damping: 14 }}
                >
                  <span className="text-3xl font-extrabold text-primary group-hover:text-white transition-colors duration-300">
                    {step.num}
                  </span>
                </motion.div>
                <h4 className="text-lg font-bold text-charcoal group-hover:text-primary mb-2 transition-colors duration-300">
                  {step.title}
                </h4>
                <p className="text-dark-gray text-sm">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
