import data from '@/static/footer.json';
import { RichText } from '../commons/RichText';
import { TRichText } from '@/sdk/types';

export const Footer = () => {
  return (
    <footer className="bg-lf-gray-900 text-white mt-12 flex flex-col items-center py-8 gap-4">
      <div className="flex flex-col items-center gap-4">
        <strong className="text-2xl">{data.title}</strong>
        <div className="text-center">
          <RichText content={data.description as TRichText[]} />
        </div>
      </div>
    </footer>
  );
};
