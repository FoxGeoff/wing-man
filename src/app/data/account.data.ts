import { Account } from './Models/account';

export class AccountData {

  static accounts: Account[] = [
    {
      id: 1,
      name: 'Acme Carpet Cleaning',
      website: 'acme.com',
      description: 'A local carpet cleaning service',
      street: '123 Main St.',
      city: 'San Diego',
      state: 'CA',
      zip: 93125,
      country: 'USA',
      taxId: 'T124-456-7777',
      paymentTerms: '30Net',
      email: 'sales@acme.com',
      phone: 6193334751
    }, {
      id: 2,
      name: 'Bee Property Management',
      website: 'bee.com',
      description: 'Business park "bee"',
      street: '123 Main St.',
      city: 'San Diego',
      state: 'CA',
      zip: 93125,
      country: 'USA',
      taxId: 'T124-456-7777',
      paymentTerms: '30Net',
      email: 'sales@bee.com',
      phone: 6195642222
    }, {
      id: 3,
      name: 'GSA',
      website: 'gsa-serv.com',
      description: 'Federal Services',
      street: '123 Main St.',
      city: 'San Diego',
      state: 'CA',
      zip: 93125,
      country: 'USA',
      taxId: 'T124-456-7777',
      paymentTerms: '30Net',
      email: 'sales@gsa-serv.com',
      phone: 8003336575
    }
  ];
}
