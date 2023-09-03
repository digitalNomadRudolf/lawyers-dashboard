import { Client } from "./Client";

interface Appointment {
  title: string;
  date: Date;
  client: Client;
  description: string;
  isPast: boolean;
}
