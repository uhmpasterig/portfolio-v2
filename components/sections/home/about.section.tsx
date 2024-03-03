'use client';
import { cn, getImageUrl } from '@/lib/utils';
import { OrbitItem, OrbitPath, OrbitItemProps } from 'react-orbit-component';
import { Skill, SkillGroups } from '@/sanity/schemas';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const SIZES = ['w-[20%] h-[20%]', 'w-[40%] h-[40%]', 'w-[60%] h-[60%]'];

export const AboutSection = ({ skillGroups }: { skillGroups: SkillGroups }) => {
  const [frozen, setFrozen] = useState(false);

  const calculateSize = (index: number) => {
    return SIZES[index % SIZES.length];
  };

  const calculateAngle = (numberOfItems: number, index: number, groupIndex: number = 1) => {
    const angle = 360 / numberOfItems;
    const startAngle = angle * index;
    return startAngle + groupIndex * 30;
  };

  return (
    <section
      className={cn(
        'flex flex-col items-center justify-center py-16 w-screen min-h-[110vh]',
        'bg-background border-y-2 border-border shadow-inner',
      )}
    >
      <div className="relative w-[55vh] h-[55vh] flex items-center justify-center">
        <h1 className="absolute text-4xl">🧠</h1>

        {skillGroups.map((group, i) => (
          <OrbitPath
            key={i}
            className={cn('absolute border border-border rounded-full', calculateSize(i))}
            type="circle"
          >
            {group.skills.map((skill, j) => (
              <CustomOrbitItem
                key={j}
                skill={skill}
                startAngle={calculateAngle(group.skills.length, j, i)}
                frozen={frozen}
              />
            ))}
          </OrbitPath>
        ))}
      </div>
    </section>
  );
};

const InfoLine = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="absolute translate-x-1/2 -translate-y-1/2 z-50">
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" className="stroke-border">
        <path d="M 0 200 L 100 100" strokeWidth={2} />
        <path d="M 100 100 H 200" strokeWidth={2} />
      </svg>

      <div
        className={cn(
          'absolute w-72 h-40 bg-childBackground border-border border-2 rounded-md flex flex-col text-2xl p-4 ',
          'top-0 right-0 translate-x-full translate-y-4 z-50',
        )}
      >
        <h1 className="text-xl font-bold">{label}</h1>
        <p className="text-sm">
          A very long text that will be cut off at some point. A very long text that will be cut off.
        </p>
      </div>
    </div>
  );
};

const CustomOrbitItem = ({
  skill,
  frozen,
  ...props
}: OrbitItemProps & {
  skill: Skill;
  frozen?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <OrbitItem
      ref={ref}
      className="w-10 h-10 bg-childBackground border-border border-2 rounded-full flex items-center justify-center text-2xl"
      timeBetweenSteps={0.02}
      anglePerStep={frozen ? 0 : 0.1}
      {...props}
    >
      <Image
        src={getImageUrl(skill.icon)}
        className="rounded-full h-[60%] w-[60%] object-scale-down"
        alt={skill.label}
        width={20}
        height={20}
      />
      {!frozen && skill.label === 'Next.js' && <InfoLine label={skill.label} value={'Test'} />}
    </OrbitItem>
  );
};
