import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { AuthService } from 'src/app/auth/services/auth.service';
import { AuthResponseInterface } from 'src/app/auth/types/authResponseInterface';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
  getUserProfileTokenExpiredAction,
} from 'src/app/auth/store/actions/getUserProfile.action';
import { localStorageKeys } from 'src/environments/localStorageKeys';
import { Router } from '@angular/router';

@Injectable()
export class GetUserProfileEffect {
  getUserProfileEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getUserProfileAction),
      switchMap(() => {
        const token = this.persistanceService.get(localStorageKeys.jwt);
        if (JSON.stringify(token) === '{}') {
          return of(getUserProfileFailureAction());
        }
        return this.authService.getUserProfile().pipe(
          map((response: AuthResponseInterface) => {
            return getUserProfileSuccessAction({
              userProfile: response,
            });
          }),
          catchError((e) => {
            if (e.error.name === 'TokenExpiredError') {
              return of(getUserProfileTokenExpiredAction());
            }
            return of(getUserProfileFailureAction());
          })
        );
      })
    );
  });

  redirectOnTokenExpiredEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getUserProfileTokenExpiredAction, getUserProfileFailureAction),
        tap(() => {
          this.persistanceService.remove(localStorageKeys.jwt);
          this.persistanceService.remove(localStorageKeys.userId);
          this.router.navigateByUrl('/login');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}
}
