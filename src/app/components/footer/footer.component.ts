import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRODUCT_CATEGORIES } from '../../data/product-categories';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="site-footer">
      <div><h2>Tanush Infinity Hardware</h2><p>Quality construction materials for every stage of your building project.</p></div>
      <div><h3>Quick Links</h3><a routerLink="/products">Products</a><a routerLink="/services">Services</a><a routerLink="/contact">Contact</a></div>
      <div><h3>Popular Categories</h3>@for (category of categories.slice(0, 6); track category.id) {<a [routerLink]="['/products', category.slug]">{{ category.name }}</a>}</div>
      <div><h3>Contact</h3><p>Shop address placeholder</p><p>Phone: +91 00000 00000</p><p>WhatsApp: +91 00000 00000</p></div>
      <p class="copyright">© 2026 Tanush Infinity Hardware. All rights reserved.</p>
    </footer>`
})
export class FooterComponent { categories = PRODUCT_CATEGORIES; }
