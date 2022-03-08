import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LonestarService {
  private readonly client = 'req2';

  userClient() {
    return this.client;
  }
}
