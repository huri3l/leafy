export type TKnowUs = {
  title: string;
  statistics: {
    qty: number;
    type: string;
  }[];
  image: {
    url: string;
    alt: string;
  };
  search: string;
};

export type TProduct = {
  slug: string;
  name: string;
  price: number;
  image: {
    url: string;
    alt: string;
  };
};

type THomeItem =
  | {
      name: 'know_us';
      title?: string;
      description?: string;
      data: TKnowUs;
    }
  | {
      name: 'product_carousel';
      title?: string;
      description?: string;
      data: TProduct[];
    };

export type TFormattedKnowUs = {
  title: string;
  statistics: {
    qty: string;
    type: string;
  }[];
  image: {
    url: string;
    alt: string;
  };
  search: string;
};

export type TFormattedProduct = {
  link: string;
  name: string;
  price: string;
  image: {
    url: string;
    alt: string;
  };
};

export type TFormattedHomeItem =
  | {
      name: 'know_us';
      title?: string;
      description?: string;
      data: TFormattedKnowUs;
    }
  | {
      name: 'product_carousel';
      title?: string;
      description?: string;
      data: TFormattedProduct[];
    };
