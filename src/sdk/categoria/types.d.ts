export interface TCategory {
  name: string;
  main: {
    title: string;
    description: string;
  };
  products: {
    slug: string;
    name: string;
    price: number;
    image: {
      url: string;
      alt: string;
    };
  }[];
}

export interface TFormattedCategory extends TCategory {
  products: {
    slug: string;
    name: string;
    price: string;
    link: string;
    image: {
      url: string;
      alt: string;
    };
  }[];
}
