import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gist } from './gist';
import { GistService } from './gist.service'
import { RouteParams } from '@angular/router-deprecated';

@Component({
    selector: 'add-gist-detail',
    template: `
	<div *ngIf="book">
    <h2>[{{book.title}}], kategoria: {{book.kategoria}}, cena: {{book.price}}</h2>
    <div>
        <label>Title: </label>
        <input [(ngModel)]="book.title" placeholder="title" required/>
        <label>Author: </label>
        <input [(ngModel)]="book.kategoria" placeholder="kategoria" required/>
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
        private GistService: GistService,
        private routeParams: RouteParams) {
    }
    save() {
        this.GistService
            .save(this.book)
            .then(book => {
                this.book = book;
            })
            .catch(error => this.error = error);
        this.close.emit("testujemy");
    }
}
