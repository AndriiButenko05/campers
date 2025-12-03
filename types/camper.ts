
interface GalleryItem {
  thumb: string;
  original: string;
}

interface Review {
  reviewer_name: string;
  reviewer_rating: number; 
  comment: string;
}

type FormCamper = 'alcove' | 'integrated' | 'panel_van';
type TransmissionCamper = 'automatic' | 'manual'
type EngineCamper = 'diesel' | 'petrol'

export interface Camper {
  id: string; 
  name: string;
  price: number;
  rating: number; 
  location: string;
  description: string;
  form: FormCamper; 
  length: string; 
  width: string; 
  height: string; 
  tank: string; 
  consumption: string; 
  transmission: TransmissionCamper; 
  engine: EngineCamper; 
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: GalleryItem[];
  reviews: Review[];
}
export interface CampersApiResponse {
  total: number;
  items: Camper[];
}