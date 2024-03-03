import { defineField } from 'sanity';
import { OrbitIcon } from 'lucide-react';

export type Skill = {
  label: string;
  icon: string;
};

export type SkillGroup = {
  label: string;
  skills: Skill[];
};

export type SkillGroups = SkillGroup[];

export const skillGroup = {
  name: 'skillGroup',
  title: 'Skill Group Orbit',
  type: 'document',
  icon: OrbitIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
};
