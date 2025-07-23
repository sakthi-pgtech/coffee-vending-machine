import { formatCurrency } from '../currency';

describe('formatCurrency', () => {
  it('should format USD currency by default', () => {
    expect(formatCurrency({ amount: 1234.56 })).toBe('$1,234.56');
  });

  it('should format with specified currency and locale', () => {
    expect(formatCurrency({ amount: 1234.56, options: { currency: 'EUR', locale: 'de-DE' } })).toBe('1.234,56 €');
  });

  it('should format zero amount', () => {
    expect(formatCurrency({ amount: 0 })).toBe('$0.00');
  });

  it('should format negative amount', () => {
    expect(formatCurrency({ amount: -50 })).toBe('-$50.00');
  });
});
