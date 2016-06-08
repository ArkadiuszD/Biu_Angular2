import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gist } from './gist';
import { GistService } from './gist.service'
import { RouteParams } from '@angular/router-deprecated';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from '@angular/common';

@Component({
    selector: 'add-gist-detail',
    template: `
     <div *ngIf="sent" id="form" class="topBefore">
          <h3>Dziękujemy wkrótce odpowiemy</h3>
    </div>
	<div *ngIf="!sent">
         <form [ngFormModel]="contactForm" id="form" class="topBefore">
       
        <input [(ngModel)]="gist.opis" ngControl="name" placeholder="opis"/><br>
         <em class="ivalidInfo" *ngIf="!name.valid">Wprowadz imie lub imie i nazwisko</em><br>
      
        <input [(ngModel)]="gist.kategoria" ngControl="mail"  placeholder="kategoria"/><br>
       <em class="ivalidInfo" *ngIf="!mail.valid">Wyprawdz adres</em><br>
     
        <input  [(ngModel)]="gist.price" type="number" min="0" step="10" max="2500" placeholder="price" ngControl="mail"/><br>
        
        <input type="date"  [(ngModel)]="gist.data" placeholder="Data" required/><br>

        <br><button *ngIf="name.valid && mail.valid" (click)="save()">Dodaj</button>
        </form>
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
        private routeParams: RouteParams,
        private builder: FormBuilder) {

        this.name = new Control('', Validators.compose([Validators.required, Validators.pattern('^[A-Za-z]+\.([A-Za-z]\.)?[A-Za-z]+$')]));
        this.mail = new Control('', Validators.compose([Validators.required]));
        this.contactForm = builder.group({
            name: this.name,
            mail: this.mail
        });
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

    Validate() {
        this.Send(this.mail.value, this.name.value);
    }

    Send(mail: any, name: any)
    {
        this.sent = true;
    }
}
