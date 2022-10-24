import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import {
  getProductsAction,
  getProductsFailureAction,
  getProductsSuccessAction,
} from 'src/app/products/store/actions/getProducts.action';
import { ProductsService } from 'src/app/products/services/products.service';
import { ProductsResponseInterface } from 'src/app/products/types/productsResponse.interface';

@Injectable()
export class GetProductsEffect {
  getProductsEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getProductsAction),
      switchMap(({url}) => {
        return this.productsService.getProducts(url).pipe(
          map((response: ProductsResponseInterface) => {
            return getProductsSuccessAction({
              products: response,
            });
          }),
          catchError(() => {
            return of(getProductsFailureAction());
          })
        );
      })
    );
  });

  constructor(
    public actions$: Actions,
    private productsService: ProductsService
  ) {}
}
