'use client';
import { TFormattedHomeItem } from '@/sdk/home/types';
import { getSection } from './getSection';

type TSectionHandler = {
  section: TFormattedHomeItem;
};

export const SectionHandler = ({ section }: TSectionHandler) => {
  const { title, description, name, data } = section;
  const Section = getSection(name);

  if (!Section) return null;

  return (
    <div>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      <Section data={data} />
    </div>
  );
};
