import { cn } from '@/lib/utils';

export const AboutSection = () => {
  return (
    <section
      className={cn(
        'flex flex-col items-center justify-center py-16 w-screen min-h-[110vh]',
        'bg-background border-y-2 border-border shadow-inner',
      )}
    >
      <div className="absolute overflow-hidden w-full h-full"></div>
    </section>
  );
};
