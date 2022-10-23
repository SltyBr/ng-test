import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponseInterface } from 'src/app/auth/types/authResponseInterface';
import { LoginRequestInterface } from 'src/app/auth/types/loginRequest.interface';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { UserProfileInterface } from 'src/app/shared/types/userProfile.interface';
import { loginRoute, userRoute } from 'src/environments/apiRoutesConfig';
import { localStorageKeys } from 'src/environments/localStorageKeys';

@Injectable()
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private persistanceService: PersistanceService
  ) {}

  login(data: LoginRequestInterface): Observable<AuthResponseInterface> {
    return this.httpClient.post<AuthResponseInterface>(loginRoute, data);
  }

  getUserProfile(): Observable<UserProfileInterface> {
    return this.httpClient.get<UserProfileInterface>(
      userRoute(this.persistanceService.get(localStorageKeys.userId))
    );
  }
}
