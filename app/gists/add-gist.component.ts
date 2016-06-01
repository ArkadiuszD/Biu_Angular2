import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gist } from './gist';
import { BookService } from './gist.service'
import { RouteParams } from '@angular/router-deprecated';

@Component({
    selector: 'add-gist-detail',
    template: `
	<div *ngIf="gist">
    <h2>[{{gist.title}}], kategoria: {{gist.author}}, cena: {{gist.price}}</h2>
    <div>
        <label>Title: </label>
        <input [(ngModel)]="gist.title" placeholder="title" required/>
        <label>Author: </label>
        <input [(ngModel)]="gist.author" placeholder="author" required/>
        <label>Price: </label>
        <input [(ngModel)]="gist.price" placeholder="price" required/>
        <br><button (click)="save()">CONFIRM</button>
      </div>
	</div>

	`
})

export class AddDetailComponent {
    @Input() gist: Gist;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false;

    constructor(
        private bookService: BookService,
        private routeParams: RouteParams) {
    }
    save() {
        this.bookService
            .save(this.gist)
            .then(gist => {
                this.gist = gist;
            })
            .catch(error => this.error = error);
        this.close.emit("testujemy");
    }
}
