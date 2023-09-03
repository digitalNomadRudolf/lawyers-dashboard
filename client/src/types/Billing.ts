import { Case, CaseStatus } from "./Case";

export interface Billing {
  case: Case;
  billedAmount: number;
  billedDate: Date;
  status: CaseStatus;
  isPaid: boolean;
  description?: string;
}
