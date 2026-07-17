import { Star, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AnimatedCard, AnimatedHeading } from './ui/MotionPrimitives';
import { buttonHover, buttonTap, easeSmooth } from '../lib/motion';

export function Testimonials() {
  const testimonials = [
    {
      name: "Rob",
      date: "6 days ago",
      title: "Excellent company",
      quote: "Excellent service. Great products. My go to company for labels."
    },
    {
      name: "Kevin Devlin",
      date: "9 July",
      title: "Excellent company to deal with. Would highly recommend them",
      quote: "Very customer friendly. Professional design team. Timeline exactly as promised. Pricing is very reasonable. Quality of labels is excellent. All in all a great company to deal with. Would highly recommend Fast Labels."
    },
    {
      name: "Marcus Klein",
      date: "14 Aug",
      title: "Cut our costs by 38%",
      quote: "We switched from a local German supplier to Prakash Labels. The quality is identical — if anything, the foil finish is sharper. Outstanding DDP service."
    }
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const prev = () => {
    const idx = (current - 1 + testimonials.length) % testimonials.length;
    goTo(idx, -1);
  };

  const next = useCallback(() => {
    const idx = (current + 1) % testimonials.length;
    goTo(idx, 1);
  }, [current, goTo, testimonials.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          <div className="lg:w-1/3 flex flex-col gap-6">
            <div>
              <AnimatedHeading as="h2" className="text-[10px] uppercase font-bold text-dark-gray tracking-[0.2em] mb-2">
                Customer Feedback
              </AnimatedHeading>
              <AnimatedHeading as="h3" delay={0.08} className="text-3xl font-extrabold text-charcoal tracking-tight">
                LATEST CUSTOMER COMMENTS
              </AnimatedHeading>
            </div>

            <AnimatedCard soft className="bg-white p-6 rounded-2xl border border-light-border shadow-sm flex flex-col items-center justify-center text-center gap-2 cursor-default">
              <span className="text-xl font-bold text-charcoal">Excellent</span>
              <div className="flex gap-1 bg-[#00B67A] px-3 py-1.5 rounded-lg">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-white fill-white" />
                ))}
              </div>
              <p className="text-xs text-dark-gray">
                Based on <span className="underline font-medium hover:text-primary cursor-pointer">2,780 reviews</span>
              </p>
            </AnimatedCard>

            <div className="flex gap-2 justify-center lg:justify-start">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-primary w-6' : 'bg-light-border w-2 hover:bg-dark-gray'
                  }`}
                />
              ))}
            </div>
          </div>

          <AnimatedCard
            delay={0.12}
            className="lg:w-2/3 bg-white border border-light-border rounded-2xl shadow-sm flex flex-col overflow-hidden"
            whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(0,0,0,0.1)' }}
          >
            <div className="px-8 pt-6 pb-2">
              <p className="text-xs text-dark-gray">Showing our 5 star reviews</p>
            </div>

            <div className="relative flex-1 overflow-hidden px-8 pb-8 min-h-[180px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.35, ease: easeSmooth }}
                  className="h-full"
                >
                  <div className="flex gap-0.5 bg-[#00B67A] w-fit px-1.5 py-1 rounded-lg mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-white fill-white" />
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="font-bold text-charcoal text-sm">{t.name}</span>
                    <span className="text-xs text-dark-gray">, {t.date}</span>
                    <span className="text-[10px] text-dark-gray flex items-center gap-1 border border-light-border px-2 py-0.5 rounded-full">
                      <CheckCircle className="w-3 h-3 text-[#00B67A]" /> Verified
                    </span>
                  </div>

                  <h4 className="font-bold text-charcoal text-base mb-3">{t.title}</h4>
                  <p className="text-dark-gray text-sm leading-relaxed">{t.quote}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="border-t border-light-border flex justify-end gap-2 px-8 py-4">
              <motion.button
                onClick={prev}
                whileHover={buttonHover}
                whileTap={buttonTap}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-light-border hover:border-primary hover:text-primary"
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>
              <motion.button
                onClick={next}
                whileHover={buttonHover}
                whileTap={buttonTap}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-light-border hover:border-primary hover:text-primary"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </AnimatedCard>

        </div>
      </div>
    </section>
  );
}
