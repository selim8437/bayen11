import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor() { }
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  private updateCartCount() {
    const currentCount = this.cartItemsSubject.value.length;
    this.cartCountSubject.next(currentCount);
  }
  deleteFromCart(item: any) {
    const currentItems = this.cartItemsSubject.value;
    const indexOfItem = currentItems.findIndex((cartItem) => cartItem.name === item.name);

    if (indexOfItem !== -1) {
      const updatedItems = [...currentItems.slice(0, indexOfItem), ...currentItems.slice(indexOfItem + 1)];
      this.cartItemsSubject.next(updatedItems);
      this.updateCartCount();
    }
  }
  

  addToCartItem(item: any) {
    const currentItems = this.cartItemsSubject.value;
    const newItems = [...currentItems, item];
    this.cartItemsSubject.next(newItems);
    this.updateCartCount() ;
  }
}
