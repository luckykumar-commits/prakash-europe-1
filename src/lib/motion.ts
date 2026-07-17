import type { Transition, Variants } from 'motion/react';

export const easeSmooth: Transition['ease'] = [0.22, 1, 0.36, 1];

export const viewportOnce = { once: true, margin: '-40px' as const };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeSmooth },
  },
};

export const fadeUpSoft: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeSmooth },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeSmooth },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

export const cardHover = {
  y: -8,
  boxShadow: '0 20px 44px rgba(0,0,0,0.12)',
  transition: { type: 'spring' as const, stiffness: 320, damping: 22 },
};

export const cardHoverSoft = {
  y: -4,
  boxShadow: '0 12px 28px rgba(0,0,0,0.1)',
  transition: { type: 'spring' as const, stiffness: 320, damping: 22 },
};

export const iconHover = {
  scale: 1.12,
  rotate: 4,
  transition: { type: 'spring' as const, stiffness: 360, damping: 18 },
};

export const buttonHover = {
  scale: 1.04,
  transition: { type: 'spring' as const, stiffness: 400, damping: 20 },
};

export const buttonTap = { scale: 0.97 };

export const headingTransition = {
  duration: 0.7,
  ease: easeSmooth,
};

export const cardTransition = (delay = 0): Transition => ({
  duration: 0.5,
  delay,
  ease: easeSmooth,
});
