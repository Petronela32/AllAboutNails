import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  // public getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>('https://fakestoreapi.com/products');
  // }

  // public getProduct(id: number): Observable<Product> {
  //   return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`);
  // }

  // public getCategories(): Observable<string[]> {
  //   return this.http.get<string[]>(
  //     'https://fakestoreapi.com/products/categories'
  //   );
  // }

  // public getCategoryProducts(categoryName: string): Observable<Product[]> {
  //   return this.http.get<Product[]>(
  //     `https://fakestoreapi.com/products/category/${categoryName}`
  //   );
  // }
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
