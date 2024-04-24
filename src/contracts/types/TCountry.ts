export interface Country {
  flags: Flags;
  name: Name;
  capital: string[];
  region: Region;
  population: number;
}

// export interface CountriesResponse {
//   // `data` is the response that was provided by the server
//   data: Country[];

//   // `status` is the HTTP status code from the server response
//   status: 200;

//   // `statusText` is the HTTP status message from the server response
//   // As of HTTP/2 status text is blank or unsupported.
//   // (HTTP/2 RFC: https://www.rfc-editor.org/rfc/rfc7540#section-8.1.2.4)
//   statusText: "OK";

//   // `headers` the HTTP headers that the server responded with
//   // All header names are lower cased and can be accessed using the bracket notation.
//   // Example: `response.headers['content-type']`
//   headers: {
//     "cache-control": "public, immutable, max-age=31556926";
//     "content-length": "25499";
//     "content-type": "application/json";
//   };

//   // `config` is the config that was provided to `axios` for the request
//   config: {
//     transitional: {
//       silentJSONParsing: true;
//       forcedJSONParsing: true;
//       clarifyTimeoutError: false;
//     };
//     adapter: ["xhr", "http"];
//     transformRequest: [null];
//     transformResponse: [null];
//     timeout: 0;
//     xsrfCookieName: "XSRF-TOKEN";
//     xsrfHeaderName: "X-XSRF-TOKEN";
//     maxContentLength: -1;
//     maxBodyLength: -1;
//     headers: {
//       Accept: "application/json, text/plain, */*";
//     };
//     baseURL: "https://restcountries.com/v3.1/";
//     params: {
//       fields: "name,region,capital,population,flags";
//     };
//     method: "get";
//     url: "/all";
//   };

//   // `request` is the request that generated this response
//   // It is the last ClientRequest instance in node.js (in redirects)
//   // and an XMLHttpRequest instance in the browser
//   request: {
//     null: null;
//   };
// }

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: NativeName };
}

export interface NativeName {
  official: string;
  common: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export interface CountryDetail extends Country {
  subregion?: string;
  languages?: { [key: string]: string };
  currencies?: Currencies;
  tld?: string[];
  borders?: string[];
}

export interface Currencies {
  MDL?: Aed;
  USD?: Aed;
  EUR?: Aed;
  AUD?: Aed;
  MZN?: Aed;
  BRL?: Aed;
  CVE?: Aed;
  XAF?: Aed;
  ALL?: Aed;
  NZD?: Aed;
  NGN?: Aed;
  GMD?: Aed;
  SOS?: Aed;
  YER?: Aed;
  MYR?: Aed;
  XCD?: Aed;
  GBP?: Aed;
  MGA?: Aed;
  DZD?: Aed;
  MAD?: Aed;
  MRU?: Aed;
  PYG?: Aed;
  LKR?: Aed;
  ZAR?: Aed;
  KWD?: Aed;
  SLL?: Aed;
  RWF?: Aed;
  SYP?: Aed;
  HNL?: Aed;
  JOD?: Aed;
  TVD?: Aed;
  NPR?: Aed;
  LRD?: Aed;
  GGP?: Aed;
  DJF?: Aed;
  FJD?: Aed;
  NOK?: Aed;
  FKP?: Aed;
  KZT?: Aed;
  TMT?: Aed;
  BGN?: Aed;
  XPF?: Aed;
  BBD?: Aed;
  STN?: Aed;
  BND?: Aed;
  SGD?: Aed;
  BTN?: Aed;
  INR?: Aed;
  ARS?: Aed;
  AZN?: Aed;
  MXN?: Aed;
  GTQ?: Aed;
  KES?: Aed;
  CZK?: Aed;
  GIP?: Aed;
  AWG?: Aed;
  AED?: Aed;
  SSP?: Aed;
  XOF?: Aed;
  SHP?: Aed;
  BWP?: Aed;
  UZS?: Aed;
  TND?: Aed;
  HKD?: Aed;
  MKD?: Aed;
  SRD?: Aed;
  SBD?: Aed;
  UAH?: Aed;
  BAM?: BAM;
  IRR?: Aed;
  CUC?: Aed;
  CUP?: Aed;
  ERN?: Aed;
  TRY?: Aed;
  PHP?: Aed;
  VUV?: Aed;
  BOB?: Aed;
  RON?: Aed;
  KHR?: Aed;
  ZWL?: Aed;
  JEP?: Aed;
  KGS?: Aed;
  GYD?: Aed;
  AMD?: Aed;
  LBP?: Aed;
  DKK?: Aed;
  PGK?: Aed;
  ZMW?: Aed;
  TTD?: Aed;
  PEN?: Aed;
  SEK?: Aed;
  SDG?: BAM;
  OMR?: Aed;
  TWD?: Aed;
  MNT?: Aed;
  TZS?: Aed;
  CAD?: Aed;
  CRC?: Aed;
  CNY?: Aed;
  COP?: Aed;
  MMK?: Aed;
  RUB?: Aed;
  KPW?: Aed;
  KYD?: Aed;
  BYN?: Aed;
  SZL?: Aed;
  PLN?: Aed;
  CHF?: Aed;
  VES?: Aed;
  PAB?: Aed;
  WST?: Aed;
  FOK?: Aed;
  THB?: Aed;
  BSD?: Aed;
  TOP?: Aed;
  BIF?: Aed;
  BHD?: Aed;
  IMP?: Aed;
  HTG?: Aed;
  AFN?: Aed;
  ILS?: Aed;
  LYD?: Aed;
  UYU?: Aed;
  NIO?: Aed;
  CKD?: Aed;
  LAK?: Aed;
  KID?: Aed;
  ANG?: Aed;
  JMD?: Aed;
  EGP?: Aed;
  CLP?: Aed;
  LSL?: Aed;
  GHS?: Aed;
  SCR?: Aed;
  AOA?: Aed;
  BMD?: Aed;
  PKR?: Aed;
  SAR?: Aed;
  KRW?: Aed;
  ETB?: Aed;
  BDT?: Aed;
  KMF?: Aed;
  BZD?: Aed;
  UGX?: Aed;
  HUF?: Aed;
  ISK?: Aed;
  TJS?: Aed;
  NAD?: Aed;
  RSD?: Aed;
  MUR?: Aed;
  MOP?: Aed;
  MVR?: Aed;
  IDR?: Aed;
  CDF?: Aed;
  VND?: Aed;
  GNF?: Aed;
  GEL?: Aed;
  MWK?: Aed;
  IQD?: Aed;
  JPY?: Aed;
  DOP?: Aed;
  QAR?: Aed;
}

export interface Aed {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}
