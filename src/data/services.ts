export interface ServiceItem {
    id: string;
    title: string;
    price: string;
    duration: string;
    description: string;
  }
  
  export const servicesData: ServiceItem[] = [
    {
      id: 'luxury-bridal',
      title: 'The Elite Bride Experience',
      price: 'KSh 45,000',
      duration: '120 mins',
      description: 'Ultra-luxurious premium bridal artistry. Includes detailed prep, premium waterproof complexion balancing, lash tailoring, and a comprehensive preview consultation session before the wedding day.',
    },
    {
      id: 'ruracio-glam',
      title: 'Traditional Ruracio Celebration Look',
      price: 'KSh 20,000',
      duration: '90 mins',
      description: 'Elegant, ultra-radiant soft glam engineered to remain absolutely breathtaking under natural outdoor lighting for traditional dowry ceremonies and family celebrations.',
    },
    {
      id: 'editorial-gala',
      title: 'Corporate Gala & High-Definition Event',
      price: 'KSh 15,000',
      duration: '60 mins',
      description: 'Crisp, high-definition camera-ready look designed for corporate events, award galas, media appearances, or professional studio headshot photography profiles.',
    },
    {
      id: 'masterclass-private',
      title: '1-on-1 Personal Beauty Masterclass',
      price: 'KSh 25,000',
      duration: '180 mins',
      description: 'A luxurious multi-hour session focusing on perfect facial mapping, customized melanin color matching, transition techniques, and day-to-night transformation skills.',
    },
  ];