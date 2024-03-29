export type ListItem<T> = {
  image: string;
  title: string;
  description: string;
  tags: string[];
} & T;
