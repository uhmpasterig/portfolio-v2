'use client';
import { Animate } from "@/components/Animate";
import { useListItemContext } from "..";

export const ListItemDescription = () => {
  const { description } = useListItemContext();

  return (
    <Animate variant="top" delay={0.25}>
      <p className="text-foreground/50 text-sm font-medium">
        {description.length > 250 ? `${description.slice(0, 100)}...` : description}
      </p>
    </Animate>
  );
};