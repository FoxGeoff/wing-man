import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { ContactsComponent } from './contacts/contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';



@NgModule({
  declarations: [ContactsComponent, AddContactComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ContactRoutingModule,
    NgxScrollTopModule
  ]
})
export class ContactModule { }
