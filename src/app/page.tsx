import { SectionContainer } from '@/components/sections/SectionContainer';
import { getHome } from '@/content/home';

export default async function Home() {
  const sections = await getHome();

  return (
    <main className="space-y-16 p-4">
      {sections.map((section, idx) => (
        <SectionContainer key={section.name + idx} section={section} />
      ))}
    </main>
  );
}
