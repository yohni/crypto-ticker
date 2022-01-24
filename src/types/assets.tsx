export interface IAsset {
  id: string;
  assetCode: string;
  assetName: string;
  unit: string | '';
  commissionRate: number;
  freeAuditWithdrawAmt: number;
  freeUserChargeAmount: number;
  createTime: number;
  test: number;
  gas: null;
  isLegalMoney: false;
  reconciliationAmount: number;
  seqNum: string;
  chineseName: string;
  cnLink: string;
  enLink: string;
  logoUrl: string;
  fullLogoUrl: string;
  supportMarket: null;
  feeReferenceAsset: null;
  feeRate: null;
  feeDigit: number;
  assetDigit: number;
  trading: true;
  tags: Array<string>;
  plateType: string;
  etf: false;
  isLedgerOnly: false;
}

export interface IAssetResponse {
  code: string;
  data: IAsset[];
  message: string | null;
  messageDetail: string | null;
  success: boolean;
}
