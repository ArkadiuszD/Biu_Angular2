import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gist } from './gist';
import { GistService } from './gist.service'
import { RouteParams } from '@angular/router-deprecated';

@Component({
    selector: 'add-gist-detail',
    template: `
	<div *ngIf="book">
    <div>

        <form #Form="ngForm" id="form" class="topBefore">
       
        <input [(ngModel)]="book.opis" placeholder="opis" required maxlength="40"/><br>
      
        <input [(ngModel)]="book.kategoria" placeholder="kategoria" required maxlength="20"/><br>
     
        <input  [(ngModel)]="book.price" placeholder="price" required/><br>
        
        <input type="date"  [(ngModel)]="book.data" placeholder="Data" required/><br>
        <br><button (click)="save()">CONFIRM</button>
        </form>



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
