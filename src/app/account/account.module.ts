import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';

import { AccountsComponent } from './accounts/accounts.component';
import { AddAccountComponent } from './add-account/add-account.component';



@NgModule({
  declarations: [
    AccountsComponent,
    AddAccountComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
