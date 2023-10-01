export class CreateOffsetResponse {
  id: string;
  amount: number;
  liveMode: boolean;
  orderValue: number;
  zipCode: string;
  externalId: string;
  metadata: any;
  currency: string;
  count: number;
  totalAmount: number;

  constructor(
    id: string,
    amount: number,
    liveMode: boolean,
    orderValue: number,
    zipCode: string,
    externalId: string,
    metadata: any,
    currency: string,
    count: number,
    totalAmount: number,
  ) {
    this.id = id;
    this.amount = amount;
    this.liveMode = liveMode;
    this.orderValue = orderValue;
    this.zipCode = zipCode;
    this.externalId = externalId;
    this.metadata = metadata;
    this.currency = currency;
    this.count = count;
    this.totalAmount = totalAmount;
  }

  static fronJson(data: any): CreateOffsetResponse {
    return new CreateOffsetResponse(
      data['id'],
      data['amount'],
      data['live_mode'],
      data['order_value'],
      data['zip_code'],
      data['external_id'],
      data['metadata'],
      data['currency'],
      data['count'],
      data['total_amount'],
    );
  }
}

export class CreateOffsetDraftResponse {
  offsetId: string;
  amount: number;
  liveMode: boolean;

  constructor(offsetId: string, amount: number, liveMode: boolean) {
    this.offsetId = offsetId;
    this.amount = amount;
    this.liveMode = liveMode;
  }

  static fronJson(data: any): CreateOffsetDraftResponse {
    return new CreateOffsetDraftResponse(
      data['offsetId'],
      data['amount'],
      data['live_mode'],
    );
  }
}
