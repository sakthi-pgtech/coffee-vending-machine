import { Cart } from './cart';
import { Creamer, Sweetener, CoffeeSize } from './catalogue';
import { CoffeePricingEngine } from './pricing';
import { formatCurrency } from './utils/currency';

const cart = new Cart();

// --- Small coffee with no creamer and no sweetener ---
console.log('A small coffee with no creamer and no sweetener costs:');
cart.addItem({
  product: { size: CoffeeSize.small, creamer: Creamer.none, sweetener: Sweetener.none },
  quantity: 1,
});

console.log(formatCurrency({ amount: CoffeePricingEngine.calculateCartTotal(cart.getItems()) }));
console.log();
cart.flush();

// --- Large coffee with non-dairy creamer and sugar alternative ---
console.log('A large coffee with non-dairy creamer and sugar alternative costs:');
cart.addItem({
  product: { size: CoffeeSize.large, creamer: Creamer.nonDairy, sweetener: Sweetener.sugarAlternative },
  quantity: 1,
});

console.log(formatCurrency({ amount: CoffeePricingEngine.calculateCartTotal(cart.getItems()) }));
console.log();

cart.flush();

// --- Medium coffee with dairy creamer and sugar + 2 medium coffees with no creamer and no sweetener ---
console.log('A medium coffee with dairy creamer and sugar costs + 2 medium coffees with no creamer and no sweetener:');
cart.addItem({
  product: { size: CoffeeSize.medium, creamer: Creamer.dairy, sweetener: Sweetener.sugar },
  quantity: 1,
});
cart.addItem({
  product: { size: CoffeeSize.medium, creamer: Creamer.none, sweetener: Sweetener.none },
  quantity: 2,
});

console.log(formatCurrency({ amount: CoffeePricingEngine.calculateCartTotal(cart.getItems()) }));
console.log();

console.log('Add more items to the cart or flush it to start over in src/index.ts');
