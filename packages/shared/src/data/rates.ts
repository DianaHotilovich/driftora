import { Rates } from '../types';

/**
 * Offline snapshot of ECB euro reference rates (1 EUR = x).
 * The app refreshes rates online; this snapshot is used when there is no internet.
 */
export const RATES_SNAPSHOT: Rates = {
  base: 'EUR',
  date: '2026-11-23',
  source: 'ECB euro reference rates, 23.11.2026',
  rates: {
    EUR: 1,
    PLN: 4.4588,
    USD: 1.0939,
    GBP: 0.83673,
    JPY: 174.01,
    HUF: 372.28,
    CHF: 0.9186,
    CAD: 1.5711,
    CZK: 24.455,
    AUD: 1.6532,
    BRL: 6.5611,
    MXN: 21.0528,
    SGD: 1.4124,
    TRY: 55.3405,
    CNY: 7.2905,
  },
};

/** Currency used in each country on the calendar. */
export const COUNTRY_CURRENCY: Record<string, string> = {
  BH: 'BHD', SA: 'SAR', AU: 'AUD', JP: 'JPY', CN: 'CNY', US: 'USD', CA: 'CAD', MC: 'EUR', PT: 'EUR', GB: 'GBP',
  AT: 'EUR', BE: 'EUR', HU: 'HUF', IT: 'EUR', ES: 'EUR', AZ: 'AZN', TR: 'TRY', SG: 'SGD', MX: 'MXN', BR: 'BRL',
  QA: 'QAR', AE: 'AED',
};

export const USER_CURRENCIES = ['PLN', 'EUR', 'USD', 'GBP', 'CHF', 'CZK', 'HUF', 'JPY', 'CAD'];
