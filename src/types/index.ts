export type CategoryId = 
  | 'power-tools'
  | 'hand-tools'
  | 'welding-equipment'
  | 'cutting-abrasives'
  | 'safety-equipment'
  | 'workshop-equipment';

export interface Category {
  id: CategoryId;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  itemCount: number;
  imageUrl: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  categoryName: string;
  model?: string;
  brand?: string;
  shortDescription: string;
  description: string;
  specifications: ProductSpec[];
  imageUrl: string;
  badge?: 'Heavy Duty' | 'Workshop Essential' | 'High Performance' | 'Industrial Grade' | 'Precision Tool';
  applications: string[];
  featured: boolean;
  leadTime?: string;
  standardPackaging?: string;
}

export interface FilterState {
  search: string;
  category: CategoryId | 'all';
  brand: string | 'all';
  sortBy: 'featured' | 'name-asc' | 'name-desc' | 'brand';
}

export interface WhatsAppEnquiryParams {
  productName?: string;
  model?: string;
  quantity?: number | string;
  notes?: string;
  customerName?: string;
  companyName?: string;
}

