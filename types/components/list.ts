export type ListItem<T> = {
  image: string;
  title: string;
  description: string;
  tags: string[];
} & T;

export type ListVariant = 'small-icons' | 'large-icons';

export type ListSectionProps<T> = {
  title: string;
  items: ListItem<T>[];
  variant?: ListVariant;
};
