import { Component, OnInit } from '@angular/core';
import { abort } from 'process';

export interface Product {
  id: number;
  avatar: string;
  name: string;
  price: number;
  unit: string;
  description: string;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    { id: 1, avatar: 'A S', name: 'Aluminum Sheet', price: 2.00, unit: 'sq in', description: '0.004 inch thick clad' },
    { id: 1, avatar: 'A S', name: 'Aluminum Sheet', price: 2.00, unit: 'sq in', description: '0.004 inch thick clad' },
    { id: 1, avatar: 'A S', name: 'Aluminum Sheet', price: 2.00, unit: 'sq in', description: '0.004 inch thick clad' },
    { id: 1, avatar: 'A S', name: 'Aluminum Sheet', price: 2.00, unit: 'sq in', description: '0.004 inch thick clad' },
    { id: 1, avatar: 'A S', name: 'Aluminum Sheet', price: 2.00, unit: 'sq in', description: '0.004 inch thick clad' },
    { id: 1, avatar: 'A S', name: 'Aluminum Sheet', price: 2.00, unit: 'sq in', description: '0.004 inch thick clad' },
    { id: 1, avatar: 'A S', name: 'Aluminum Sheet', price: 2.00, unit: 'sq in', description: '0.004 inch thick clad' },
    { id: 1, avatar: 'A S', name: 'Aluminum Sheet', price: 2.00, unit: 'sq in', description: '0.004 inch thick clad' },
    { id: 1, avatar: 'A S', name: 'Aluminum Sheet', price: 2.00, unit: 'sq in', description: '0.004 inch thick clad' },
    { id: 1, avatar: 'A S', name: 'Aluminum Sheet', price: 2.00, unit: 'sq in', description: '0.004 inch thick clad' },
    { id: 1, avatar: 'A S', name: 'Aluminum Sheet', price: 2.00, unit: 'sq in', description: '0.004 inch thick clad' },
    { id: 1, avatar: 'A S', name: 'Aluminum Sheet', price: 2.00, unit: 'sq in', description: '0.004 inch thick clad' },
    { id: 1, avatar: 'A S', name: 'Aluminum Sheet', price: 2.00, unit: 'sq in', description: '0.004 inch thick clad' },
    { id: 1, avatar: 'A S', name: 'Aluminum Sheet', price: 2.00, unit: 'sq in', description: '0.004 inch thick clad' },
    { id: 1, avatar: 'A S', name: 'Aluminum Sheet', price: 2.00, unit: 'sq in', description: '0.004 inch thick clad' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
