export interface PortfolioItem {
    id: string;
    src: string;
    alt: string;
    category: 'Bridal' | 'Editorial' | 'Special Event' | 'Lessons';
    title: string;
    description: string;
  }
  
  export const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      src: 'https://picsum.photos/800/1000?random=1', // Change this to '/images/portfolio/your-file.jpg' later!
      alt: 'High fashion editorial look',
      category: 'Editorial',
      title: 'Crimson Velvet',
      description: 'Featured editorial shoot focusing on deep contrasts and flawless matte complexion.',
    },
    {
      id: '2',
      src: 'https://picsum.photos/800/1000?random=2',
      alt: 'Elegant timeless bridal makeup look',
      category: 'Bridal',
      title: 'Classic Elegance',
      description: 'Radiant, dew-kissed soft glam designed to last flawlessly all day.',
    },
    {
      id: '3',
      src: 'https://picsum.photos/800/1000?random=3',
      alt: 'Vibrant graphic liner event makeup',
      category: 'Special Event',
      title: 'Gala Avant-Garde',
      description: 'Sharp structures and graphic elements tailored for high-profile evening galas.',
    },
  ];