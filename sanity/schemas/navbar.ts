import { defineField } from 'sanity';
import { PanelLeft } from 'lucide-react';

export type NavbarItem = {
  label: string;
  href: string;
};

export type NavbarItems = NavbarItem[];

export const navbarItems = {
  name: 'navbarItems',
  title: 'Navbar Items',
  type: 'document',
  icon: PanelLeft,
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Href',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'index',
      title: 'Index',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Order',
      name: 'order',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
};
