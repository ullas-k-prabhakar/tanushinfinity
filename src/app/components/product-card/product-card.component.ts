import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCategory } from '../../models/product-category';

@Component({ selector:'app-product-card', imports:[RouterLink], template:`
  <article class="category-card">
    <div class="icon" role="img" [attr.aria-label]="category.name + ' icon'">{{ category.image }}</div>
    <div class="card-body"><h2>{{ category.name }}</h2><p>{{ category.description }}</p><h3>Sample products</h3><ul>@for (item of category.sampleProducts.slice(0,4); track item) {<li>{{ item }}</li>}</ul></div>
    <div class="card-actions"><a [routerLink]="['/products', category.slug]" class="button button-light">View details</a><a [href]="'https://wa.me/910000000000?text=I%20want%20to%20enquire%20about%20' + category.name" class="button">Enquire</a></div>
  </article>` })
export class ProductCardComponent { @Input({required:true}) category!: ProductCategory; }
