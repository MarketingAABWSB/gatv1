import { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { bulletinPosts } from '@/data/bulletin';

export default function sitemap(): MetadataRoute.Sitemap {
  // Use the environment variable for your production domain, or fallback to the actual domain
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gatservices.com';

  // List all your static routes here
  const routes = [
    '',
    '/about-us',
    '/blog',
    '/bulletin',
    '/car-insurance',
    '/newsletter',
    '/projek',
    '/services',
  ];

  const staticEntries = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const serviceEntries = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const projectEntries = projects.map((project) => ({
    url: `${baseUrl}/projek/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const bulletinEntries = bulletinPosts.map((post: any) => ({
    url: `${baseUrl}/bulletin/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...serviceEntries, ...projectEntries, ...bulletinEntries];
}
