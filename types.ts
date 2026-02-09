
export interface Product {
  id: string;
  name: string;
  category: FabricCategory;
  price: number;
  image: string;
  description: string;
}

export enum FabricCategory {
  SILK = 'Silk',
  COTTON = 'Cotton',
  WOOL = 'Wool',
  LINEN = 'Linen',
  PRINTS = 'African Prints',
  SYNTHETIC = 'Synthetic'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
