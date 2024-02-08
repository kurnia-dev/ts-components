export type DateTextFormatOptions = {
  localeMatcher?: 'best fit' | 'lookup';
  weekday?: 'long' | 'short' | 'narrow';
  era?: 'long' | 'short' | 'narrow';
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day?: 'numeric' | '2-digit';
  hour?: 'numeric' | '2-digit';
  minute?: 'numeric' | '2-digit';
  second?: 'numeric' | '2-digit';
  timeZoneName?:
    | 'short'
    | 'long'
    | 'shortOffset'
    | 'longOffset'
    | 'shortGeneric'
    | 'longGeneric';
  formatMatcher?: 'best fit' | 'basic';
  hour12?: boolean;
  timeZone?: string;
};

export type DateFormat = {
  locale: 'en-gb' | 'en-us' | 'id' | 'ja' | 'fr' | 'de';
  year: 'numeric' | '2-digit';
  month: 'numeric' | '2-digit' | 'short' | 'long';
  day: 'numeric' | '2-digit';
} & Pick<DateTextFormatOptions, 'weekday'>;

export type GeneralSetting = {
  currency: 'IDR' | 'USD' | 'EUR' | 'GBP';
  timezone: string;
  dateFormat: DateFormat;
  timeFormat: boolean;
};
