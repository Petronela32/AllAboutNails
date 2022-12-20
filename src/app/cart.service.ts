import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cart$: BehaviorSubject<Cart> = new BehaviorSubject({});

  constructor() {
    const data = localStorage.getItem('cart');

    if (data) {
      this.cart$.next(JSON.parse(data));
    }
  }

  public addToCart(product: Product): void {
    const currentCart: Cart = this.cart$.getValue();

    if (currentCart[product.id]) {
      currentCart[product.id].count++;
    } else {
      currentCart[product.id] = {
        product,
        count: 1,
      };
    }

    localStorage.setItem('cart', JSON.stringify(currentCart));
    this.cart$.next(currentCart);
  }

  public deleteFromCart(product: Product): void {
    const currentCart: Cart = this.cart$.getValue();

    if (currentCart[product.id]) {
      if (currentCart[product.id].count > 1) {
        currentCart[product.id].count--;
      } else {
        delete currentCart[product.id];
      }
    }
    localStorage.setItem('cart', JSON.stringify(currentCart))
    this.cart$.next(currentCart);
  }

  public deleteAllFormProduct(product: Product): void {
    const currentCart: Cart = this.cart$.getValue();

    if(currentCart[product.id]) {
      delete currentCart[product.id];
    }

    localStorage.setItem('cart', JSON.stringify(currentCart));
    this.cart$.next(currentCart);
  }
}

export interface CartItem {
  product: Product;
  count: number;
}

export type Cart = Record<number, CartItem>;
