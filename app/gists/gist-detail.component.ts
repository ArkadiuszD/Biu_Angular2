import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gist } from './gist';
import { GistService } from './gist.service'
import { RouteParams } from '@angular/router-deprecated';

@Component({
	selector: 'my-gist-detail',
	template: `
	<div *ngIf="gist">
		<h2>[{{gist.title}}], written by: {{gist.author}}</h2>
		<div>
		    <label>Title: </label>
		    <input [(ngModel)]="gist.title" placeholder="title" required/>
		    <label>Author: </label>
		    <input [(ngModel)]="gist.author" placeholder="author" required/>
        <label>Price: </label>
        <input [(ngModel)]="gist.price" placeholder="price"/>
		</div>
	</div>

	`
})

export class BookDetailComponent {
  @Input() gist: Gist;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false;

  constructor(
    private bookService: GistService,
    private routeParams: RouteParams) {
  }
  save() {
    this.bookService
        .save(this.gist)
        .then(gist => {
          this.gist = gist;
          this.close.emit(null);
        })
        .catch(error => this.error = error);

}
}
