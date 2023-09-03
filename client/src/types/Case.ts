import { Client } from "./Client";
import { Document } from "./Document";

export enum CaseStatus {
  Open = "Open",
  Closed = "Closed",
  Pending = "Pending",
}

export interface Case {
  title: string;
  client: Client;
  status: CaseStatus;
  description: string;
  startDate: Date;
  endDate?: Date;
  documents: Document[];
}
