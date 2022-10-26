import { Injectable } from '@angular/core';

@Injectable()
export class AuthHelperService {
  setLogoRoutePath(flag: boolean | null): string {
    const path = flag ? 'products' : 'login';
    return `/${path}`;
  }
}