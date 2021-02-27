import { Component, OnInit } from '@angular/core';

export interface Quote {
  id: number;
  name: string;
  price: number;
  unit: string;
  description: string;
}
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  constructor() { }

  quotes: Quote[] = [
    { id: 1, name: 'Aluminium', price: 2.99, unit: 'sq inch', description: '0.004" thick clad sheet' },
    { id: 1, name: 'Aluminium', price: 2.99, unit: 'sq inch', description: '0.004" thick clad sheet' },
    { id: 1, name: 'Aluminium', price: 2.99, unit: 'sq inch', description: '0.004" thick clad sheet' },
    { id: 1, name: 'Aluminium', price: 2.99, unit: 'sq inch', description: '0.004" thick clad sheet' },
    { id: 1, name: 'Aluminium', price: 2.99, unit: 'sq inch', description: '0.004" thick clad sheet' },
    { id: 1, name: 'Aluminium', price: 2.99, unit: 'sq inch', description: '0.004" thick clad sheet' },
    { id: 1, name: 'Aluminium', price: 2.99, unit: 'sq inch', description: '0.004" thick clad sheet' },
    { id: 1, name: 'Aluminium', price: 2.99, unit: 'sq inch', description: '0.004" thick clad sheet' },
    { id: 1, name: 'Aluminium', price: 2.99, unit: 'sq inch', description: '0.004" thick clad sheet' },
    { id: 1, name: 'Aluminium', price: 2.99, unit: 'sq inch', description: '0.004" thick clad sheet' },
    { id: 1, name: 'Aluminium', price: 2.99, unit: 'sq inch', description: '0.004" thick clad sheet' },
    { id: 1, name: 'Aluminium', price: 2.99, unit: 'sq inch', description: '0.004" thick clad sheet' },
    { id: 1, name: 'Aluminium', price: 2.99, unit: 'sq inch', description: '0.004" thick clad sheet' },
    { id: 1, name: 'Aluminium', price: 2.99, unit: 'sq inch', description: '0.004" thick clad sheet' },
    { id: 1, name: 'Aluminium', price: 2.99, unit: 'sq inch', description: '0.004" thick clad sheet' },
    { id: 1, name: 'Aluminium', price: 2.99, unit: 'sq inch', description: '0.004" thick clad sheet' },
    { id: 1, name: 'Aluminium', price: 2.99, unit: 'sq inch', description: '0.004" thick clad sheet' },
    { id: 1, name: 'Aluminium', price: 2.99, unit: 'sq inch', description: '0.004" thick clad sheet' },
    { id: 1, name: 'Aluminium', price: 2.99, unit: 'sq inch', description: '0.004" thick clad sheet' },
    { id: 1, name: 'Aluminium', price: 2.99, unit: 'sq inch', description: '0.004" thick clad sheet' },
    { id: 1, name: 'Aluminium', price: 2.99, unit: 'sq inch', description: '0.004" thick clad sheet' },
    { id: 1, name: 'Aluminium', price: 2.99, unit: 'sq inch', description: '0.004" thick clad sheet' },
  ];
  ngOnInit(): void {
  }

}
