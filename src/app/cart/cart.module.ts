import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/cart/store/reducers';
import { MatListModule } from '@angular/material/list';
import { SalePricePipe } from 'src/app/shared/pipes/sale-price/sale-price.pipe';
import { SalePriceModule } from 'src/app/shared/pipes/sale-price/sale-price.module';

const routes: Routes = [
  {path: 'cart', component: CartComponent}
]

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('cart', reducers),
    EffectsModule.forFeature([]),
    MatListModule,
    SalePriceModule
  ]
})
export class CartModule { }
