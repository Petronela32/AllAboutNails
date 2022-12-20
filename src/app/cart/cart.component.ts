import { Component, OnInit } from '@angular/core';
import { Cart, CartItem, CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public cart: Cart | undefined;

  constructor(private cartService: CartService) {}

  public get cartItems(): CartItem[] {
    return Object.values(this.cart || {});
  }

  public get totalPrice(): string {
    const total: number = Object.values(this.cart || {}).reduce(
      (sum, cartItem) => sum + cartItem.count * cartItem.product.price,
      0
    );
    return total.toFixed(2);
  }
  ngOnInit(): void {}
}
