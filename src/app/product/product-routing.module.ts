import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from '../product/add-product/add-product.component';
import { ProductDetailsComponent } from '../product/product-details/product-details.component';
import { ProductsComponent } from '../product/products/products.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [{
  // http://localhost:4200/products
  path: '',
  pathMatch: 'full',
  component: ProductsComponent
}, {
  // http://localhost:4200/products/add-product
  path: 'add-product',
  pathMatch: 'full',
  component: AddProductComponent
},  {
  // http://localhost:4200/products/edit-product
  path: 'edit-product',
  pathMatch: 'full',
  component: EditProductComponent
}, {
  // http://localhost:4200/products/product-details
  path: 'product-details',
  pathMatch: 'full',
  component: ProductDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
