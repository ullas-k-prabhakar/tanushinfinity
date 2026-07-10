import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { SlideshowComponent } from '../slideshow/slideshow.component';
import { ProductTileComponent } from '../product-tile/product-tile.component';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, NgFor, NgIf, SlideshowComponent, ProductTileComponent],
  template: `
    <section class="hero-intro"><p class="eyebrow">Curated interiors · 2026</p><h1>Objects that make<br><i>home</i> feel like yours.</h1><p class="intro-copy">A considered collection of furniture made for slow mornings, warm gatherings and every ordinary moment in between.</p><a class="text-link" href="#products">Explore the collection <span>→</span></a></section>
    <ng-container *ngIf="products$ | async as products; else loading">
      <app-slideshow [products]="products"></app-slideshow>
      <section class="product-section" id="products">
        <div class="section-heading"><div><p class="eyebrow">The collection</p><h2>Latest arrivals</h2></div><p>{{ products.length }} pieces selected with intention</p></div>
        <div class="product-grid"><app-product-tile *ngFor="let product of products" [product]="product"></app-product-tile></div>
      </section>
    </ng-container>
    <ng-template #loading><p class="loading">Gathering the collection…</p></ng-template>
  `
})
export class HomeComponent implements OnInit {
  products$!: Observable<Product[]>;
  constructor(private readonly productService: ProductService) {}
  ngOnInit(): void { this.products$ = this.productService.getProducts(); }
}
