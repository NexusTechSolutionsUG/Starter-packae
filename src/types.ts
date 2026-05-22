export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  priceStart: string;
  benefits: string[];
}

export interface TrustSignal {
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  rating: number;
  avatarUrl?: string;
}

export interface TechStackItem {
  name: string;
  category: string;
}
