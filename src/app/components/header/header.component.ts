import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">
      <a routerLink="/" class="brand" aria-label="Tanush Infinity Hardware home"><span class="brand-mark">TI</span><span>Tanush Infinity <b>Hardware</b></span></a>
      <input id="nav-toggle" class="nav-toggle" type="checkbox" aria-label="Toggle navigation">
      <label for="nav-toggle" class="menu-button"><span></span><span></span><span></span></label>
      <nav class="site-nav" aria-label="Primary navigation">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
        <a routerLink="/products" routerLinkActive="active">Products</a>
        <a routerLink="/services" routerLinkActive="active">Services</a>
        <a routerLink="/about" routerLinkActive="active">About</a>
        <a routerLink="/contact" routerLinkActive="active" class="nav-cta">Contact</a>
      </nav>
    </header>`
})
export class HeaderComponent {}
