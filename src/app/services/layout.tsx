import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | GAT SERVICES',
  description: 'Comprehensive automotive care — from engine diagnostics to bodywork, air conditioning, and beyond.',
  openGraph: {
    title: 'Our Services | GAT SERVICES',
    description: 'Comprehensive automotive care — from engine diagnostics to bodywork, air conditioning, and beyond.',
    url: '/services',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
