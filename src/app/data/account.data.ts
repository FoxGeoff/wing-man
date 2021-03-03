import { AccountModule } from '../account/account.module';
import { Account } from './interface/account';

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
      email: 'sales@AccountModule.com',
      phone: 619333475
    }, {
      id: 2,
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
      email: 'sales@AccountModule.com',
      phone: 619333475
    }, {
      id: 3,
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
      email: 'sales@AccountModule.com',
      phone: 619333475
    }
  ];
}
