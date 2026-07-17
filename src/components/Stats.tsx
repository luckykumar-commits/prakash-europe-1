import { motion } from 'motion/react';
import { Clock, ShieldCheck, FileSearch, Leaf, Truck } from 'lucide-react';
import { AnimatedHeading } from './ui/MotionPrimitives';
import { easeSmooth, iconHover, viewportOnce } from '../lib/motion';

export function Stats() {
  const promises = [
    { icon: <Clock className="w-6 h-6" />, title: "Fast Turnaround", desc: "10-18 days delivery" },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Leading Quality", desc: "ISO 9001 certified" },
    { icon: <FileSearch className="w-6 h-6" />, title: "Artwork Check", desc: "Free pre-press review" },
    { icon: <Truck className="w-6 h-6" />, title: "DDP Shipping", desc: "Customs handled" },
    { icon: <Leaf className="w-6 h-6" />, title: "Eco-Friendly", desc: "FSC® materials" }
  ];

  return (
    <section className="bg-charcoal py-8 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col text-center mb-8">
          <AnimatedHeading as="h2" className="text-white text-2xl font-bold tracking-tight">
            Our five promises
          </AnimatedHeading>
          <motion.div
            className="w-12 h-1 bg-primary mx-auto mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.55, delay: 0.2, ease: easeSmooth }}
            viewport={viewportOnce}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-x divide-gray-700">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: easeSmooth }}
              viewport={viewportOnce}
              whileHover={{ y: -6, scale: 1.04 }}
              className={`flex flex-col items-center text-center cursor-default group ${index !== 0 ? 'pl-6' : ''}`}
            >
              <motion.div
                className="text-gray-400 mb-4 flex items-center justify-center w-14 h-14 rounded-full border border-gray-600 group-hover:border-primary group-hover:text-primary transition-colors duration-300"
                whileHover={iconHover}
              >
                {promise.icon}
              </motion.div>
              <h3 className="text-white font-bold text-sm mb-1 group-hover:text-primary transition-colors duration-300">
                {promise.title}
              </h3>
              <p className="text-gray-400 text-xs">{promise.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
