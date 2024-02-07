export type BlogItem = Pick<BlogPost, 'title' | 'metadataRef' | 'slug'>;

type MetadataRef = {
  description: string;
  tags?: string[];
  published: string;
};

export type BlogPost = {
  title: string;
  body: string;
  author: string;
  metadataRef: MetadataRef;
  image?: string;
  slug: string;
};
