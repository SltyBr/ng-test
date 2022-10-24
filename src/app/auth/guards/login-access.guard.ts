import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { localStorageKeys } from 'src/environments/localStorageKeys';

@Injectable({
  providedIn: 'root'
})
export class LoginAccessGuard implements CanActivate {
  constructor(private persistanceService: PersistanceService, private router: Router) {}
  canActivate(): boolean {
    const token = this.persistanceService.get(localStorageKeys.jwt)
    if (JSON.stringify(token) !== '{}') {
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }

}
