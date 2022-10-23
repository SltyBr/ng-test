import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsService } from 'src/app/products/services/products.service';
import { GetProductsEffect } from 'src/app/products/store/effects/getProducts.effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { reducers } from 'src/app/products/store/reducers';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetProductsEffect]),
    StoreModule.forFeature('products', reducers),
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [ProductsService],
})
export class ProductsModule {}
