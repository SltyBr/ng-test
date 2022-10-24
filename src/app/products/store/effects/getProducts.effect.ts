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
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { localStorageKeys } from 'src/environments/localStorageKeys';
import { logoutAction } from 'src/app/auth/store/actions/logout.action';

@Injectable()
export class GetProductsEffect {
  getProductsEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getProductsAction),
      switchMap(({url}) => {
        const token = this.persistanceService.get(localStorageKeys.jwt);
        if (JSON.stringify(token) === '{}') {
          console.log('case');
          return of(logoutAction());
        }
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
    private productsService: ProductsService,
    private persistanceService: PersistanceService
  ) {}
}
