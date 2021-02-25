import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'accounts',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  }, {
    path: 'contacts',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  }, {
    path: 'quotes',
    loadChildren: () => import('./quote/quote.module').then(m => m.QuoteModule)
  }, {
    path: '',
    redirectTo: 'accounts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
