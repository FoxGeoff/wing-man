/* Defines the contact entity */
export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  website?: string;
  jobDescription: string;
  street: string;
  street2?: string;
  city: string;
  state: string;
  zip: number;
  country: string;
  email: string;
  phone: number;
  accountId: number;
}
