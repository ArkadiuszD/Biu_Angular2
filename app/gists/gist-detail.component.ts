import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gist } from './gist';
import { GistService } from './gist.service'
import { RouteParams } from '@angular/router-deprecated';

@Component({
	selector: 'my-gist-detail',
	template: `
	<div *ngIf="book">

  <form id="form" class="topBefore">
    
      <input id="name" type="text" [(ngModel)]="book.opis" placeholder="NAME">
      <input id="email" type="text" [(ngModel)]="book.kategoria" placeholder="E-MAIL">
      <input id="price" type="text" [(ngModel)]="book.price" placeholder="E-MAIL">
</form>
	</div>

	`
})

export class GistDetailComponent {
  @Input() book: Gist;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false;

  constructor(
    private GistService: GistService,
    private routeParams: RouteParams) {
  }
  save() {
    this.GistService
        .save(this.book)
        .then(book => {
          this.book = book;
          this.close.emit(null);
        })
        .catch(error => this.error = error);

}
}
