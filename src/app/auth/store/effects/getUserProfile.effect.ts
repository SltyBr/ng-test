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
} from 'src/app/auth/store/actions/getUserProfile.action';
import { localStorageKeys } from 'src/environments/localStorageKeys';

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
          catchError(() => {
            return of(getUserProfileFailureAction());
          })
        );
      })
    );
  });

  constructor(
    public actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}
}
