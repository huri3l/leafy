'use client';
import { Input } from '@/components/commons/Input';
import { TFormattedKnowUs } from '@/sdk/home/types';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

type TForm = {
  term: string;
};

export type TKnowUsProps = {
  data: TFormattedKnowUs;
};

export const KnowUs = ({ data }: TKnowUsProps) => {
  const { title, image, search, statistics } = data;
  const { register, handleSubmit } = useForm<TForm>();
  const router = useRouter();

  const onSubmit: SubmitHandler<TForm> = ({ term }) => {
    router.push(`/produtos?busca=${term}`);
  };

  return (
    <div className="rounded-xl bg-lf-green-400 p-3.5">
      <div className="flex gap-4 items-center mb-4">
        <div className="w-fit space-y-3">
          <strong className="text-xl">{title}</strong>
          <div className="flex gap-5 items-center">
            {statistics.map(({ qty, type }, idx) => (
              <div key={type + idx} className="flex gap-5 items-center">
                {idx > 0 && <div className="w-[2px] h-10 bg-lf-gray-900" />}
                <div className="flex flex-col gap-0.5">
                  <strong className="text-lg">{qty}</strong>
                  <span>{type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image src={image.url} alt={image.alt} width={75} height={118} />
      </div>
      {search && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input.Root
            placeholder={search}
            className="border-none h-11 focus:outline-lf-gray-900"
            {...register('term')}
          >
            <button className="focus:outline-black">
              <Input.Icon icon={Search} className="bg-lf-green-200 p-1.5 w-8 h-8 rounded-md" />
            </button>
          </Input.Root>
        </form>
      )}
    </div>
  );
};