import { TRichText } from '@/sdk/types';
import { Bold } from './Bold';
import { Regular } from './Regular';
import { UnorderedList } from './UnorderedList';
import { Heading } from './Heading';
import { Italic } from './Italic';
import { Underline } from './Underline';
import { Link } from './Link';

interface RichTextProps {
  content: TRichText[];
}

export const RichText = ({ content }: RichTextProps) => {
  return content.map((element, idx) => {
    if (element === 'line_break') return <br key={idx} />;
    else if ('text' in element)
      return (
        <p>
          {element.text.map((text, idx) => {
            if (text === 'line_break') return <br key={idx} />;
            else if ('bold' in text) return <Bold key={idx}>{text.bold}</Bold>;
            else if ('regular' in text) return <Regular key={idx}>{text.regular}</Regular>;
            else if ('italic' in text) return <Italic key={idx}>{text.italic}</Italic>;
            else if ('underline' in text) return <Underline key={idx}>{text.underline}</Underline>;
            else if ('link' in text) {
              return (
                <Link key={idx} href={text.link.url} target={text.link.target}>
                  {text.link.label ?? text.link.url}
                </Link>
              );
            } else if ('heading5' in text) {
              return (
                <Heading key={idx} size="h5">
                  {text.heading5}
                </Heading>
              );
            } else if ('heading6' in text) {
              return (
                <Heading key={idx} size="h6">
                  {text.heading6}
                </Heading>
              );
            } else return null;
          })}
        </p>
      );
    else if ('unordered_list' in element)
      return <UnorderedList key={idx} items={element.unordered_list} />;
    else return null;
  });
};
