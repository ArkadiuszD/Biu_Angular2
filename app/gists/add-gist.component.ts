import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gist } from './gist';
import { GistService } from './gist.service'
import { RouteParams } from '@angular/router-deprecated';

@Component({
    selector: 'add-gist-detail',
    template: `
	<div *ngIf="gist">
    <div>

        <form #Form="ngForm" id="form" class="topBefore">
       
        <input [(ngModel)]="gist.opis" placeholder="opis" required maxlength="40"/><br>
      
        <input [(ngModel)]="gist.kategoria"  placeholder="kategoria" required maxlength="20"/><br>
     
        <input  [(ngModel)]="gist.price" type="number" min="0.01" step="0.01" max="2500" placeholder="price" required/><br>
        
        <input type="date"  [(ngModel)]="gist.data" placeholder="Data" required/><br>
        <br><button (click)="save()">CONFIRM</button>
        </form>



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
        private GistService: GistService,
        private routeParams: RouteParams) {
    }
    save() {
        this.GistService
            .save(this.gist)
            .then(gist => {
                this.gist = gist;
            })
            .catch(error => this.error = error);
        this.close.emit("testujemy");
    }
}
