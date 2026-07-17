import { motion } from 'motion/react';
import customLabels from '../images/pricing_sticker_sheet_1784028888170.jpg';
import adhesiveLabels from '../images/metallic_foil_labels_1784028871347.jpg';
import productLabels from '../images/cosmetics_label_1784026599666.jpg';
import foodLabels from '../images/wine_label_1784026612933.jpg';
import { AnimatedCard, AnimatedHeading } from './ui/MotionPrimitives';

export function Categories() {
  const categories = [
    {
      title: "Custom Labels",
      desc: "Get custom stickers and labels in any bespoke shape and size.",
      image: customLabels
    },
    {
      title: "Adhesive Labels",
      desc: "Choose adhesive labels for a large range of custom finishes.",
      image: adhesiveLabels
    },
    {
      title: "Product Labels",
      desc: "Buy product labels that are a perfect fit for you.",
      image: productLabels
    },
    {
      title: "Food Labels",
      desc: "Select food labels to suit all your product requirements.",
      image: foodLabels
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <AnimatedHeading as="h2" className="text-3xl md:text-4xl font-extrabold text-charcoal leading-tight tracking-tight mb-4">
            What kind of printed labels can we make for you?
          </AnimatedHeading>
          <AnimatedHeading as="p" delay={0.1} className="text-dark-gray max-w-3xl mx-auto text-sm leading-relaxed">
            It's essential that you have label printing with every possible customisation option. This is why we aim to give you all the choice you need from a wide range. Choose any shape, finish, measurement, material and supply, and your custom labels or stickers will be made to your exact requirements for the perfect fit.
          </AnimatedHeading>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <AnimatedCard
              key={index}
              delay={index * 0.1}
              className="group flex flex-col cursor-pointer rounded-2xl overflow-hidden bg-white border border-transparent hover:border-light-border"
            >
              <div className="h-48 w-full overflow-hidden mb-4 bg-off-white relative">
                <motion.img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <h4 className="text-lg font-bold text-charcoal mb-2 text-center group-hover:text-primary transition-colors duration-300">
                {cat.title}
              </h4>
              <p className="text-dark-gray text-sm text-center px-2 pb-4">
                {cat.desc}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
