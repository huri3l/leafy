import { SectionHandler, TSection } from '@/components/sections/SectionHandler';
import { getHomeSections } from '@/sdk/home';

export default async function Home() {
  const sections = await getHomeSections();

  return (
    <main>
      {sections.map((section, idx) => (
        <SectionHandler key={section.name + idx} section={section} />
      ))}
    </main>
  );
}
