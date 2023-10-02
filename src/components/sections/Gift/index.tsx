import { DynamicIcon } from '@/components/commons/DynamicIcon';
import { TGift } from '@/sdk/home/types';
import Image from 'next/image';

type TGiftProps = {
  data: TGift;
};

export const Gift = ({ data }: TGiftProps) => {
  const { title, subtitle, description, icon, image } = data;

  return (
    <div className="space-y-4">
      <div className="bg-lf-green-400 p-4 rounded-xl flex">
        <div className="flex flex-col gap-2">
          <strong className="inline-flex gap-2 items-center">
            <DynamicIcon name={icon as any} className="w-5 h-5" />
            {title}
          </strong>
          <span className="text-lf-gray-800">{subtitle}</span>
        </div>
        <div className="flex">
          <Image src={image} alt="" width={90} height={90} className="object-contain" />
        </div>
      </div>
      <p className="text-lf-gray-800">{description}</p>
    </div>
  );
};
