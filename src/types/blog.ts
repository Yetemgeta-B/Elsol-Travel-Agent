export interface TravelDetails {
  title: string;
  airline: string;
  departureDate: string;
  returnDate: string;
  departureTime: string;
  returnTime: string;
  baggage: string;
  phones?: string[];
  emails?: string[];
  price?: string;
  additionalInfo?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  slug: string;
  telegramMessage?: string;
  travelDetails?: TravelDetails;
}
