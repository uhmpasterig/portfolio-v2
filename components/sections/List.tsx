'use client';
import { Grid } from '@/components/Grid';
import { fetchProjects, getImageUrl } from '@/lib/utils';
import { ListItem, ListItemProps } from '@/components/ListItem';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

type ListSectionProps = {
  title: string;
  items: ListItemProps[];
};

export const ListSection = async ({ title, items }: ListSectionProps) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['end end', 'start start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.5, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.97, 1, 1, 0.97]);
  return (
    <motion.section ref={sectionRef} style={{ opacity, scale }} className="w-full">
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
    </motion.section>
  );
};
