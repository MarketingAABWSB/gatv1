export const runtime = 'edge';

import { Metadata } from 'next';
import { getService } from '@/data/services';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: 'Service Not Found | GAT SERVICES',
    };
  }

  return {
    title: `${service.title.ms} | GAT SERVICES`,
    description: service.shortDesc.ms,
    openGraph: {
      title: `${service.title.ms} | GAT SERVICES`,
      description: service.shortDesc.ms,
      url: `/services/${slug}`,
      images: [
        {
          url: service.image,
          width: 800,
          height: 600,
          alt: service.title.ms,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title.ms} | GAT SERVICES`,
      description: service.shortDesc.ms,
      images: [service.image],
    },
  };
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
