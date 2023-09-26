'use client';
import { Input } from '@/components/commons/Input';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IForm {
  term: string;
}

export const KnowUs = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const router = useRouter();

  const onSubmit: SubmitHandler<IForm> = ({ term }) => {
    router.push(`/produtos?busca=${term}`);
  };

  return (
    <div className="rounded-xl bg-lf-green-400 p-3.5">
      <div className="flex mb-4">
        <div className="w-fit space-y-3">
          <strong className="text-xl">Conheça as nossas melhores plantas!</strong>
          <div className="flex gap-5 items-center">
            <div className="flex flex-col gap-0.5">
              <strong className="text-lg">14</strong>
              <span>Espécies</span>
            </div>
            <div className="w-[2px] h-10 bg-lf-gray-900" />
            <div className="flex flex-col gap-0.5">
              <strong className="text-lg">100+</strong>
              <span>Clientes</span>
            </div>
          </div>
        </div>
        <Image
          src="/assets/temporary/plant_1.png"
          alt="Vaso Verde de Planta"
          width={75}
          height={118}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input.Root
          placeholder="Procure os melhores produtos"
          className="border-none h-11 focus:outline-lf-gray-900"
          {...register('term')}
        >
          <button className="focus:outline-black">
            <Input.Icon icon={Search} className="bg-lf-green-200 p-1.5 w-8 h-8 rounded-md" />
          </button>
        </Input.Root>
      </form>
    </div>
  );
};
