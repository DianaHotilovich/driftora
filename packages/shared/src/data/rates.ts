import { Rates } from '../types';

/**
 * Offline snapshot of ECB euro reference rates (1 EUR = x).
 * The app refreshes rates online; this snapshot is used when there is no internet.
 */
export const RATES_SNAPSHOT: Rates = {
  base: 'EUR',
  date: '2026-11-13',
  source: 'ECB euro reference rates, 13.11.2026',
  rates: {
    EUR: 1,
    PLN: 4.4113,
    USD: 1.1052,
    GBP: 0.83559,
    JPY: 176.83,
    HUF: 365.6,
    CHF: 0.9266,
    CAD: 1.5758,
    CZK: 24.424,
    AUD: 1.6288,
    BRL: 6.2595,
    MXN: 20.5491,
    SGD: 1.4236,
    TRY: 55.6667,
    CNY: 7.3738,
  },
};

/** Currency used in each country on the calendar. */
export const COUNTRY_CURRENCY: Record<string, string> = {
  BH: 'BHD', SA: 'SAR', AU: 'AUD', JP: 'JPY', CN: 'CNY', US: 'USD', CA: 'CAD', MC: 'EUR', PT: 'EUR', GB: 'GBP',
  AT: 'EUR', BE: 'EUR', HU: 'HUF', IT: 'EUR', ES: 'EUR', AZ: 'AZN', TR: 'TRY', SG: 'SGD', MX: 'MXN', BR: 'BRL',
  QA: 'QAR', AE: 'AED',
};

export const USER_CURRENCIES = ['PLN', 'EUR', 'USD', 'GBP', 'CHF', 'CZK', 'HUF', 'JPY', 'CAD'];
