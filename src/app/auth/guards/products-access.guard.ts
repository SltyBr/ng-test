import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { localStorageKeys } from 'src/environments/localStorageKeys';

@Injectable({
  providedIn: 'root'
})
export class ProductsAccessGuard implements CanActivate {
  constructor(private persistanceService: PersistanceService, private toastr: ToastrService) {}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.persistanceService.get(localStorageKeys.jwt);
    if(JSON.stringify(token) === '{}') {
      this.toastr.error('You have to login first!')
      return false;
    }
    return true;
  }

}
