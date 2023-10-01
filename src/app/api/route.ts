export async function GET() {
  const home = [
    {
      name: 'know_us',
      data: {
        title: 'Conheça as nossas melhores plantas!',
        statistics: [
          {
            qty: 14,
            type: 'Espécies',
          },
          {
            qty: 113,
            type: 'Clientes',
          },
        ],
        image: {
          url: 'https://i.imgur.com/YX045fe.png',
          alt: 'Vaso verde de planta',
        },
        search: 'Procure nossos produtos',
      },
    },
    {
      name: 'product_carousel',
      title: 'Em alta',
      description: 'As plantinhas mais vendidas do nosso site',
      data: [
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
          slug: 'planta-decorativa',
          name: 'Planta Decorativa',
          price: 45.99,
          image: {
            url: 'https://i.imgur.com/AAs1dGQ.png',
            alt: 'Planta decorativa linda com um potinho',
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
      ],
    },
    {
      name: 'product_carousel',
      title: 'Cactos',
      description: 'Os cactos favoritinhos dos clientes',
      data: [
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
      ],
    },
    {
      name: 'categories_display',
      title: 'Categorias',
      description: 'Encontre sua planta ideal',
      data: {
        mainCategories: [
          {
            title: 'Plantas Decorativas',
            description: 'Ideais para preencher sua casa!',
          },
          {
            title: 'Plantas Naturais',
            description: 'Para você que gosta de cuidar',
          },
        ],
        seeAll: true,
      },
    },
    {
      name: 'about_us',
      title: 'Sobre nós',
      data: [
        {
          icon: 'truck',
          title: 'Entrega rápida',
          description: 'Em menos de 4 dias tenha sua plantinha na sua casa',
        },
        {
          icon: 'phone',
          title: 'Suporte de qualidade',
          description: 'Tire suas dúvidas com profissionais rapidamente',
        },
        {
          icon: 'flower-2',
          title: 'Referência mundial',
          description: 'Nossos produtos são distribuídos mundialmente',
        },
      ],
    },
    {
      name: 'gift',
      title: 'Brindes',
      data: {
        icon: 'gift',
        title: 'Brinde Leafy <3',
        subtitle: 'Parabéns! Você ganhou um pote para sua plantinha!',
        image: 'https://i.imgur.com/QnIye0K.png',
        description:
          'Possuímos um sistema de brindes conforme a frequência de compra e os gostos de nossos clientes!',
      },
    },
  ];

  return Response.json({ home });
}
