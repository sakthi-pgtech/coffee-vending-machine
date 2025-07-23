import { FormatCurrencyType } from './types';

export const formatCurrency: FormatCurrencyType = ({ amount, options = {} }) => {
  const { currency = 'USD', locale = 'en-US' } = options;

  return amount.toLocaleString(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
