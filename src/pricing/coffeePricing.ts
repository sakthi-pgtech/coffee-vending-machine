import { CartItemType } from '../cart';
import { SIZE_PRICES, CREAMER_PRICES, SWEETENER_PRICES } from './constants';

export class CoffeePricingEngine {
  /**
   * Calculates the price of a single cart item based on its product options and quantity.
   * @param item - The cart item to calculate the price for.
   * @returns The total price for the item.
   */
  static calculateItemPrice(item: CartItemType): number {
    const { size, creamer, sweetener } = item.product;
    return (SIZE_PRICES[size] + CREAMER_PRICES[creamer] + SWEETENER_PRICES[sweetener]) * item.quantity;
  }

  /**
   * Calculates the total price for all items in the cart.
   * @param items - The list of cart items to calculate the total price for.
   * @returns The total price for all items in the cart.
   */
  static calculateCartTotal(items: CartItemType[]): number {
    return items.reduce((total, item) => total + CoffeePricingEngine.calculateItemPrice(item), 0);
  }
}
