'use client';
import { TextInput } from '@/components/commons/Input/Text';
import { TKnowUsSection } from '@/content/home/types';
import { PrismicRichText } from '@prismicio/react';
import { Search } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { routes } from '@/lib/routes';

type TForm = {
  term: string;
};

type KnowUsProps = {
  data: TKnowUsSection;
};

export const KnowUs = ({ data }: KnowUsProps) => {
  const { title, image, search, statistics } = data;
  const { register, handleSubmit } = useForm<TForm>();
  const router = useRouter();

  const onSubmit: SubmitHandler<TForm> = ({ term }) => {
    router.push(routes.search(term));
  };

  return (
    <div className="rounded-xl bg-lf-green-400 p-3.5">
      <div className="flex gap-4 items-center mb-4">
        <div className="w-fit space-y-3">
          <strong className="text-xl">{title}</strong>
          <div className="flex gap-5 items-center">
            {statistics.map((statistic, idx) => (
              <div key={idx} className="flex gap-5 items-center">
                {idx > 0 && <div className="w-[2px] h-10 bg-lf-gray-900" />}
                <div className="flex flex-col gap-0.5">
                  <PrismicRichText
                    key={idx}
                    field={statistic}
                    components={{
                      strong: ({ children }) => (
                        <>
                          <strong>{children}</strong>
                          <br />
                        </>
                      ),
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image src={image.url} alt={image.alt} width={75} height={118} />
      </div>
      {search && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput.Root
            placeholder={search}
            className="border-none h-11 focus:outline-lf-gray-900"
            {...register('term')}
          >
            <button className="focus:outline-black">
              <TextInput.Icon icon={Search} className="bg-lf-green-200 p-1.5 w-8 h-8 rounded-md" />
            </button>
          </TextInput.Root>
        </form>
      )}
    </div>
  );
};
