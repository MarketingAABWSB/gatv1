import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | GAT SERVICES',
  description: 'Learn more about GAT SERVICES & Services, our mission, vision, and the experienced team behind our professional automotive care.',
  openGraph: {
    title: 'About Us | GAT SERVICES',
    description: 'Learn more about GAT SERVICES & Services, our mission, vision, and the experienced team behind our professional automotive care.',
    url: '/about-us',
  },
};

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
