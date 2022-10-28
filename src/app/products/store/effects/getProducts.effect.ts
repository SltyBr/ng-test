import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import {
  getProductsAction,
  getProductsFailureAction,
  getProductsSuccessAction,
} from 'src/app/products/store/actions/getProducts.action';
import { ProductsService } from 'src/app/products/services/products.service';
import { ProductsResponseInterface } from 'src/app/products/types/productsResponse.interface';
import { getUserProfileTokenExpiredAction } from 'src/app/auth/store/actions/getUserProfile.action';

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
          catchError((e) => {
            if (e.error.name === "TokenExpiredError") {
              return of(getUserProfileTokenExpiredAction())
            }
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
