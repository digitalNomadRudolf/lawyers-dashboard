import { Address } from "cluster";

enum ClientType {
  Individual = "Individual",
  Business = "Business",
}

export interface Adress {
  street?: string;
  city?: string;
  state?: string;
  zipcode?: string;
}

// Create different shapes for objects based on a common discriminator property(type in this case)
// Only for Business clients, the contactPerson will be a required prop
export type Client = {
  name: string;
  type: ClientType;
  email: string;
  phone?: string;
  address?: Address;
} & (
  | {
      type: ClientType.Business;
      contactPerson: string;
    }
  | {
      type: ClientType.Individual;
    }
);

const individualClient: Client = {
  name: "Joe's Ice cream",
  type: ClientType.Individual,
  email: "joe@jic.com",
};

const businessClient: Client = {
  name: "ABC Inc",
  type: ClientType.Business,
  email: "contact@abc.com",
  contactPerson: "John Doe",
};
