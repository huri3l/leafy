export async function GET() {
  const product = {
    images: [
      {
        url: 'https://i.imgur.com/n3P8u3b.png',
        alt: 'Cacto Florido dentro de um vasinho branco',
      },
    ],
    name: 'Cacto Florido',
    price: {
      value: 49.99,
      promotion: {
        new_value: 42.99,
        amount: 0.15,
        condition: {
          type: 'cash',
          no_fee_alternative: 3,
        },
      },
    },
    description: [
      {
        text: [
          { heading5: 'Sinta um Toque de Natureza' },
          {
            regular:
              'Dê as boas-vindas à serenidade e beleza da natureza dentro da sua casa com o nosso ',
          },
          {
            bold: 'Cacto Florido',
          },
          {
            regular:
              '! Este encantador cacto é a escolha perfeita para adicionar um toque de elegância natural à sua decoração. Com suas flores deslumbrantes e aparência exótica, o Cacto Florido é uma verdadeira obra de arte.',
          },
          'line_break',
          'line_break',
          {
            regular:
              'Este cacto é conhecido por suas flores vibrantes e coloridas que florescem de forma espetacular, adicionando vida ao ambiente. Se você não possui um polegar verde, não se preocupe! O Cacto Florido é fácil de cuidar e requer pouca rega, tornando-o ideal para aqueles com um estilo de vida agitado.',
          },
          'line_break',
          'line_break',
          {
            bold: 'Tamanho do Produto:',
          },
        ],
      },
      {
        unordered_list: ['Altura: 15 cm (incluindo vaso)', 'Diâmetro do Vaso: 10 cm'],
      },
      'line_break',
      {
        text: [
          {
            bold: 'Conteúdo da Embalagem:',
          },
        ],
      },
      {
        unordered_list: ['1 Cacto Florido', 'Vaso Decorativo'],
      },
      'line_break',
      {
        text: [
          {
            regular:
              'Traga a beleza natural para a sua casa com o Cacto Florido. Encomende agora e transforme o seu espaço em um oásis encantador de tranquilidade e elegância!',
          },
        ],
      },
    ],
  };

  return Response.json(product);
}
