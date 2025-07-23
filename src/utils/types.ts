export type SupportedLocale = 'en-US' | 'en-GB' | 'de-DE' | 'fr-FR';
export type SupportedCurrency = 'USD' | 'EUR' | 'GBP';

export interface CurrencyFormatterOptions extends Intl.NumberFormatOptions {
  locale?: SupportedLocale;
  currency?: SupportedCurrency;
}

export type FormatCurrencyType = (params: { amount: number; options?: CurrencyFormatterOptions }) => string;
