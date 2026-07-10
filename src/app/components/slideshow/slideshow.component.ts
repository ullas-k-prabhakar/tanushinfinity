import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-slideshow',
  imports: [NgIf, NgFor, RouterLink],
  template: `
    <section class="slideshow" *ngIf="featured.length">
      <img [src]="featured[current].image" [alt]="featured[current].name" class="slide-image">
      <div class="slide-shade"></div>
      <div class="slide-content"><p class="eyebrow">Featured design</p><h2>{{ featured[current].name }}</h2><p>{{ featured[current].description }}</p><a [routerLink]="['/product', featured[current].id]" class="light-link">Discover piece <span>→</span></a></div>
      <div class="slide-controls"><button *ngFor="let product of featured; let index = index" [class.selected]="index === current" (click)="select(index)" [attr.aria-label]="'Show ' + product.name"></button></div>
    </section>
  `
})
export class SlideshowComponent implements OnChanges, OnDestroy {
  @Input({ required: true }) products: Product[] = [];
  featured: Product[] = []; current = 0; private timer?: ReturnType<typeof setInterval>;
  ngOnChanges(changes: SimpleChanges): void { if (changes['products']) { this.featured = this.products.filter(item => item.featured); this.current = 0; this.restart(); } }
  select(index: number): void { this.current = index; this.restart(); }
  ngOnDestroy(): void { if (this.timer) clearInterval(this.timer); }
  private restart(): void { if (this.timer) clearInterval(this.timer); if (this.featured.length > 1) this.timer = setInterval(() => this.current = (this.current + 1) % this.featured.length, 4000); }
}
