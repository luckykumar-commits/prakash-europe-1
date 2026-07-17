import { motion } from 'motion/react';
import logoDabur from '../images/logos/client-dabur.png';
import logoHero from '../images/logos/client-hero.png';
import logoPaytm from '../images/logos/client-paytm.png';
import logoYazaki from '../images/logos/client-yazaki.png';
import logoMountEverest from '../images/logos/client-mount-everest.png';
import logoWheezal from '../images/logos/client-wheezal.png';
import logoAvtech from '../images/logos/client-avtech.png';
import logoHmd from '../images/logos/client-hmd.png';
import { AnimatedCard, AnimatedHeading } from './ui/MotionPrimitives';
import { viewportOnce } from '../lib/motion';

export function Clients() {
  const logos = [
    { src: logoDabur, alt: 'Dabur' },
    { src: logoHero, alt: 'Hero' },
    { src: logoPaytm, alt: 'Paytm' },
    { src: logoYazaki, alt: 'Yazaki' },
    { src: logoMountEverest, alt: 'Mount Everest' },
    { src: logoWheezal, alt: 'Wheezal' },
    { src: logoAvtech, alt: 'Avtech' },
    { src: logoHmd, alt: 'HMD' },
  ];

  const certCards = [
    {
      content: (
        <>
          <div className="w-16 h-16 border-2 border-charcoal rounded-full flex items-center justify-center mb-4 group-hover:border-primary transition-colors duration-300">
            <span className="font-bold text-xl text-charcoal group-hover:text-primary transition-colors">ISO</span>
          </div>
          <h4 className="font-bold text-charcoal text-sm">Cert No. 20115</h4>
          <p className="text-[11px] text-dark-gray mt-1 font-bold">ISO 9001 &amp; ISO 14001</p>
        </>
      ),
    },
    {
      content: (
        <>
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <span className="font-bold text-xs text-white text-center leading-tight uppercase">Zero<br/>Landfill</span>
          </div>
          <h4 className="font-bold text-charcoal text-sm">Eco-Friendly</h4>
          <p className="text-[11px] text-dark-gray mt-1">Sustainable Materials</p>
        </>
      ),
    },
    {
      content: (
        <>
          <div className="w-32 h-10 bg-[#FF0000] text-white font-bold flex items-center justify-center mb-4 text-xl group-hover:scale-105 transition-transform duration-300">
            XEIKON
          </div>
          <p className="text-[10px] text-dark-gray font-bold uppercase text-center">Proud users of Xeikon 3000</p>
        </>
      ),
    },
    {
      content: (
        <>
          <div className="font-bold text-3xl text-[#1E3A8A] mb-2 tracking-tighter group-hover:scale-105 transition-transform duration-300">BPIF</div>
          <p className="text-[11px] text-dark-gray text-center font-bold">British Printing Industries Federation</p>
        </>
      ),
    },
  ];

  return (
    <section className="py-20 bg-off-white border-b border-light-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <AnimatedHeading as="h2" className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight">
              Fast labels - a label company trusted by clients across Europe
            </AnimatedHeading>
            <AnimatedHeading as="p" delay={0.1} className="text-dark-gray mb-6 leading-relaxed text-sm">
              Choose ANY shape and enter your own measurements for printed labels which perfectly suit your needs. Every label will be printed with our state-of-the-art printers and then custom cut for an exceptional finish. You'll also have direct access to UK and EU customer support via phone, email and live chat every step of the way.
            </AnimatedHeading>
            <AnimatedHeading as="p" delay={0.18} className="text-dark-gray mb-8 leading-relaxed text-sm">
              Our label printing covers a wide range of materials and finishes, including paper, waterproof polypropylene, gloss, matt, clear, metallic, textured paper and more. Plus they're all supplied on either rolls, sheets or as single labels.
            </AnimatedHeading>

            <motion.p
              className="text-xs font-bold text-dark-gray mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              viewport={viewportOnce}
            >
              It's why we're used by small businesses through to multinationals, including:
            </motion.p>

            <div className="overflow-hidden relative w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
              <div className="flex gap-10 items-center w-max" style={{ animation: 'marquee 18s linear infinite' }}>
                {[...logos, ...logos].map((logo, index) => (
                  <img
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 md:h-10 object-contain flex-shrink-0 transition-all duration-300 hover:scale-110 hover:brightness-110"
                  />
                ))}
              </div>
            </div>
            <style>{`
              @keyframes marquee {
                0%   { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}</style>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {certCards.map((card, index) => (
              <AnimatedCard
                key={index}
                delay={index * 0.1}
                className="group bg-white border border-light-border p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm cursor-default"
              >
                {card.content}
              </AnimatedCard>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
