import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({ selector:'app-category-filter', imports:[FormsModule], template:`
  <label class="search-box"><span>Search products</span><input type="search" [(ngModel)]="term" (ngModelChange)="termChange.emit($event)" placeholder="Search cement, steel, plumbing..." aria-label="Search product categories"></label>` })
export class CategoryFilterComponent { term=''; @Output() termChange = new EventEmitter<string>(); }
