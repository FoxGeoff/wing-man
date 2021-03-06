import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../../data/Models/account';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {

  accounts: Account[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAccounts()
      .subscribe(
        (data: Account[]) => {
          console.log(data);
          this.accounts = data;
        }
      );
  }

  deleteAccount(id: number) {

    this.accountService.deleteAccount(id).subscribe((ret) => {
      console.log('Account deleted: ', ret);
    })
  }

  updateAccount(account: Account) {

    // because we are using interface instead of class
    // https://stackoverflow.com/questions/13142635/how-can-i-create-an-object-based-on-an-interface-file-definition-in-typescript
    // If you want an empty object of an interface, you can do just:
    // tslint:disable-next-line:prefer-const
    const accounts = {} as Account[]; // an  empty object of type Property

    const newAccount: Account = {
      id: account.id,
      name: 'Acme Carpet Cleaning',
      website: 'acme.com',
      description: 'A local carpet cleaning service',
      street: '456 Main St.',
      city: 'San Diego',
      state: 'CA',
      zip: 93125,
      country: 'USA',
      taxId: 'T124-456-7777',
      paymentTerms: '30Net',
      email: 'sales@acme-carpet.com',
      phone: 619333475
    }

    this.accountService.updateAccount(newAccount).subscribe((ret) => {
      console.log('Account updated: ', ret);
    });
  }
}
