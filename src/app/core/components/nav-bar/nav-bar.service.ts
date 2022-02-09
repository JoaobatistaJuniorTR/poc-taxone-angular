import { Injectable } from '@angular/core';
import { BentoToolbarItem } from '@bento/bento-ng';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  private menuItemsSource = new BehaviorSubject<BentoToolbarItem[]>([]);

  menuItems = this.menuItemsSource.asObservable();

  changeMenuItems(items: BentoToolbarItem[]) {
    this.menuItemsSource.next(items);
  }
}
