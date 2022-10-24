import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersistanceService {
  set(key: string, data: any) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error while setting field ', error);
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key) || '{}');
    } catch (error) {
      console.error('Error while getting field ', error);
      return null;
    }
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}
