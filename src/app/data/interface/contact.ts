/* Defines the contact entity */
export interface Contact {
  id: number;
  firstName: string;
  LastName: string;
  website?: string;
  jobDescription: string;
  street: string;
  street2?: string;
  city: string;
  state: string;
  zip: number;
  country: string;
  taxId?: number;
  paymentTerms: string;
  emailPrime: number;
  phonePrime: number;
  accountId: number;
}
