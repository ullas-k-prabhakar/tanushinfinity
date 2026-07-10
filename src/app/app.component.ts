import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">
      <a class="brand" routerLink="/" aria-label="Interior Studio home"><span class="brand-mark">IS</span><span>Interior <em>Studio</em></span></a>
      <nav aria-label="Main navigation"><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Collection</a><a routerLink="/" fragment="products">Shop</a></nav>
    </header>
    <main><router-outlet /></main>
    <footer><span>Interior Studio</span><span>Thoughtfully made spaces, beautifully lived.</span></footer>
  `
})
export class AppComponent {}
