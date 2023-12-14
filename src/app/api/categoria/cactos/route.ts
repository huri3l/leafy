export async function GET() {
  const category = {
    name: 'Cactos',
    main: {
      title: 'Explore a Beleza Singular dos Cactos',
      description:
        'Bem-vindo à nossa coleção de cactos, onde a natureza encontra a elegância minimalista. Deixe sua imaginação florescer!',
    },
    products: [
      {
        slug: 'cacto-florido',
        name: 'Cacto Florido',
        price: 49.99,
        image: {
          url: 'https://i.imgur.com/Bbbm2Rw.png',
          alt: 'Cacto florido em um vaso em formato de xícara',
        },
      },
      {
        slug: 'cacto-com-pote',
        name: 'Cacto com Pote',
        price: 36.99,
        image: {
          url: 'https://i.imgur.com/c1F15nn.png',
          alt: 'Cacto pequeno em um pote laranja',
        },
      },
      {
        slug: 'cacto-duplo',
        name: 'Cacto Duplo',
        price: 52.9,
        image: {
          url: 'https://i.imgur.com/L0YaEEM.png',
          alt: 'Cacto duplo em um potinho',
        },
      },
      {
        slug: 'cacto-espinhento',
        name: 'Cacto Espinhento',
        price: 44.4,
        image: {
          url: 'https://i.imgur.com/8j9OyIA.png',
          alt: 'Cacto espinhento em um potinho',
        },
      },
      {
        slug: 'picole-de-cacto',
        name: 'Picolé de Cacto',
        price: 89.9,
        image: {
          url: 'https://i.imgur.com/jISSPj5.png',
          alt: 'Cacto em um palito de picolé',
        },
      },
      {
        slug: 'multi-cacto',
        name: 'Cacto com Galhos',
        price: 69.49,
        image: {
          url: 'https://i.imgur.com/H3g4x8u.png',
          alt: 'Cacto com galhos em um pote',
        },
      },
      {
        slug: 'cacto-com-orelhas',
        name: 'Cacto com Orelhas',
        price: 69.49,
        image: {
          url: 'https://i.imgur.com/kiUvVYd.png',
          alt: 'Cacto cuidadosamente podado para parecer que tem orelhas redondas',
        },
      },
      {
        slug: 'cacto-em-uma-chaleira',
        name: 'Cacto em Chaleira',
        price: 109.9,
        image: {
          url: 'https://i.imgur.com/sIRcyIz.png',
          alt: 'Cacto dentro de uma mini chaleira rosé',
        },
      },
    ],
  };

  return Response.json(category);
}
