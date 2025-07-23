import { SIZE_PRICES, CREAMER_PRICES, SWEETENER_PRICES } from '../constants';

describe('Pricing Constants', () => {
  it('should have correct coffee size prices', () => {
    expect(SIZE_PRICES.small).toBe(1.0);
    expect(SIZE_PRICES.medium).toBe(1.5);
    expect(SIZE_PRICES.large).toBe(2.0);
  });

  it('should have correct creamer prices', () => {
    expect(CREAMER_PRICES.none).toBe(0.0);
    expect(CREAMER_PRICES.dairy).toBe(0.25);
    expect(CREAMER_PRICES.nonDairy).toBe(0.5);
  });

  it('should have correct sweetener prices', () => {
    expect(SWEETENER_PRICES.none).toBe(0.0);
    expect(SWEETENER_PRICES.sugar).toBe(0.2);
    expect(SWEETENER_PRICES.sugarAlternative).toBe(0.5);
  });
});
