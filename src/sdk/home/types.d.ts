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

export type TCategoriesDisplay = {
  mainCategories: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[];
  seeAll?: boolean;
};

export type TAboutUs = {
  icon: string;
  title: string;
  description: string;
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
    }
  | {
      name: 'categories_display';
      title?: string;
      description?: string;
      data: TCategoriesDisplay[];
    }
  | {
      name: 'about_us';
      title?: string;
      description?: string;
      data: TAboutUs[];
    }
  | {
      name: 'gift';
      title?: string;
      description?: string;
      data: TGift;
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

export type TFormattedProductCard = {
  tags?: string[];
  link: string;
  name: string;
  price: {
    raw: number;
    formatted: string;
  };
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
      data: TFormattedProductCard[];
    }
  | {
      name: 'categories_display';
      title?: string;
      description?: string;
      data: TFormattedCategoriesDisplay;
    }
  | {
      name: 'about_us';
      title?: string;
      description?: string;
      data: TAboutUs[];
    }
  | {
      name: 'gift';
      title?: string;
      description?: string;
      data: TGift;
    };
