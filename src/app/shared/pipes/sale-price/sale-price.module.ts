import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalePricePipe } from 'src/app/shared/pipes/sale-price/sale-price.pipe';



@NgModule({
  declarations: [SalePricePipe],
  imports: [
    CommonModule
  ],
  exports: [SalePricePipe]
})
export class SalePriceModule { }
