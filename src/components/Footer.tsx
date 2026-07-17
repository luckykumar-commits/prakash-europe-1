import { Truck, ShieldCheck, Headset } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedHeading } from './ui/MotionPrimitives';
import { easeSmooth, iconHover, viewportOnce } from '../lib/motion';

export function Footer() {
  const perks = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'EU DDP Delivery',
      desc: 'Customs and import duties handled directly to your warehouse.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Premium Quality',
      desc: 'ISO 9001 certified manufacturing with export-grade QA checks.',
    },
    {
      icon: <Headset className="w-6 h-6" />,
      title: 'First Class Service',
      desc: 'Dedicated European account manager available on WhatsApp.',
    },
  ];

  return (
    <>
      <div className="bg-black text-white py-10 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.title}
                className="flex flex-col md:flex-row items-center md:items-start gap-4 group cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: easeSmooth }}
                viewport={viewportOnce}
                whileHover={{ y: -4 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                  whileHover={iconHover}
                >
                  {perk.icon}
                </motion.div>
                <div>
                  <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-300">{perk.title}</h4>
                  <p className="text-gray-400 text-sm">{perk.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <footer className="bg-off-white border-t border-light-border pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: easeSmooth }}
              viewport={viewportOnce}
            >
              <div className="flex flex-col mb-6">
                <span className="text-2xl font-black tracking-tight text-charcoal hover:opacity-90 transition-opacity cursor-pointer">
                  PRAKASH<span className="text-primary">LABELS</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest font-bold opacity-60 text-charcoal">Premium Export Division</span>
              </div>
              <p className="text-dark-gray text-sm mb-6 leading-relaxed">
                30+ years of manufacturing excellence. ISO 9001:2015 certified. Supplying premium labels to brands across India, Middle East, and Europe since 1994.
              </p>
              <div className="flex gap-4">
                <span className="text-xs font-bold px-2.5 py-1.5 bg-white rounded-xl text-dark-gray border border-light-border hover:border-primary hover:text-primary transition-colors cursor-default">ISO 9001:2015</span>
                <span className="text-xs font-bold px-2.5 py-1.5 bg-white rounded-xl text-dark-gray border border-light-border hover:border-primary hover:text-primary transition-colors cursor-default">FSC®</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: easeSmooth }}
              viewport={viewportOnce}
            >
              <AnimatedHeading as="h4" className="font-bold text-charcoal text-sm mb-4 uppercase tracking-wider">
                Contact us
              </AnimatedHeading>
              <ul className="space-y-4 text-dark-gray text-sm">
                <li className="hover:text-charcoal transition-colors">
                  <div className="font-bold text-charcoal">Sales</div>
                  <div className="hover:text-primary transition-colors cursor-pointer">Call: +91 9311672302</div>
                  <div className="hover:text-primary transition-colors cursor-pointer">Email: export@prakashlabels.com</div>
                </li>
                <li>
                  <div className="font-bold text-charcoal">Support</div>
                  <div className="hover:text-primary transition-colors cursor-pointer">WhatsApp Chat Available</div>
                </li>
              </ul>
            </motion.div>

          </div>

          <div className="border-t border-light-border py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-dark-gray font-medium">
            <p>Copyright ©2026 Prakash Labels Pvt. Ltd. All Rights Reserved. ISO 9001:2015 Certified.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">Delivery</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy & Security Policy</a>
              <a href="#" className="hover:text-primary transition-colors">About Us</a>
              <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
