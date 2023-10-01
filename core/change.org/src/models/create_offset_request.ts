/* Default currencies accepted by change org*/
type currency = 'eth' | 'sol' | 'usd';

export type CreateOffsetDraftRequest = {
  currency: currency;
  count: number;
};

export type CreateOffsetRequest = {
  funds_collected: boolean;
  count: number;
  currency: currency;
  zip_code: string;
  order_value: number;
  external_id: string;
};
