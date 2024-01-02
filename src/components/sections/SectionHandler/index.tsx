import { getSection } from './getSection';
import { THomeSection } from '@/sdk/content/home/types';

type TSectionHandler = {
  section: THomeSection;
};

export const SectionHandler = ({ section }: TSectionHandler) => {
  const { title, description, name, data } = section;
  const Section = getSection(name);

  if (!Section) return null;

  return (
    <div className="space-y-2 text-lf-gray-900">
      {title && <h3 className="font-bold text-xl">{title}</h3>}
      {description && <p className="mb-2">{description}</p>}
      <Section data={data} />
    </div>
  );
};
