'use client';
import { Animate } from "@/components/Animate";
import { useListItemContext } from "..";
import React from "react";

export const ListItemTags = () => {
  const { tags } = useListItemContext();
  return (
    <Animate variant="left" delay={0.4} className="flex flex-row gap-1 items-start mt-1">
      {tags.map((tag, i) => (
        <React.Fragment key={i}>
          <Animate
            key={i}
            className="text-xs text-cyan-500 font-semibold cursor-pointer hover:text-cyan-300 hover:underline transition-colors"
            variant="bottom"
            delay={0.7 + i * 0.15}
          >
            {tag
              .split(' ')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')}
          </Animate>
          {i < tags.length - 1 && <span className="text-xs text-cyan-500 font-semibold mx-1">•</span>}
        </React.Fragment>
      ))}
    </Animate>
  );
};
