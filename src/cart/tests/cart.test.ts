import { Cart } from '../cart';
import type { CartItemType } from '../types';
import { CoffeeSize, Creamer, Sweetener } from '../../catalogue/constants';

describe('Cart', () => {
  let cart: Cart;
  let item: CartItemType;

  beforeEach(() => {
    cart = new Cart();
    item = {
      product: {
        size: CoffeeSize.small,
        creamer: Creamer.none,
        sweetener: Sweetener.none,
      },
      quantity: 1,
    };
  });

  it('should add an item to the cart', () => {
    cart.addItem(item);
    expect(cart.getItems()).toContain(item);
  });

  it('should return all items in the cart', () => {
    cart.addItem(item);
    cart.addItem(item);
    expect(cart.getItems().length).toBe(2);
  });

  it('should clear all items from the cart', () => {
    cart.addItem(item);
    cart.flush();
    expect(cart.getItems().length).toBe(0);
  });
});
