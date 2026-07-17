import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, MessageCircle, Star } from 'lucide-react';
import heroImage from '../images/hero_printing_press_1784026585510.jpg';
import { AnimatedCard, AnimatedHeading } from './ui/MotionPrimitives';
import { buttonHover, buttonTap, easeSmooth, viewportOnce } from '../lib/motion';

export function Hero() {
  return (
    <section className="relative bg-off-white overflow-hidden border-b border-light-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-14 items-start">

          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: easeSmooth }}
            viewport={viewportOnce}
            className="flex flex-col gap-5 w-full"
          >
            <motion.div
              className="flex flex-wrap items-center gap-x-2.5 gap-y-1"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeSmooth }}
              viewport={viewportOnce}
            >
              <span className="text-sm font-extrabold text-charcoal leading-none">Excellent</span>
              <div className="flex items-center gap-0.5 bg-[#00B67A] px-1.5 py-1 rounded-lg">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-white fill-white" />
                ))}
              </div>
              <span className="text-xs text-dark-gray font-medium leading-none">
                4.9/5 based on EU Client Reviews
              </span>
            </motion.div>

            <div className="flex flex-col gap-3.5">
              <AnimatedHeading
                as="h1"
                className="text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] xl:text-[3.25rem] font-extrabold text-charcoal leading-[1.1] tracking-tight"
              >
                Fast, Affordable Label Printing That Enhances{' '}
                <span className="text-primary">Your Brand</span>
              </AnimatedHeading>
              <AnimatedHeading as="p" delay={0.12} className="text-[15px] sm:text-base text-dark-gray leading-relaxed">
                Export-grade manufacturing from India, delivered directly to your EU warehouse.
                Fully compliant, eco-friendly materials, and 10–18 day lead times.{' '}
                <strong className="text-charcoal font-semibold">Low MOQs with zero minimums on repeat orders.</strong>
              </AnimatedHeading>
            </div>

            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <AnimatedCard soft className="flex items-center gap-3 rounded-2xl border border-light-border bg-white px-4 py-3" delay={0.05}>
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <div className="min-w-0">
                    <p className="font-bold text-sm text-charcoal leading-tight">FSC® &amp; ISO 9001</p>
                    <p className="text-xs text-dark-gray mt-0.5 leading-snug">Sustainable &amp; Certified</p>
                  </div>
                </AnimatedCard>

                <AnimatedCard soft className="flex items-center gap-3 rounded-2xl border border-light-border bg-white px-4 py-3" delay={0.12}>
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <div className="min-w-0">
                    <p className="font-bold text-sm text-charcoal leading-tight">Clear Lead Times</p>
                    <p className="text-xs text-dark-gray mt-0.5 leading-snug">10–18 Days DDP Delivery</p>
                  </div>
                </AnimatedCard>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <motion.button
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded-2xl font-bold text-[15px] shadow-sm min-h-[48px] w-full"
                >
                  Get Your Quote <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-3.5 rounded-2xl font-bold text-[15px] shadow-sm min-h-[48px] w-full"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </motion.button>
              </div>
            </div>

            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-dark-gray pt-4 border-t border-light-border">
              {['Customs Handled', 'Free Samples', 'No Hidden Fees'].map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.4, ease: easeSmooth }}
                  viewport={viewportOnce}
                  whileHover={{ x: 2, color: '#F2601C' }}
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: easeSmooth }}
            viewport={viewportOnce}
            className="relative w-full lg:mt-1"
          >
            <motion.div
              whileHover={{ scale: 1.025, y: -4 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="rounded-3xl overflow-hidden border border-light-border shadow-lg bg-white cursor-pointer"
            >
              <img
                src={heroImage}
                alt="Label printing manufacturing process"
                className="w-full aspect-[4/3] object-cover object-center block"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 bg-white px-3.5 py-2.5 rounded-2xl shadow-md border border-light-border flex items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5, ease: easeSmooth }}
              viewport={viewportOnce}
              whileHover={{ y: -3, boxShadow: '0 12px 28px rgba(0,0,0,0.12)' }}
            >
              <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center shrink-0">
                <span className="text-primary font-bold text-base leading-none">24h</span>
              </div>
              <div className="min-w-0 pr-1">
                <p className="text-[10px] text-dark-gray font-semibold uppercase tracking-wider leading-none mb-1">
                  Fast Response
                </p>
                <p className="font-bold text-sm text-charcoal leading-snug whitespace-nowrap">
                  Free quote within 24 hrs
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
