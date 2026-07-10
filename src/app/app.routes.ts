import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Tanush Infinity Hardware | Building Materials' },
  { path: 'products', component: ProductListComponent, title: 'Products | Tanush Infinity Hardware' },
  { path: 'products/:slug', component: ProductDetailsComponent, title: 'Product Details | Tanush Infinity Hardware' },
  { path: 'about', component: AboutComponent, title: 'About | Tanush Infinity Hardware' },
  { path: 'services', component: ServicesComponent, title: 'Services | Tanush Infinity Hardware' },
  { path: 'contact', component: ContactComponent, title: 'Contact | Tanush Infinity Hardware' },
  { path: '**', redirectTo: '' }
];
