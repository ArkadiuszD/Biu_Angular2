import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gist } from './gist';
import { GistService } from './gist.service'
import { RouteParams } from '@angular/router-deprecated';

@Component({
	selector: 'my-gist-detail',
	template: `
	<div *ngIf="book">
		<h2>[{{book.opis}}], written by: {{book.kategoria}}</h2>
		<div>
		    <label>Title: </label>
		    <input [(ngModel)]="book.opis" placeholder="opis" required/>
		    <label>Author: </label>
		    <input [(ngModel)]="book.kategoria" placeholder="kategoria" required/>
        <label>Price: </label>
        <input [(ngModel)]="book.price" placeholder="price"/>
		</div>
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
