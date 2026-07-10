import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Interior Studio | Curated furniture' },
  { path: 'product/:id', component: ProductDetailsComponent, title: 'Interior Studio | Product details' },
  { path: '**', redirectTo: '' }
];
