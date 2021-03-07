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
  },  {
    path: 'products',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  }, {
    path: '',
    redirectTo: 'accounts',
    pathMatch: 'full'
  }
];

@NgModule({
  /** https://stackoverflow.com/questions/39601026/angular-2-scroll-to-top-on-route-change
   * https://angular.io/api/router/ExtraOptions#scrollPositionRestoration
   */
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
