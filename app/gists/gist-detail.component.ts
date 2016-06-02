import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gist } from './gist';
import { GistService } from './gist.service'
import { RouteParams } from '@angular/router-deprecated';

@Component({
	selector: 'my-gist-detail',
	template: `
	<div *ngIf="book">

  <form id="form" class="topBefore">
    
      <input id="opis" type="text" [(ngModel)]="book.opis" placeholder="Opis">
      <input id="kategoria" type="text" [(ngModel)]="book.kategoria" placeholder="Kategoria">
      <input id="price" type="text" [(ngModel)]="book.price" placeholder="Cena">
      <input id="data" type="date" [(ngModel)]="book.data" placeholder="Data">
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
