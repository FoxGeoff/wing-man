import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactsComponent } from './contacts/contacts.component';


const routes: Routes = [{
  // http://localhost:4200/contacts
  path: '',
  pathMatch: 'full',
  component: ContactsComponent
}, {
  // http://localhost:4200/contacts/add-contact
  path: 'add-contact',
  pathMatch: 'full',
  component: AddContactComponent
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
