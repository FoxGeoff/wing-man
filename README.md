# WingMan

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Reference documents

1. (new route syntax) \Github\Ai_Project2020-3
2. Design: <https://material.io/develop/web>
3. Flex Layout <https://www.angularjswiki.com/flexlayout/basics>

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

1. HERE> Error: Cannot find module './account/account.module'
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
