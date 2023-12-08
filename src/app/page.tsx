import { SectionHandler } from '@/components/sections/SectionHandler';
import { getHomeSections } from '@/sdk/home';

export default async function Home() {
  const sections = await getHomeSections();

  return (
    <main className="space-y-16 p-4">
      {sections.map((section, idx) => (
        <SectionHandler key={section.name + idx} section={section} />
      ))}
    </main>
  );
}
