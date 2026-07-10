import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({ selector:'app-enquiry-form', imports:[FormsModule], template:`<form class="enquiry-form" (ngSubmit)="submitted=true" #form="ngForm"><label>Name<input name="name" ngModel required></label><label>Phone<input name="phone" ngModel required type="tel"></label><label>Requirement<input name="requirement" ngModel placeholder="Cement, steel, tiles..."></label><label>Message<textarea name="message" ngModel rows="5"></textarea></label><button class="button" type="submit">Submit Enquiry</button>@if (submitted) {<p class="success">Thank you. Your enquiry has been noted. Please call or WhatsApp for urgent requirements.</p>}</form>` })
export class EnquiryFormComponent { submitted=false; }
