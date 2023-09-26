import { KnowUs } from '@/components/sections/KnowUs';
import { SectionHandler } from '@/components/sections/SectionContainer';

export default function Home() {
  const sections = [
    {
      name: 'know_us',
    },
  ];

  return (
    <main>
      {sections.map((section, idx) => (
        <SectionHandler key={section.name + idx} section={section} />
      ))}
    </main>
  );
}
