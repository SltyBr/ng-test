import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { AuthService } from 'src/app/auth/services/auth.service';
import { AuthResponseInterface } from 'src/app/auth/types/authResponseInterface';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from 'src/app/auth/store/actions/login.action';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { Router } from '@angular/router';
import { localStorageKeys } from 'src/environments/localStorageKeys';

@Injectable()
export class LoginEffect {
  loginEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((response: AuthResponseInterface) => {
            this.persistanceService.set(localStorageKeys.jwt, response.token);
            this.persistanceService.set(localStorageKeys.userId, response.id);
            return loginSuccessAction({
              userProfile: response,
            });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              loginFailureAction({
                error: errorResponse.error,
              })
            );
          })
        );
      })
    );
  });

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => this.router.navigateByUrl('/products'))
      ),
    { dispatch: false }
  );

  constructor(
    public actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}
}
