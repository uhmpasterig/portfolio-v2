'use client';

import { motion, useScroll } from 'framer-motion';

type GridCrossProps = {
  alignment: keyof typeof alignmentVariants;
};

const alignmentVariants = {
  'top-left': 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
  'top-right': 'top-0 right-0 translate-x-1/2 -translate-y-1/2',
  'bottom-left': 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
  'bottom-right': 'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
};

const animationVariants = {
  hidden: { pathLength: 0, pathOffset: 0.5 },
  visible: { pathLength: 1, pathOffset: 0, transition: { duration: 0.25, delay: 0.1 } },
};

export const GridCross = ({ alignment }: GridCrossProps) => {
  return (
    <motion.div
      className={`absolute z-10 w-3 h-3 transform flex items-center justify-center ${alignmentVariants[alignment]}`}
    >
      <motion.svg className="stroke-white stroke-2" width="20" height="20" viewBox="0 0 40 40">
        <motion.path variants={animationVariants} initial="hidden" whileInView="visible" d="M0 20 H40" />
        <motion.path variants={animationVariants} initial="hidden" whileInView="visible" d="M20 40 V0" />
      </motion.svg>
    </motion.div>
  );
};
