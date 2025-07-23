import { Sweetener, CoffeeSize, Creamer } from './constants';

export type CoffeeSizeType = CoffeeSize;
export type CreamerType = Creamer;
export type SweetenerType = Sweetener;

export interface CoffeeProductOptionsType {
  size: CoffeeSizeType;
  creamer: CreamerType;
  sweetener: SweetenerType;
}
