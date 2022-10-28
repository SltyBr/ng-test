import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import { getUserProfileSuccessAction, getUserProfileTokenExpiredAction } from 'src/app/auth/store/actions/getUserProfile.action';
import { loginSuccessAction } from 'src/app/auth/store/actions/login.action';
import { logoutAction } from 'src/app/auth/store/actions/logout.action';
import {
  addToCartAction,
  deleteFromCartAction,
} from 'src/app/cart/store/actions/cart.action';
import {
  getProductFailureAction,
  getProductSuccessAction,
} from 'src/app/product/store/actions/getProduct.action';
import { getProductsSuccessAction } from 'src/app/products/store/actions/getProducts.action';

@Injectable()
export class AlertEffects {
  afterLoginSuccessEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() =>
          this.toastr.success('Login success!', '', {
            timeOut: 1000,
          })
        )
      ),
    { dispatch: false }
  );

  getProductsSuccessEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getProductsSuccessAction),
        tap(() =>
          this.toastr.success('Products loaded!', '', {
            timeOut: 1000,
          })
        )
      ),
    { dispatch: false }
  );

  getProductSuccessEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getProductSuccessAction),
        tap(() =>
          this.toastr.success('Product loaded!', '', {
            timeOut: 1000,
          })
        )
      ),
    { dispatch: false }
  );

  getProductFailureEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getProductFailureAction),
        tap(() =>
          this.toastr.error('Fetch product failed!', '', {
            timeOut: 1000,
          })
        )
      ),
    { dispatch: false }
  );

  logoutEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutAction),
        tap(() =>
          this.toastr.success('Logout successful!', '', {
            timeOut: 1000,
          })
        )
      ),
    { dispatch: false }
  );

  addToCartEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addToCartAction),
        tap(() =>
          this.toastr.success('Product successfully added to cart!', '', {
            timeOut: 1000,
          })
        )
      ),
    { dispatch: false }
  );

  deleteFromCartEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteFromCartAction),
        tap(() =>
          this.toastr.success('Product successfully deleted!', '', {
            timeOut: 1000,
          })
        )
      ),
    { dispatch: false }
  );

  toeknExpiredEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getUserProfileTokenExpiredAction),
        tap(() =>
          this.toastr.warning('Token Expired!', '', {
            timeOut: 3000,
          })
        )
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private toastr: ToastrService) {}
}
