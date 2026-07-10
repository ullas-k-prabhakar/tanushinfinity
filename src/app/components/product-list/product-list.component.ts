import { Component } from '@angular/core';
import { PRODUCT_CATEGORIES } from '../../data/product-categories';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CategoryFilterComponent } from '../category-filter/category-filter.component';

@Component({ selector:'app-product-list', imports:[ProductCardComponent, CategoryFilterComponent], template:`
<section class="page-hero"><p class="eyebrow">Product showcase</p><h1>Building materials and hardware categories</h1><p>Browse common construction materials and contact us for latest price and availability.</p></section>
<section class="section"><app-category-filter (termChange)="searchTerm=$event"></app-category-filter><div class="category-grid">@for (category of filteredCategories(); track category.id) {<app-product-card [category]="category"></app-product-card>} @empty {<p class="empty">No category matched your search. Try cement, steel, plumbing or tiles.</p>}</div></section>` })
export class ProductListComponent { categories=PRODUCT_CATEGORIES; searchTerm=''; filteredCategories(){ const q=this.searchTerm.toLowerCase().trim(); if(!q) return this.categories; return this.categories.filter(c => [c.name,c.description,...c.sampleProducts,...c.brands,...c.specifications].join(' ').toLowerCase().includes(q)); } }
