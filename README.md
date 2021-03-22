# WingMan

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Reference documents

1. (new route syntax) \Github\Ai_Project2020-3
2. Design: <https://material.io/develop/web>
3. Flex Layout <https://www.angularjswiki.com/flexlayout/basics>
4. Design: products list github/meanstack
5. Styling Applications with Angular Material <https://app.pluralsight.com/course-player?clipId=7bb21a82-ca21-46b5-ac8f-da93c462861e>
6. Styling Applications with Angular Material <https://github.com/ajtowf/styling-applications-with-angular-material>

### Best practices

```Javascript
/**
 * CORE MODULE
 * Core folder should contain singleton
 * services shared throughout app
 *
 * Services that are specific to a feature can
 * go in the feature's folder
 *
 * Example: LoggingService, ErrorService,
 * DataSerice
 */

/**
 * SHARED MODULE: Reusable components, pipes and directives
 *
 * Shared folder should contain reusable
 * components, pipes and directives
 *
 * Example: CalendarComponent,
 * AutoCompleteComponent
 */
```

### Task: Add Angular Material

1. Ref: <https://material.angular.io/guide/getting-started>
2. Run: ```ng add @angular/material```
3. Setup Material Module
4. Setup Core and Share folders ref: **github/sequelize_bookstore_finished**
5. Add: ui nav component

### Task: Add Flex Layout

1. Ref: <https://github.com/angular/flex-layout>
2. Run: ```npm i -s @angular/flex-layout @angular/cdk```
3. Update material.module
4. NOTE: RE-START THE SERVER IS REQUIRED
5. Test Ref: <https://github.com/angular/flex-layout/wiki/Declarative-API-Overview>

### Task: Add Accounts Component

1. HERE> Error: Cannot find module './account/account.module' DONE
2. NOTE: Lazy loading is updated to

```TypeScript
const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: 'invoices',
    loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule)
  },
  {
    path: '',
    redirectTo: 'customers',
    pathMatch: 'full'
  }
];
```

## Kanban Task: Accounts Component

1. Back button
2. ref <https://stackoverflow.com/questions/35446955/how-to-go-back-last-page>
3. ref<https://www.tektutorialshub.com/angular/angular-location-service/>
4. Add: nav menu items

### Task: Add: Accounts template

1. Add Mat Table
2. Ref:<https://material.angular.io/components/table/examples#table-overview>

### Task: Add: Add Account

### Task: Add: Add Contact

## Kanban Task: Add: Quotes Component

## Kanban Task: Products

### Task: Add Routing for - products, add-product, edit-product, product-details

### Task: Add Products template

1. Add Products data and display as list
2. install ```npm ng2-avatar```
3. Ref.<https://github.com/snics/ng2-avatar>

### Task: Add account-table component

1. Ref. <https://github.com/CodeMazeBlog/angular-material-series>
2. Ref. <https://github.com/CodeMazeBlog/angular-material-series/tree/material-table>

## Kanban Task: Add in memory api

### Task: run ```npm i angular-in-memory-web-api```

1. ref.: <https://www.npmjs.com/package/angular-in-memory-web-api>
2. reference code project: github/in-mem-db
3. reference code

```Typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// in-memmory-db
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data/data.service';

import { AppComponent } from './app.component';
import { ProductsComponent } from './product/products/products.component'; // TODO: change to accounts


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService, {delay: 1000})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Task: Add app-data

### Task: Add data files (dummy)

### Task: Update  in-memory-db data to "accounts"

1. Add accounts-list component
2. Material Table with select
3. Material Table with: details, update and delete
4. Code ref: <https://github.com/CodeMazeBlog/angular-material-series/blob/material-table/ang-material-OwnerAccount/src/app/owner/owner-list/owner-list.component.html>
5. Code ref. 'Styling Applications with Angular Material' for Mataerial Table

### Task: Add Environment folder and files

1. Ref. <https://github.com/CodeMazeBlog/angular-material-series/tree/material-table/ang-material-OwnerAccount/src>

### Task: Add scroll on redirect ```RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})```

### Task: Add navigation to page anchor -WIP

1. Ref. <https://stackoverflow.com/questions/36101756/angular2-routing-with-hashtag-to-page-anchor/36101788#36101788>
2. Ref <https://stackblitz.com/edit/solution-anchor-scrolling?file=src%2Fapp%2Fproduct%2Fproduct.component.ts>
3. ref <https://stackoverflow.com/questions/36101756/angular2-routing-with-hashtag-to-page-anchor>

### Task: Convert to template form Add Account

### Task: Add scrolltop service (doen't work)

1. <https://auralinna.blog/post/2018/scroll-to-top-on-angular-route-change/>

### Task: Add scroll to top on page load (smooth scrolling)

1. Ref.<https://github.com/FoxGeoff/ScrollTop>
2. Ref. How to implement RouteReuseStrategy shouldDetach for specific routes in Angular 2 <https://stackoverflow.com/questions/41280471/how-to-implement-routereusestrategy-shoulddetach-for-specific-routes-in-angular#41515648>

### Task: Add scroll to top button

1. Ref. <https://github.com/bartholomej/ngx-scrolltop>
2. run. ```ng add ngx-scrolltop```.
3. NOTE: Not working. Nedd to follow up

### Task: Add CRUD to in-memory-db-api

1. Ref. <https://oraclefrontovik.com/2020/01/19/angular-crud-1-in-memory-web-api-installation-and-configuration/>

### Task: mat-table column widths

1. Ref. <https://www.freakyjolly.com/angular-material-table-column-width-customization/>

### Task: Add contacts.component.ts GUI and code

### Task: Add contact data from in-mem-db-api

### Task: Add back end node/express and Sqlite database
