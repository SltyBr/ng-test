import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CartComponent } from './components/cart/cart.component';

import { SalePriceModule } from 'src/app/shared/pipes/sale-price/sale-price.module';
import { reducers } from 'src/app/cart/store/reducers';

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
    SalePriceModule,
    MatButtonModule
  ]
})
export class CartModule { }
