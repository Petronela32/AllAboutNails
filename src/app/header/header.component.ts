import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchValue: string = '';

  snackBar: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
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

  // searchChange(ev: Event): void {
  //   this.searchValue = ev.target as HTMLInputElement).value;
  // }

  searchProduct(): void {
    if (!this.searchValue) {
      this.showMessage();
    } else {
      this.router.navigate(['/search', this.searchValue]);
    }
  }

  showMessage(): void {
    this.snackBar.open('Enter name of product', '', { duration: 4000 });
  }

  onSearchInput(ev: KeyboardEvent): void {
    if (ev.key === 'Enter') {
      this.searchProduct;
    }
  }

  clearValue(): void {
    this.searchValue = '';
  }
}
