import { SectionContainer } from '@/components/home/SectionContainer';
import { getHome } from '@/content/home';
import { getMetadata } from '@/content/metadata';
import { Metadata } from 'next';

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

export async function generateMetadata(): Promise<Metadata> {
  return await getMetadata('home');
}
