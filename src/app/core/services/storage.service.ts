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

  removeItem = (key: string) => {
    localStorage.removeItem(key);
  };

  clear = (): void => {
    localStorage.clear();
  };
}
