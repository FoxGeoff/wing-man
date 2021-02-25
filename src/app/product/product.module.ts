import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';



@NgModule({
  declarations: [ProductsComponent, ProductDetailsComponent, EditProductComponent, AddProductComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
