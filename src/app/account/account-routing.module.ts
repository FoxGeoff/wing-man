import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AddAccountComponent } from './add-account/add-account.component';



const routes: Routes = [{
  // http://localhost:4200/accounts
  path: '',
  pathMatch: 'full',
  component: AccountsComponent
}, {
  // http://localhost:4200/accounts/add-account
  path: 'add-account',
  pathMatch: 'full',
  component: AddAccountComponent
}, {
  // http://localhost:4200/accounts/account-details
  path: 'account-details',
  pathMatch: 'full',
  component: AccountDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
