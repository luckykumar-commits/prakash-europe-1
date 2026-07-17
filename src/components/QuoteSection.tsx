import { motion } from 'motion/react';
import { Send, FileCheck, ShieldCheck } from 'lucide-react';
import { AnimatedHeading } from './ui/MotionPrimitives';
import { buttonHover, buttonTap, easeSmooth, iconHover, viewportOnce } from '../lib/motion';

export function QuoteSection() {
  return (
    <section className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2">

          <motion.div
            className="py-20 pr-10"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: easeSmooth }}
            viewport={viewportOnce}
          >
            <AnimatedHeading as="h2" className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Affordable Printing - <br />
              <span className="text-primary">How Do We Keep Prices So Low?</span>
            </AnimatedHeading>
            <AnimatedHeading as="p" delay={0.12} className="text-sm text-gray-400 mb-8 leading-relaxed">
              Why is Prakash Labels so cheap? It's our most-asked question about our custom printing, and a fair one. The honest answer is: smart operations, not corners cut.
              <br/><br/>
              By manufacturing in our advanced facility in India, we bypass the high operational costs of local EU suppliers. We reinvest in better equipment, faster turnarounds, and genuinely competitive pricing. The result is high-quality digital and flexo printing at prices you won't find matched elsewhere in Europe, with flat-rate DDP shipping and no nasty surprises at checkout.
            </AnimatedHeading>

            <div className="space-y-6">
              {[
                { icon: <ShieldCheck className="w-5 h-5 text-gray-400" />, title: 'ISO 9001:2015', desc: 'Quality Management Systems' },
                { icon: <FileCheck className="w-5 h-5 text-gray-400" />, title: 'EU Compliant', desc: 'Cosmetics & Food Regulations' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="flex gap-4 group cursor-default"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.45, ease: easeSmooth }}
                  viewport={viewportOnce}
                  whileHover={{ x: 6 }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/10 transition-colors duration-300"
                    whileHover={iconHover}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-white text-sm group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-8 md:p-12 text-charcoal lg:rounded-tl-[2rem] lg:rounded-bl-[2rem]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: easeSmooth }}
            viewport={viewportOnce}
          >
            <div className="mb-8 border-b border-light-border pb-4">
              <AnimatedHeading as="h3" className="text-2xl font-bold text-charcoal mb-1">
                Get Your Custom Quote
              </AnimatedHeading>
              <p className="text-dark-gray text-xs">Fill in your details - we respond within 24 hours</p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase text-dark-gray">Your Name *</label>
                  <input type="text" placeholder="John Smith" className="border border-light-border bg-light-gray rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase text-dark-gray">Company Name *</label>
                  <input type="text" placeholder="Your Brand Ltd." className="border border-light-border bg-light-gray rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase text-dark-gray">Business Email *</label>
                  <input type="email" placeholder="john@yourbrand.com" className="border border-light-border bg-light-gray rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase text-dark-gray">Phone / WhatsApp</label>
                  <input type="text" placeholder="Enter number" className="border border-light-border bg-light-gray rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase text-dark-gray">Country *</label>
                  <select className="border border-light-border bg-light-gray rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary appearance-none text-charcoal">
                    <option value="">Select country</option>
                    <option value="UK">United Kingdom</option>
                    <option value="DE">Germany</option>
                    <option value="BE">Belgium</option>
                    <option value="OTHER">Other EU</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase text-dark-gray">Label Type *</label>
                  <select className="border border-light-border bg-light-gray rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary appearance-none text-charcoal">
                    <option value="">Select type</option>
                    <option value="Cosmetics">Cosmetics &amp; Skincare</option>
                    <option value="Food">Food &amp; Beverage</option>
                    <option value="Pharma">Pharmaceutical</option>
                    <option value="Wine">Wine &amp; Spirits</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase text-dark-gray">Estimated Quantity</label>
                <input type="text" placeholder="e.g. 50,000" className="border border-light-border bg-light-gray rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase text-dark-gray">Tell Us More (Optional)</label>
                <textarea placeholder="Size, material, finish, print quality, timeline..." className="border border-light-border bg-light-gray rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary resize-none h-[60px]"></textarea>
              </div>

              <motion.button
                type="button"
                className="w-full bg-primary text-white py-4 rounded-2xl font-bold mt-6 shadow-lg shadow-[#F2601C40] hover:bg-[#d95619] flex items-center justify-center gap-2"
                whileHover={{ ...buttonHover, y: -2 }}
                whileTap={buttonTap}
              >
                <Send className="w-4 h-4" />
                Send My Quote Request
              </motion.button>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-[11px] font-medium text-dark-gray">
                <div className="flex items-center gap-1.5">
                  <span className="text-primary">🔒</span> Secure Data
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-primary">✔</span> No Spam
                </div>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
