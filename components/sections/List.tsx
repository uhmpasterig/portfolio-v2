'use client';
import { Grid } from '@/components/Grid';
import { ListItem, ListItemProps } from '@/components/ListItem';
import React from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import type { ListItem as ListItemInfo, ListSectionProps } from '@/types/components/list';
import { ListContext, useListContext } from '@/lib/hooks/list-hooks';
import { useMediaQuery } from '@/lib/hooks/media-query';

export const ListSection = <T,>({ title, items, variant = 'small-icons' }: ListSectionProps<T>) => {
  return (
    <ListContext.Provider value={{ title, items, variant }}>
      <ListSectionWrapper>
        <ListSectionContent />
      </ListSectionWrapper>
    </ListContext.Provider>
  );
};

const ListSectionContent = () => {
  const { title, items } = useListContext();

  return (
    <>
      <h2 className="text-3xl font-bold mb-4 md:text-left text-center ">{title}</h2>
      <Grid>
        {items.map((item, i) => (
          <ListItem key={i} item={item} />
        ))}
      </Grid>
    </>
  );
};

const ListSectionWrapper = ({ children }: Props.HasChildren) => {
  const sectionRef = React.useRef(null);
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
