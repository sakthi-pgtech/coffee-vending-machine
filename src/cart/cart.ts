import type { CartItemType } from './types';

export class Cart {
  items: CartItemType[] = [];

  /**
   * Adds an item to the cart.
   * @param item Item to be added to the cart
   */
  addItem(item: CartItemType) {
    this.items.push(item);
  }

  /**
   * Gets the list of items in the cart.
   * @returns Array of CartItemType objects.
   */
  getItems(): CartItemType[] {
    return this.items;
  }

  /**
   * Clears all items from the cart.
   */
  flush(): void {
    this.items = [];
  }
}
