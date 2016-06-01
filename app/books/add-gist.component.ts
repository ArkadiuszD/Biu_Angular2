import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gist } from './book';
import { BookService } from './gist.service'
import { RouteParams } from '@angular/router-deprecated';

@Component({
    selector: 'add-gist-detail',
    template: `
	<div *ngIf="book">
    <h2>[{{book.title}}], kategoria: {{book.author}}, cena: {{book.price}}</h2>
    <div>
        <label>Title: </label>
        <input [(ngModel)]="book.title" placeholder="title" required/>
        <label>Author: </label>
        <input [(ngModel)]="book.author" placeholder="author" required/>
        <label>Price: </label>
        <input [(ngModel)]="book.price" placeholder="price" required/>
        <br><button (click)="save()">CONFIRM</button>
      </div>
	</div>

	`
})

export class AddDetailComponent {
    @Input() book: Gist;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false;

    constructor(
        private bookService: BookService,
        private routeParams: RouteParams) {
    }
    save() {
        this.bookService
            .save(this.book)
            .then(book => {
                this.book = book;
            })
            .catch(error => this.error = error);
        this.close.emit("testujemy");
    }
}
