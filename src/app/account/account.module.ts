import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';

import { AccountsComponent } from './accounts/accounts.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';



@NgModule({
  declarations: [
    AccountsComponent,
    AddAccountComponent,
    AccountDetailsComponent,
    AccountsListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
