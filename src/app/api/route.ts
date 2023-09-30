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
        search: 'Procure os melhores produtos',
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
      ],
    },
  ];

  return Response.json({ home });
}
