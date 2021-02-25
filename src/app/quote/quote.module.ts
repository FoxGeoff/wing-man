import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesComponent } from './quotes/quotes.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';



@NgModule({
  declarations: [QuotesComponent, AddQuoteComponent],
  imports: [
    CommonModule
  ]
})
export class QuoteModule { }
