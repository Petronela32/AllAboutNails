import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public q: string = '';
  public cartItems: number = 0;
  private subscriptions: Subscription = new Subscription();
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    // const navBar = document.getElementById('nav-bar');

    // const navBarPosition = navBar.offsetTop;

    // window.addEventListener('scroll', () => {
    //   if (window.scrollY > navBarPosition) {
    //     navBar.classList.add('active');
    //   } else {
    //     navBar.classList.remove('active');
    //   }
    // });
  }

  // search(ev: Event): void {
  //   this.q = (event.target as HTMLElement).value;

  //   this.router.navigate([], {
  //     queryParams: {
  //       q: this.q,
  //     },
  //     queryParamsHandling: 'merge',
  //   });
  // }

}
