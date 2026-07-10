import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-tile',
  imports: [RouterLink, CurrencyPipe],
  template: `
    <article class="product-card"><a [routerLink]="['/product', product.id]" class="product-image"><img [src]="product.image" [alt]="product.name"><span>{{ product.category }}</span></a><div class="product-card-body"><div><h3>{{ product.name }}</h3><p>{{ product.description }}</p></div><div class="card-bottom"><strong>{{ product.price | currency:'INR':'symbol':'1.0-0' }}</strong><a [routerLink]="['/product', product.id]" aria-label="View details">↗</a></div></div></article>
  `
})
export class ProductTileComponent { @Input({ required: true }) product!: Product; }
