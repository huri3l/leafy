import { KnowUs } from './KnowUs';

interface SectionHandlerProps {
  section: {
    name: string;
    title?: string;
    description?: string;
  };
}

export const SectionHandler = ({ section }: SectionHandlerProps) => {
  const { title, description, name } = section;

  const Section = getSection(name);

  return (
    <div>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      <Section />
    </div>
  );
};

type TSectionMap = {
  [key: string]: () => JSX.Element;
};

const getSection = (name: string) => {
  return sectionMap[name];
};

const sectionMap: TSectionMap = {
  know_us: KnowUs,
};
