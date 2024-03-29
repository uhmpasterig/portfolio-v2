import type { ListItem } from '@/types';

export type ListVariant = 'small-icons' | 'large-icons';

export type ListSectionProps<T> = {
  title: string;
  items: ListItem<T>[];
  variant?: ListVariant;
};

export type ListItemProps<T> = {
  item: ListItem<T>;
};
