import { motion } from 'motion/react';
import heroPress from '../images/hero_printing_press_1784026585510.jpg';
import cosmetics from '../images/cosmetics_label_1784026599666.jpg';
import wine from '../images/wine_label_1784026612933.jpg';
import ecoFriendly from '../images/eco_friendly_label_1784026625947.jpg';
import beverage from '../images/beverage_cans_label_1784028836306.jpg';
import pharma from '../images/pharma_bottles_label_1784028852511.jpg';
import metallic from '../images/metallic_foil_labels_1784028871347.jpg';
import stickers from '../images/pricing_sticker_sheet_1784028888170.jpg';
import handLabelers from '../images/hand_labelers_showcase_1784028913095.jpg';
import garment from '../images/garment_textile_labels_1784029573928.jpg';
import { AnimatedCard, AnimatedHeading } from './ui/MotionPrimitives';

export function Gallery() {
  const images = [
    { src: heroPress, alt: 'Label printing press' },
    { src: cosmetics, alt: 'Cosmetics product labels' },
    { src: wine, alt: 'Wine bottle labels' },
    { src: ecoFriendly, alt: 'Eco-friendly labels' },
    { src: beverage, alt: 'Beverage can labels' },
    { src: pharma, alt: 'Pharmaceutical bottle labels' },
    { src: metallic, alt: 'Metallic foil labels' },
    { src: stickers, alt: 'Custom sticker sheets' },
    { src: handLabelers, alt: 'Hand labelers showcase' },
    { src: garment, alt: 'Garment and textile labels' },
  ];

  return (
    <section className="py-20 bg-off-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <AnimatedHeading as="h2" className="text-3xl md:text-4xl font-extrabold text-charcoal leading-tight tracking-tight mb-4">
            Our Work Gallery
          </AnimatedHeading>
          <AnimatedHeading as="p" delay={0.1} className="text-dark-gray max-w-3xl mx-auto text-sm leading-relaxed">
            Take a look at some of the custom labels, stickers, and manufacturing processes we use to deliver exceptional quality.
          </AnimatedHeading>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((image, index) => (
            <AnimatedCard
              key={index}
              delay={index * 0.06}
              className="break-inside-avoid relative group overflow-hidden rounded-2xl shadow-sm border border-light-border bg-white cursor-pointer"
              whileHover={{ scale: 1.03, y: -4, zIndex: 10, boxShadow: '0 18px 40px rgba(0,0,0,0.14)' }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/15 transition-colors duration-300" />
              <motion.p
                className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-gradient-to-t from-black/60 to-transparent"
              >
                {image.alt}
              </motion.p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
