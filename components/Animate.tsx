'use client';
import { motion } from 'framer-motion';

const variants = {
  top: {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },
  bottom: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },
  left: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  right: {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
};

type AnimationVariants = keyof typeof variants;

type AnimateProps = {
  variant: AnimationVariants;
  delay?: number;
} & Props.HasChildrenAndClassName;

export const Animate = ({ variant, children, className, delay }: AnimateProps) => {
  return (
    <motion.div
      initial={variants[variant].initial}
      animate={variants[variant].animate}
      transition={{ delay, duration: 0.15, type: 'tween', stiffness: 100, damping: 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
