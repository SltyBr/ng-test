import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from 'src/app/shared/services/product.service';
import { EffectsModule } from '@ngrx/effects';
import { GetProductEffect } from 'src/app/product/store/effects/getProduct.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/product/store/reducers';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(routes)
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
