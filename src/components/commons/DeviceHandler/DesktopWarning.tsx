import { GriddedLeafy } from '@/assets/icons';
import { dict } from '@/content/dictionary';
import { PrismicRichText } from '@prismicio/react';

export const DesktopWarning = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center px-64">
      <GriddedLeafy />
      <PrismicRichText
        field={dict('desktop-warning')}
        components={{
          heading6: ({ children }) => <strong className="text-2xl mb-10">{children}</strong>,
          paragraph: ({ children }) => <p className="text-xl text-center mb-8">{children}</p>,
        }}
      />
    </div>
  );
};
