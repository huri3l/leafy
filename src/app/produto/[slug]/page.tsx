import { ProductMain } from '@/components/Product/ProductMain';
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
        src={product.images[0].url}
        alt={product.images[0].alt}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
      <div className="p-4">
        <ProductMain name={product.name} price={product.price} />

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
