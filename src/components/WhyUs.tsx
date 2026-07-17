import { motion } from 'motion/react';
import { Banknote, ShieldCheck, Ship, Zap, Leaf, Package } from 'lucide-react';
import { AnimatedCard, AnimatedHeading } from './ui/MotionPrimitives';
import { iconHover } from '../lib/motion';

export function WhyUs() {
  const reasons = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "ISO 9001:2015 & EU Compliant",
      desc: "Full export documentation and strict QC. Every batch is tested for scuff resistance and adhesive strength to meet strict European standards."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Reliable 10-18 Day Lead Times",
      desc: "Predictable supply chains. Standard orders are manufactured and dispatched to arrive at your European warehouse in just 10-18 working days."
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "MOQ Clarity & Scalability",
      desc: "Low initial minimum order quantities to test our quality, and strictly zero minimums on repeat orders. We scale as your brand grows."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Eco-Friendly & Sustainable",
      desc: "Extensive range of FSC® certified papers, recycled liners, compostable adhesives, and low-VOC inks. Lower your footprint and cost."
    },
    {
      icon: <Banknote className="w-8 h-8" />,
      title: "35-45% Cost Savings",
      desc: "Leverage our advanced Indian manufacturing hub. Get identical or superior premium finishes at significantly lower prices than local EU suppliers."
    },
    {
      icon: <Ship className="w-8 h-8" />,
      title: "DDP Shipping & Customs",
      desc: "We handle all export paperwork, customs clearance, and last-mile delivery. Your labels arrive at your door without administrative headaches."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white border-b border-light-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedHeading as="h2" className="text-3xl md:text-5xl font-extrabold text-charcoal mb-6 leading-[1.05] tracking-tight">
            Why Choose Us As Your <br className="hidden md:block" />
            Label Printing Company?
          </AnimatedHeading>
          <AnimatedHeading as="p" delay={0.1} className="text-lg text-dark-gray text-sm">
            Prakash Labels is serious about digital and flexo printing - delivering high-quality results for business and domestic UK/EU customers, at prices that won't make your eyes water.
          </AnimatedHeading>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <AnimatedCard
              key={index}
              delay={index * 0.08}
              className="p-8 rounded-2xl border border-light-border bg-off-white group cursor-default"
            >
              <motion.div
                className="w-14 h-14 rounded-full bg-white border border-light-border text-primary flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-orange-50 transition-colors duration-300"
                whileHover={iconHover}
              >
                {reason.icon}
              </motion.div>
              <h4 className="text-lg font-bold text-charcoal mb-2 group-hover:text-primary transition-colors duration-300">
                {reason.title}
              </h4>
              <p className="text-dark-gray text-sm leading-relaxed">
                {reason.desc}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
