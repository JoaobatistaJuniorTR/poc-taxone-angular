import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  setItem = (key: string, value: any): void => {
    localStorage.setItem(key, value);
  };

  getItem = (key: string) => {
    return localStorage.getItem(key);
  };

  setObject = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  getObject = (key: string): any => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key) || '');
    }
    return null;
  };

  removeItem = (key: string) => {
    localStorage.removeItem(key);
  };

  clear = (): void => {
    localStorage.clear();
  };
}
