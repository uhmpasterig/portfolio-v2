type Slug = {
  current: string;
}

export type Blog = {
  title: string;
  description: string;
  slug: Slug;
  filename: Slug;
  tags: string[];
  date: string;
  image: string;
  
  content: string;
};
