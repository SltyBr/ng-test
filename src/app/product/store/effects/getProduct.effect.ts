import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { getUserProfileTokenExpiredAction } from 'src/app/auth/store/actions/getUserProfile.action';
import { getProductAction, getProductFailureAction, getProductSuccessAction } from 'src/app/product/store/actions/getProduct.action';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductInterface } from 'src/app/shared/types/product.interface';

@Injectable()
export class GetProductEffect {
  getProductEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getProductAction),
      switchMap(({id}) => {
        return this.productService.getProduct(id).pipe(
          map((response: ProductInterface) => {
            return getProductSuccessAction({
              product: response,
            });
          }),
          catchError((e) => {
            if (e.error.name === "TokenExpiredError") {
              return of(getUserProfileTokenExpiredAction())
            }
            return of(getProductFailureAction({error: 'Something went wrong'}));
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
