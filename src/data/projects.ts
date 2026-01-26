export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  heroImage: string;
  color: 'gold' | 'purple' | 'orange';
  link: string;
}

export const projects: PortfolioProject[] = [
  {
    slug: 'citra-studio',
    title: 'CITRA STUDIO',
    category: 'BRANDING / WEB',
    heroImage: '/assets/citra-hero.png',
    color: 'gold',
    link: '/portfolio/citra-studio',
  },
  {
    slug: 'florist',
    title: 'BLOOM & BRANCH',
    category: 'E-COMMERCE / WEB',
    heroImage: '/assets/florist-hero.png',
    color: 'purple',
    link: '/portfolio/florist',
  },
  {
    slug: 'kain-rupa',
    title: 'KAIN & RUPA',
    category: 'FASHION / WEB',
    heroImage: '/assets/kain-hero.png',
    color: 'orange',
    link: '/portfolio/kain-rupa',
  },
  {
    slug: 'kasar-halus',
    title: 'KASAR/HALUS',
    category: 'ART / BRANDING',
    heroImage: '/assets/kasar-hero.png',
    color: 'gold',
    link: '/portfolio/kasar-halus',
  },
  {
    slug: 'wijaya-consulting',
    title: 'WIJAYA CONSULTING',
    category: 'CORPORATE / WEB',
    heroImage: '/assets/wijaya-hero.png',
    color: 'purple',
    link: '/portfolio/wijaya-consulting',
  },
];

export const services = [
  {
    id: 1,
    title: 'WEB DEVELOPMENT',
    description: 'High-performance React & Next.js applications that dominate search engines and captivate users.',
    color: 'gold',
    image: '/assets/service-web.png',
  },
  {
    id: 2,
    title: 'MOBILE ECOSYSTEMS',
    description: 'Native iOS and Android applications built with Flutter and React Native for seamless experiences.',
    color: 'orange',
    image: '/assets/service-app.png',
  },
  {
    id: 3,
    title: 'RADICAL UI/UX',
    description: 'Behavior-driven design systems that convert visitors into loyal brand evangelists.',
    color: 'purple',
    image: '/assets/service-ui.png',
  },
];
