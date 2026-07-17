export interface PortfolioItem {
  id: string;
  src: string;
  alt: string;
  category: 'Bridal' | 'Editorial' | 'Special Event' | 'Lessons';
  title: string;
  description: string;
}

/** Add new filenames here when you drop images into public/images/portfolio */
export const PORTFOLIO_IMAGES = [
  '/images/portfolio/IMG_3512.JPG',
] as const;

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    src: PORTFOLIO_IMAGES[0],
    alt: 'Luxury editorial makeup portrait',
    category: 'Editorial',
    title: 'Crimson Velvet',
    description: 'Featured editorial shoot focusing on deep contrasts and flawless matte complexion.',
  },
];
