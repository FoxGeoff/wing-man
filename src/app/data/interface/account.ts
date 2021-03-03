/* Defines the account entity */
export interface Account {
  id: number;
  name: string;
  website?: string;
  description: string;
  street: string;
  street2?: string;
  city: string;
  state: string;
  zip: number;
  country: string;
  taxId?: string;
  paymentTerms: string;
  email: string;
  phone: number;
  contactIds?: number[];
  groupIds?: number[];
}
