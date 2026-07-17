import { motion, type HTMLMotionProps } from 'motion/react';
import type { ReactNode } from 'react';
import {
  cardHover,
  cardTransition,
  fadeUp,
  headingTransition,
  scaleIn,
  viewportOnce,
} from '../../lib/motion';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';

interface AnimatedHeadingProps {
  as?: HeadingTag;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedHeading({
  as = 'h2',
  children,
  className = '',
  delay = 0,
}: AnimatedHeadingProps) {
  const props = {
    className,
    initial: 'hidden' as const,
    whileInView: 'visible' as const,
    viewport: viewportOnce,
    variants: fadeUp,
    transition: { ...headingTransition, delay },
    children,
  };

  switch (as) {
    case 'h1':
      return <motion.h1 {...props} />;
    case 'h3':
      return <motion.h3 {...props} />;
    case 'h4':
      return <motion.h4 {...props} />;
    case 'p':
      return <motion.p {...props} />;
    case 'div':
      return <motion.div {...props} />;
    default:
      return <motion.h2 {...props} />;
  }
}

interface AnimatedCardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
  delay?: number;
  soft?: boolean;
}

export function AnimatedCard({
  children,
  className = '',
  delay = 0,
  soft = false,
  whileHover,
  ...rest
}: AnimatedCardProps) {
  return (
    <motion.div
      className={`will-change-transform ${className}`}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={cardTransition(delay)}
      whileHover={
        whileHover ??
        (soft
          ? { y: -4, boxShadow: '0 12px 28px rgba(0,0,0,0.1)' }
          : cardHover)
      }
      {...rest}
    >
      {children}
    </motion.div>
  );
}
