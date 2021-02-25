import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesComponent } from './quotes/quotes.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { QuoteRoutingModule } from './quote-routing.module';
import { QuoteCalculatorComponent } from './quote-calculator/quote-calculator.component';

@NgModule({
  declarations: [QuotesComponent, AddQuoteComponent, QuoteCalculatorComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    QuoteRoutingModule
  ]
})
export class QuoteModule { }
