import { Button } from '@/components/commons/Button';
import { getProduct } from '@/sdk/produto';
import { ShoppingBasket } from 'lucide-react';
import Image from 'next/image';

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);

  console.log(product);

  return (
    <div>
      <Image
        src="/assets/product.png"
        alt="teste"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
      <div className="p-4">
        <div className=" space-y-2">
          <h1 className="font-bold text-xl text-lf-gray-900">Cacto Florido</h1>
          <div>
            <p className="line-through text-sm">R$ 49,99</p>
            <span className="inline-flex gap-2 items-center mb-0.5">
              <p className="text-lf-green-alt text-xl font-bold">R$ 42,99</p>
              <p className="text-sm px-1.5 py-0.5 bg-lf-green-200 rounded-md">-15%</p>
            </span>
            <p>
              À vista ou em até <strong>3x de R$ 14,33</strong> sem juros
            </p>
          </div>
        </div>

        <hr className="w-1/2 h-0.5 bg-lf-gray-200 mx-auto my-5" />

        <p>
          Sinta um Toque de Natureza Dê as boas-vindas à serenidade e beleza da natureza dentro da
          sua casa com o nosso Cacto Florido! Este encantador cacto é a escolha perfeita para
          adicionar um toque de elegância natural à sua decoração. Com suas flores deslumbrantes e
          aparência exótica, o Cacto Florido é uma verdadeira obra de arte Este cacto é conhecido
          por suas flores vibrantes e coloridas que florescem de forma espetacular, adicionando vida
          ao ambiente. Se você não possui um polegar verde, não se preocupe! O Cacto Florido é fácil
          de cuidar e requer pouca rega, tornando-o ideal para aqueles com um estilo de vida
          agitado. Tamanho do Produto: Altura: 15 cm (incluindo vaso) Diâmetro do Vaso: 10 cm
          Conteúdo da Embalagem: 1 Cacto Florido Vaso Decorativo Traga a beleza natural para a sua
          casa com o Cacto Florido. Encomende agora e transforme o seu espaço em um oásis encantador
          de tranquilidade e elegância!
        </p>
        <div className="fixed bottom-4 right-4 shadow-lg">
          <Button
            icon={{
              render: ShoppingBasket,
              position: 'right',
            }}
            color="success"
          >
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
}
