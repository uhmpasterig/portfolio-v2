export type ListItemProps = {
  image: string;
  title: string;
  links?: {
    github?: string;
    demo?: string;
  };
  description: string;
  tags: string[];
};

export type ListItemTitleProps = {
  data: Pick<ListItemProps, 'title' | 'image' | 'links'>;
};

export type ListItemDescriptionProps = {
  data: Pick<ListItemProps, 'description' | 'image'>;
};

export type ListItemTagsProps = {
  data: Pick<ListItemProps, 'tags'>;
};
