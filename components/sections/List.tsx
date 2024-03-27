'use client';
import { Grid } from '@/components/Grid';
import { ListItem, ListItemProps } from '@/components/ListItem';
import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

type ListSectionProps = {
  title: string;
  items: ListItemProps[];
};

export const ListSection = ({ title, items }: ListSectionProps) => {
  return (
    <ListSectionWrapper>
      <h2 className="text-3xl font-bold mb-4 md:text-left text-center ">{title}</h2>
      <Grid>
        {items.map((item, i) => (
          <ListItem
            key={i}
            image={item.image}
            title={item.title}
            links={item.links}
            description={item.description}
            tags={item.tags}
          />
        ))}
      </Grid>
    </ListSectionWrapper>
  );
};

const ListSectionWrapper = ({ children }: Props.HasChildren) => {
  const sectionRef = useRef(null);
  const isMd = useMediaQuery('md');
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['end end', 'start start'],
  });

  let opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.5, 1, 1, 0.5]);
  let scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.97, 1, 1, 0.97]);
  if (!isMd) {
    let motionValue = new MotionValue();
    motionValue.set(1);
    opacity = motionValue.get();
    scale = motionValue.get();
  }
  return (
    <motion.section ref={sectionRef} style={{ opacity, scale }} className="w-full sm:opacity-100">
      {children}
    </motion.section>
  );
};

export const sizes = {
  sm: '640px',
  md: '768px',
};

const useMediaQuery = (screen: keyof typeof sizes) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = `(min-width: ${sizes[screen]})`;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, screen]);

  return matches;
};
