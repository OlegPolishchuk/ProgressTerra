export interface GetAccessTokenResponse {
  result: ResultOperation;
  accessToken: string;
}

export interface GetBonusResponse {
  resultOperation: ResultOperation;
  data: Data;
}

export interface Data {
  typeBonusName: string;
  currentQuantity: number;
  forBurningQuantity: number;
  dateBurning: string;
}
interface ResultOperation {
  status: number;
  message: string;
  messageDev: string;
  codeResult: number;
  duration: number;
  idLog: string;
}
