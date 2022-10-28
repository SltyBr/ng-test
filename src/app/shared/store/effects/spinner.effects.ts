import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs/operators';
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
  getUserProfileTokenExpiredAction,
} from 'src/app/auth/store/actions/getUserProfile.action';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from 'src/app/auth/store/actions/login.action';
import { logoutAction } from 'src/app/auth/store/actions/logout.action';
import {
  getProductAction,
  getProductFailureAction,
  getProductSuccessAction,
} from 'src/app/product/store/actions/getProduct.action';
import {
  getProductsAction,
  getProductsFailureAction,
  getProductsSuccessAction,
} from 'src/app/products/store/actions/getProducts.action';

@Injectable()
export class SpinnerEffects {
  spinneron$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          loginAction,
          getProductsAction,
          getUserProfileAction,
          getProductAction
        ),
        tap(() => this.spinner.show())
      ),
    { dispatch: false }
  );

  spinneroff$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          logoutAction,
          loginSuccessAction,
          loginFailureAction,
          getUserProfileSuccessAction,
          getUserProfileFailureAction,
          getProductsFailureAction,
          getProductsSuccessAction,
          getProductSuccessAction,
          getProductFailureAction,
          getUserProfileTokenExpiredAction
        ),
        tap(() => {
          this.spinner.hide();
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private spinner: NgxSpinnerService) {}
}
