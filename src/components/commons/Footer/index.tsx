import { PrismicRichText } from '@prismicio/react';
import { dict } from '@/content/dictionary';

export const Footer = () => {
  return (
    <footer className="bg-lf-gray-900 text-white mt-12 flex flex-col items-center py-8 gap-4">
      <div className="flex flex-col items-center gap-4">
        <strong className="text-2xl">{dict('footer.title')}</strong>
        <div className="text-center">
          <PrismicRichText field={dict('footer.description')} />
        </div>
      </div>
    </footer>
  );
};
