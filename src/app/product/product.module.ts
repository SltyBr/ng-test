import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

import { reducers } from 'src/app/product/store/reducers';
import { GetProductEffect } from 'src/app/product/store/effects/getProduct.effect';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path: 'products/:id',
    component: ProductComponent
  }
]

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetProductEffect]),
    StoreModule.forFeature('product', reducers),
    RouterModule.forChild(routes),
    SwiperModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
