import { Case } from "./Case";

export interface Document {
  title: string;
  case: Case;
  fileUrl: string;
  uploadedAt: Date;
  description?: string;
}
