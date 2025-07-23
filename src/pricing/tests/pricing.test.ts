import { CoffeePricingEngine } from '../coffeePricing';
import { CartItemType } from '../../cart/types';
import { SIZE_PRICES, CREAMER_PRICES, SWEETENER_PRICES } from '../constants';
import { CoffeeSize, Creamer, Sweetener } from '../../catalogue/constants';

describe('CoffeePricingEngine', () => {
  it('calculates price for a single cart item', () => {
    const item: CartItemType = {
      product: {
        size: CoffeeSize.medium,
        creamer: Creamer.dairy,
        sweetener: Sweetener.sugar,
      },
      quantity: 2,
    };
    // (1.5 + 0.25 + 0.2) * 2 = 3.9
    expect(CoffeePricingEngine.calculateItemPrice(item)).toBeCloseTo(
      (SIZE_PRICES.medium + CREAMER_PRICES.dairy + SWEETENER_PRICES.sugar) * item.quantity,
    );
  });

  it('calculates total price for multiple cart items', () => {
    const items: CartItemType[] = [
      {
        product: {
          size: CoffeeSize.small,
          creamer: Creamer.none,
          sweetener: Sweetener.none,
        },
        quantity: 1,
      },
      {
        product: {
          size: CoffeeSize.large,
          creamer: Creamer.nonDairy,
          sweetener: Sweetener.sugarAlternative,
        },
        quantity: 1,
      },
    ];
    // (1.0 + 0.0 + 0.0) * 1 = 1.0
    // (2.0 + 0.5 + 0.5) * 1 = 3.0
    expect(CoffeePricingEngine.calculateCartTotal(items)).toBeCloseTo(
      (SIZE_PRICES.small + CREAMER_PRICES.none + SWEETENER_PRICES.none) * 1 +
        (SIZE_PRICES.large + CREAMER_PRICES.nonDairy + SWEETENER_PRICES.sugarAlternative) * 1,
    );
  });
});
