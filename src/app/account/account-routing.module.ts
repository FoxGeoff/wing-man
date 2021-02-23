import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
