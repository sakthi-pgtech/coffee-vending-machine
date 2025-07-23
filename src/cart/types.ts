import { CoffeeProductOptionsType } from '../catalogue/types';

export interface CartItemType {
  product: CoffeeProductOptionsType;
  quantity: number;
}
