'use client';
import { cn } from '@/lib/utils';
import { LockClosedIcon, CodeIcon, BackpackIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { IconProps } from '@radix-ui/react-icons/dist/types';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const GreetingTitle = () => {
  return (
    <h1
      className={cn(
        'text-foreground  font-semibold tracking-tighter text-center',
        'text-2xl leading-tight',
        'md:text-3xl',
        'lg:text-4xl lg:leading-[1.1]',
        'text-transparent bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text',
      )}
    >
      <span className="hidden md:inline">Hey, my name is Luca</span>
      <span className="md:hidden">Uhmpasterig</span>
    </h1>
  );
};

export const GreetingAbout = () => {
  return (
    <h2 className="text-foreground/50 text-xl font-mono md:text-xl text-center mt-2">
      I am a <HightlightedText icon={CodeIcon}>fullstack developer</HightlightedText>
      <span className="hidden md:inline">
        {' '}
        with a passion for <HightlightedText icon={BackpackIcon}>business</HightlightedText>,{' '}
        <HightlightedText icon={EyeOpenIcon}>cyber security</HightlightedText> &{' '}
        <HightlightedText icon={LockClosedIcon}>cryptography</HightlightedText>
      </span>
      .
    </h2>
  );
};

type HightlightedTextProps = {
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
} & Props.HasChildren;

const HightlightedText = ({ icon, children }: HightlightedTextProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = icon;
  return (
    <motion.span
      className={cn(
        'relative group cursor-pointer transition-colors whitespace-nowrap cyan-text',
        'bg-gradient-to-b from-cyan-500 to-cyan-700 bg-clip-text text-transparent hover:underline hover:text-cyan-600',
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      <motion.div
        className={cn('absolute left-0 w-full h-full text-border flex justify-center text-cyan-500')}
        animate={{ top: isHovered ? -15 : 20, opacity: isHovered ? 1 : 0 }}
        initial={{
          opacity: isHovered ? 1 : 0,
        }}
      >
        <Icon />
      </motion.div>
      {children}
    </motion.span>
  );
};
