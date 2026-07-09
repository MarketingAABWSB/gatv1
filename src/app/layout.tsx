import type { Metadata } from 'next';
import { LangProvider } from '@/context/LangContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://gatservices.com.my'),
  title: {
    default: 'GAT SERVICES & SERVICES (M) SDN BHD',
    template: '%s | GAT SERVICES',
  },
  description:
    'Servis automotif profesional meliputi pembaikan enjin, diagnostik, penyelenggaraan kenderaan diesel dan petrol, serta breakdown 24 jam di Terengganu.',
  keywords: ['pembaikan kenderaan', 'servis diesel', 'servis petrol', 'diagnostik berkomputer', 'Terengganu', 'Kuala Nerus', 'GAT SERVICES'],
  openGraph: {
    title: 'GAT SERVICES & SERVICES (M) SDN BHD',
    description: 'Servis automotif profesional meliputi pembaikan enjin, diagnostik, penyelenggaraan kenderaan diesel dan petrol, serta breakdown 24 jam di Terengganu.',
    url: '/',
    siteName: 'GAT SERVICES & SERVICES (M) SDN BHD',
    locale: 'ms_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GAT SERVICES & SERVICES (M) SDN BHD',
    description: 'Servis automotif profesional untuk kenderaan diesel dan petrol di Terengganu.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms">
      <body>
        <LangProvider>
          <div className="page-wrapper">
            <Navbar />
            <main>{children}</main>
            <Footer />
            <FloatingWhatsApp />
          </div>
        </LangProvider>
      </body>
    </html>
  );
}
