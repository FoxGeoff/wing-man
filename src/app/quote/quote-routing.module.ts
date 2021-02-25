import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { QuoteCalculatorComponent } from './quote-calculator/quote-calculator.component';

import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [{
  // http://localhost:4200/quotes
  path: '',
  pathMatch: 'full',
  component: QuotesComponent
}, {
  // http://localhost:4200/quotes/add-quote
  path: 'add-quote',
  pathMatch: 'full',
  component: AddQuoteComponent
}, {
  // http://localhost:4200/quotes/quote-calculator
  path: 'quote-calculator',
  pathMatch: 'full',
  component: QuoteCalculatorComponent
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteRoutingModule { }
