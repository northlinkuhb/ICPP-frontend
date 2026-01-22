import heroBanner1 from '../../public/banner/banner.png';
import heroBanner2 from '../../public/banner/banner2.png';
import heroBanner3 from '../../public/banner/banner3.png';

export interface HeroSlide {
  image: string | any;
  alt: string;
  title: string;
  description: string;
}

export const heroSlides: HeroSlide[] = [
  {
    image: heroBanner1,
    alt: 'hero-banner-1',
    title: 'Isaac Centre for Public Policy connects multiple dualities that exist across the policy ecosystem.',
    description:
      'At the nexus of government, academia, researchers, and practitioners, ICPP advances rigorous, context-specific economic policy research grounded in India s realities.'
  },
  {
    image: heroBanner2,
    alt: 'hero-banner-2',
    title: 'At the intersection of rigor and relevance, policy finds direction.',
    description:
      'We turn inquiry into solutions by linking evidence, expertise, and decision-making.'
  },
  {
    image: heroBanner3,
    alt: 'hero-banner-3',
    title: 'Policy advances when people and practice meet.',
    description:
      'Connecting students, practitioners and researchers to shape informed public decisions.'
  }
];
