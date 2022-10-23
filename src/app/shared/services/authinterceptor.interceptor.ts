import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { localStorageKeys } from 'src/environments/localStorageKeys';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private persistanceService: PersistanceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.persistanceService.get(localStorageKeys.jwt);
    request = request.clone({
      setHeaders: {
        Authorization: token ? `${token}` : ''
      }
    })
    return next.handle(request);
  }
}
