export type PageRoute =
  | '/'
  | '/paket-umrah'
  | '/umrah-dari-sulawesi'
  | '/umrah-dari-sulawesi-tengah'
  | '/umrah-dari-sulawesi-selatan'
  | '/umrah-dari-sulawesi-utara'
  | '/umrah-dari-sulawesi-tenggara'
  | '/umrah-dari-sulawesi-barat'
  | '/umrah-dari-gorontalo'
  | '/panduan-umrah'
  | '/persiapan-umrah'
  | '/perjalanan-umrah'
  | '/umrah-lansia'
  | '/makkah'
  | '/madinah'
  | '/tentang'
  | '/faq'
  | '/blog'
  | '/kontak'
  | string;

export interface CityInfo {
  id: string;
  name: string;
  provinceId: string;
  provinceName: string;
  airportName?: string;
  airportCode?: string;
  hubPathway: string;
  transitHub: string;
  estimatedFlightHours: string;
  isMainHub: boolean;
  travelLogistics: string;
  importantNotes: string[];
  recommendedAirlines: string[];
}

export interface ProvinceInfo {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  capital: string;
  mainAirport: string;
  description: string;
  flightHubRoute: string;
  geographicalContext: string;
  cities: CityInfo[];
  keyAdvice: string[];
  seoTitle: string;
  seoDescription: string;
}

export interface UmrahPackage {
  id: string;
  slug: string;
  name: string;
  durationDays: number;
  priceEstimateDisplay: string;
  priceEstimateNumber: number;
  airline: string;
  transitType: 'Direct' | '1x Transit' | 'Transit Hub Sulawesi';
  departureCities: string[];
  hotelMakkah: {
    name: string;
    stars: number;
    distanceMeters: number;
    distanceNote: string;
  };
  hotelMadinah: {
    name: string;
    stars: number;
    distanceMeters: number;
    distanceNote: string;
  };
  ppiuPartner: {
    name: string;
    izinNo: string;
    legalEntity: string;
    verificationNotice: string;
  };
  departureDates: string[];
  facilities: string[];
  highlights: string[];
  suitableFor: string[];
  isElderlyFriendly: boolean;
  category: 'Eksekutif' | 'Bisnis' | 'Ramah Lansia' | 'Keluarga' | 'Reguler';
  overview: string;
}

export interface GuideArticle {
  id: string;
  slug: string;
  title: string;
  category: 'sebelum-berangkat' | 'perjalanan' | 'arab-saudi' | 'lansia';
  categoryLabel: string;
  readTimeMinutes: number;
  excerpt: string;
  contentHtmlOrMarkdown: string;
  publishDate: string;
  keyTakeaways: string[];
  tags: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'affiliate' | 'rute' | 'ppiu' | 'lansia' | 'biaya';
}

export interface WhatsAppConsultationData {
  name: string;
  city: string;
  departureMonth: string;
  pilgrimCount: string;
  hasElderly: boolean;
  selectedPackage?: string;
  additionalNotes?: string;
}
