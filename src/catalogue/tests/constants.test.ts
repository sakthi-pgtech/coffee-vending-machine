import { CoffeeSize, Creamer, Sweetener } from '../constants';

describe('CoffeeSize Enum', () => {
  it('should have correct values', () => {
    expect(CoffeeSize.small).toBe('small');
    expect(CoffeeSize.medium).toBe('medium');
    expect(CoffeeSize.large).toBe('large');
  });
});

describe('Creamer Enum', () => {
  it('should have correct values', () => {
    expect(Creamer.none).toBe('none');
    expect(Creamer.dairy).toBe('dairy');
    expect(Creamer.nonDairy).toBe('nonDairy');
  });
});

describe('Sweetener Enum', () => {
  it('should have correct values', () => {
    expect(Sweetener.none).toBe('none');
    expect(Sweetener.sugar).toBe('sugar');
    expect(Sweetener.sugarAlternative).toBe('sugarAlternative');
  });
});
