import type { Lang } from '@/lib/i18n';

export interface Service {
  slug: string;
  icon: string;
  title: { en: string; ms: string };
  shortDesc: { en: string; ms: string };
  fullDesc: { en: string; ms: string };
  features: { en: string[]; ms: string[] };
  image: string;
  gallery?: string[];
  externalLink?: string;
  workflow?: {
    title: { en: string; ms: string };
    steps: {
      title: { en: string; ms: string };
      desc: { en: string; ms: string };
    }[];
  };
  table?: {
    title: { en: string; ms: string };
    description?: { en: string; ms: string };
    headers: {
      en: string[];
      ms: string[];
    };
    rows: {
      en: string[];
      ms: string[];
    }[];
  };
}

export const services: Service[] = [
  {
    slug: 'heavy-machinery',
    icon: 'factory',
    title: {
      en: 'Heavy Machinery (Diesel)',
      ms: 'Jentera Berat & Lori (Diesel)',
    },
    shortDesc: {
      en: 'Expert repair and maintenance for trucks, buses, and heavy industrial machinery.',
      ms: 'Pakar membaik pulih dan penyelenggaraan untuk lori, bas, dan jentera berat komersial.',
    },
    fullDesc: {
      en: 'We provide comprehensive vehicle repair and maintenance services for diesel engine vehicles, including trucks, buses, and heavy machinery. From routine servicing to major overhauls, our technical team is equipped to handle each job systematically with a high-clearance facility.',
      ms: 'Servis membaik pulih kenderaan ini disediakan untuk kesemua kenderaan berenjin diesel. Skop kerja kami meliputi pelbagai keperluan penyelenggaraan serta pembaikan secara sistematik untuk lori, bas, dan jentera berat dengan fasiliti berkelegaan tinggi.',
    },
    features: {
      en: [
        'Overall servicing',
        'Top overhaul / overhaul (Engine and Gearbox)',
        'Wiring',
        'Engine swap (Halfcut)',
        'Aircond',
        'Tuning / Diagnostic Program',
        'Battery',
        'Suspension'
      ],
      ms: [
        'Servis keseluruhan',
        'Top overhaul / overhaul (Enjin dan Gearbox)',
        'Wiring',
        'Tukar / salin Enjin (Halfcut)',
        'Aircond',
        'Tuning / Program Diagnostik',
        'Bateri',
        'Suspension'
      ],
    },
    image: '/assets/bahagian-diesel/1.png',
    gallery: [
      '/assets/bahagian-diesel/2.png',
      '/assets/bahagian-diesel/3.png',
      '/assets/bahagian-diesel/5.png'
    ],
  },
  {
    slug: 'light-vehicles',
    icon: 'car',
    title: {
      en: 'Light Vehicles (Petrol)',
      ms: 'Kenderaan Ringan (Petrol)',
    },
    shortDesc: {
      en: 'Comprehensive service center for personal and corporate light vehicles.',
      ms: 'Pusat servis menyeluruh untuk kenderaan ringan persendirian & syarikat.',
    },
    fullDesc: {
      en: 'We provide comprehensive vehicle repair and maintenance services for petrol engine light vehicles. From routine servicing to major overhauls, our technical team is equipped to handle each job systematically for both personal and corporate clients.',
      ms: 'Servis membaik pulih kenderaan ini disediakan untuk kesemua kenderaan ringan berenjin petrol. Skop kerja kami meliputi pelbagai keperluan penyelenggaraan serta pembaikan secara sistematik untuk pelanggan persendirian mahupun syarikat.',
    },
    features: {
      en: [
        'Overall servicing',
        'Top overhaul / overhaul (Engine and Gearbox)',
        'Wiring',
        'Engine swap (Halfcut)',
        'Aircond',
        'Tuning / Diagnostic Program',
        'Battery',
        'Suspension'
      ],
      ms: [
        'Servis keseluruhan',
        'Top overhaul / overhaul (Enjin dan Gearbox)',
        'Wiring',
        'Tukar / salin Enjin (Halfcut)',
        'Aircond',
        'Tuning / Program Diagnostik',
        'Bateri',
        'Suspension'
      ],
    },
    image: '/assets/bahagian-petrol/1.png',
    gallery: [
      '/assets/bahagian-petrol/2.png',
      '/assets/bahagian-petrol/3.png',
      '/assets/bahagian-petrol/4.png'
    ],
  },
  {
    slug: 'puspakom-inspection',
    icon: 'gear',
    title: {
      en: 'PUSPAKOM Inspection Preparation',
      ms: 'Persediaan Pemeriksaan PUSPAKOM',
    },
    shortDesc: {
      en: 'Preparation services for vehicles before submission to PUSPAKOM for permit approval.',
      ms: 'Servis persediaan kenderaan sebelum dihantar ke PUSPAKOM bagi kelulusan permit.',
    },
    fullDesc: {
      en: 'GAT is trusted by multiple government agencies to prepare vehicles before submission to PUSPAKOM for "fit for use" permit approval. We deliver efficient, high-quality service in line with the responsibility entrusted to us.',
      ms: 'Kepercayaan telah diberikan kepada GAT oleh beberapa agensi kerajaan untuk menyediakan servis persediaan kenderaan sebelum dihantar ke PUSPAKOM bagi tujuan kelulusan permit "boleh guna". Kami menekankan servis yang cekap dan bermutu selaras dengan tanggungjawab yang diamanahkan.',
    },
    features: {
      en: ['Pre-inspection diagnostics', 'Safety standard compliance checks', 'Commercial vehicle permit preparation'],
      ms: ['Diagnosis sebelum pemeriksaan', 'Pemeriksaan pematuhan piawaian keselamatan', 'Persediaan permit kenderaan komersial'],
    },
    image: '/assets/puspakom/1.jpeg',
    gallery: [
      '/assets/puspakom/2.jpeg',
      '/assets/puspakom/3.jpeg',
      '/assets/puspakom/4.jpeg',
      '/assets/puspakom/5.jpeg'
    ],
  },
  {
    slug: '24-hour-rescue',
    icon: 'engine',
    title: {
      en: '24-Hour Breakdown Service',
      ms: 'Servis Bergerak (Breakdown 24 Jam)',
    },
    shortDesc: {
      en: '24-hour mobile assistance for vehicles that break down during transit.',
      ms: 'Servis bantuan bergerak 24 jam untuk kenderaan yang rosak semasa dalam perjalanan.',
    },
    fullDesc: {
      en: 'GAT provides 24-hour mobile support for vehicles that break down on the road. In many cases, on-site repair is more economical than towing the vehicle to the workshop, except for major technical failures.',
      ms: 'GAT juga menyediakan servis bergerak 24 jam untuk kenderaan yang rosak semasa dalam perjalanan. Dalam banyak keadaan, pembaikan di lokasi adalah lebih ekonomik berbanding ditunda ke bengkel, kecuali bagi kerosakan teknikal yang besar.',
    },
    features: {
      en: ['24/7 emergency response', 'On-site minor repairs', 'Economical cost-saving approach'],
      ms: ['Respon kecemasan 24/7', 'Pembaikan kecil di lokasi', 'Pendekatan jimat kos yang ekonomik'],
    },
    image: '/assets/van-perkhidmatan/1.png',
    gallery: [
      '/assets/van-perkhidmatan/2.png',
      '/assets/van-perkhidmatan/3.png',
      '/assets/van-perkhidmatan/4.png'
    ],
  }
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServiceTitle(service: Service, lang: Lang) {
  return service.title[lang];
}
