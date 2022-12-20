import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cart, CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public q: string = '';
  public cartItems: number = 0;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.cartService.cart$.subscribe((cart: Cart) => {
        this.cartItems = Object.values(cart).reduce(
          (sum, cartItem) => sum + cartItem.count,
          0
        );
      })
    );

    this.subscriptions.add(
      this.activatedRoute.queryParamMap.subscribe((queryMap) => {
        this.q = queryMap.get('q') || '';
      })
    );
    const navBar = document.getElementById('nav-bar');

    const navBarPosition = navBar.offsetTop;

    window.addEventListener('scroll', () => {
      if (window.scrollY > navBarPosition) {
        navBar.classList.add('active');
      } else {
        navBar.classList.remove('active');
      }
    });
  }

  public search(ev: Event): void {
    this.q = (event.target as HTMLInputElement).value;

    this.router.navigate([], {
      queryParams: {
        q: this.q,
      },
      queryParamsHandling: 'merge',
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
