import { cn } from "@/lib/utils";

export const GridItem = ({ children, className }: Component.HasChildAndClass) => {
  return <div className={cn('relative bg-background', className)}>{children}</div>;
}