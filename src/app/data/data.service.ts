import { Injectable } from '@angular/core';

import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Account } from './Models/account';
import { Product } from './interface/product';
import { ProductCategory } from './interface/product-category';
import { Supplier } from './interface/supplier';
import { ProductCategoryData } from './product-category-data';
import { AccountData } from './account.data';
import { ProductData } from './product-data';
import { SupplierData } from './supplier-data';
import { Contact } from './Models/contact';
import { ContactData } from './Models/contact.data';


@Injectable()
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb(reqInfo?: RequestInfo): {
    accounts: Account[],
    products: Product[],
    productCategories: ProductCategory[],
    suppliers: Supplier[],
    contacts: Contact[]
  } | Observable<{}> | Promise<{}> {
    const accounts = AccountData.accounts;
    const products = ProductData.products;
    const productCategories = ProductCategoryData.categories;
    const suppliers = SupplierData.suppliers;
    const contacts = ContactData.contacts;
    return { accounts, products, productCategories, suppliers, contacts };
  }
}
