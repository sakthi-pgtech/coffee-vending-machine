import { CoffeeProduct } from '../coffeeProduct';
import { CoffeeSize, Creamer, Sweetener } from '../constants';
import type { CoffeeProductOptionsType } from '../types';

describe('CoffeeProduct', () => {
  it('should create a CoffeeProduct with given options', () => {
    const options: CoffeeProductOptionsType = {
      size: CoffeeSize.medium,
      creamer: Creamer.dairy,
      sweetener: Sweetener.sugar,
    };
    const product = new CoffeeProduct(options);
    expect(product.options).toEqual(options);
  });
});
