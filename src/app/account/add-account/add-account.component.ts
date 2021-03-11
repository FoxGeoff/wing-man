import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Account } from '../../data/Models/account';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveAccount(formValues: any): void {
    const newAccount: Account = formValues as Account;
    console.log(JSON.stringify(newAccount));
    this.router.navigate(['/contacts/add-contact']);
    /*
     this.accountService.createAccount(newAccount)
       .subscribe(
         (data: Account) => console.log(data),
         (err: any) => console.log(err),
         () => this.router.navigate(['/contacts/add-contact'], {fragment: 'home'})
       );
    */
  }

}
