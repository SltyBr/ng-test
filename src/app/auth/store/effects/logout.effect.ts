import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';

import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { localStorageKeys } from 'src/environments/localStorageKeys';
import { logoutAction } from 'src/app/auth/store/actions/logout.action';
import { Router } from '@angular/router';

@Injectable()
export class LogoutEffect {
  logoutEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logoutAction),
      tap(() => {
        this.persistanceService.remove(localStorageKeys.jwt);
        this.persistanceService.remove(localStorageKeys.userId);
        this.router.navigate(['/login'])
      })
    )
  }, { dispatch: false });

  constructor(
    private actions$: Actions,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}
}
