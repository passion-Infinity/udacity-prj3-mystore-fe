import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'http://localhost:4200/assets/data.json';
  selectedProduct$ = new BehaviorSubject<Product | any>(null);
  productItem: Product | any;

  constructor(private http: HttpClient) {
    this.getFromStorage();
  }

  private getFromStorage() {
    this.productItem = JSON.parse(window.localStorage.getItem('productItem') || '{}');
  }

  updateStorage() {
    window.localStorage.setItem('productItem', JSON.stringify(this.productItem));
  }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
