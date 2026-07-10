import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<Product[]> { return this.http.get<Product[]>('assets/data/products.json'); }
  getProduct(id: number): Observable<Product | undefined> { return this.getProducts().pipe(map(products => products.find(product => product.id === id))); }
}
