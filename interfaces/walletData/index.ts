// Generated by https://quicktype.io

export interface WalletData {
  events: Event[];
  assets: Object;
  market: any;
  address: string;
  offers: any[];
}

export interface OnchainMetadata {
  image: string;
  name: string;
  description: string;
  files: Files;
  mediaType: string;
}
interface Files {
  [key: string]: {
    [key: string]: string;
    name: string;
    src: string;
    mediaType: string;
  };
}

export interface Datum {
  price: number;
  tn: string;
  cs: string;
  rp: number;
  ra: string;
  sa: string;
}

export interface Event {
  action: string;
  txHash: string;
  submittedOn: number;
  submittedBy: string;
  datum: Datum;
}