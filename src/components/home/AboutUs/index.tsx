import { DynamicIcon } from '@/components/commons/dynamic-icon';
import { TAboutUsSection } from '@/content/home/types';

type AboutUsProps = {
  data: TAboutUsSection[];
};

export const AboutUs = ({ data }: AboutUsProps) => {
  return (
    <div className="space-y-8 text-lf-gray-900">
      {data.map(({ icon, title, description }, idx) => (
        <div key={title + idx} className="flex gap-4 items-center">
          <div className="bg-lf-green-400 p-4 flex justify-center items-center rounded-lg w-16 h-16">
            <DynamicIcon name={icon as any} className="w-8 h-8 stroke-lf-gray-800" />
          </div>
          <div className="flex flex-col w-full">
            <strong>{title}</strong>
            <p className="text-lf-gray-800">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
