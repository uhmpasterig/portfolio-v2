'use client';
import { cn } from '@/lib/utils';
import { GreetingTitle, GreetingAbout } from '@/components/Greeting';
import { Logo } from '@/components/Logo';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const GreetingSection = async () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['end end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className={cn(
        'col-span-full flex flex-col items-center justify-center',
        'bg-transparent border-none',
        'lg:mb-[25vh] lg:mt-[30vh] mt-[20vh] mb-[15vh]',
        'px-3',
      )}
    >
      <div className="relative md:h-16 md:w-16 h-12 w-12 md:mb-5 mb-3">
        <Logo className={cn('absolute h-full w-auto inset-0 m-auto')} width={200} height={200} />
      </div>

      <div className={cn('mx-auto flex max-w-5xl flex-col items-center gap-2')}>
        <GreetingTitle />
        <GreetingAbout />
      </div>
    </motion.section>
  );
};
