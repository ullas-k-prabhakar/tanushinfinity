import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  imports: [NgIf, RouterLink, CurrencyPipe],
  template: `
    <section class="detail" *ngIf="product; else unavailable"><a routerLink="/" class="back-link">← Back to collection</a><div class="detail-layout"><div class="detail-image"><img [src]="product.image" [alt]="product.name"></div><article class="detail-copy"><p class="eyebrow">{{ product.category }}</p><h1>{{ product.name }}</h1><p class="detail-description">{{ product.description }}</p><p class="detail-price">{{ product.price | currency:'INR':'symbol':'1.0-0' }}</p><dl><div><dt>Size</dt><dd>{{ product.size }}</dd></div><div><dt>Availability</dt><dd>{{ product.count }} pieces in stock</dd></div><div><dt>Material</dt><dd>Hand-selected natural materials</dd></div></dl><button class="buy-button">Enquire about this piece <span>→</span></button></article></div></section>
    <ng-template #unavailable><section class="not-found"><p class="eyebrow">Not found</p><h1>This piece has moved on.</h1><a routerLink="/" class="text-link">Return to collection →</a></section></ng-template>
  `
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;
  constructor(private readonly route: ActivatedRoute, private readonly productService: ProductService) {}
  ngOnInit(): void { const id = Number(this.route.snapshot.paramMap.get('id')); this.productService.getProduct(id).subscribe(product => this.product = product); }
}
