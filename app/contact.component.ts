import { Component } from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from '@angular/common';

@Component({
  directives: [FORM_DIRECTIVES],
  selector: 'contact',
  template:`
  	<div *ngIf="sent" id="form" class="topBefore">
		  <h3>Dziękujemy wkrótce odpowiemy</h3>
	</div>
	<div *ngIf="!sent">
		<form [ngFormModel]="contactForm" id="form" class="topBefore">

		Imie i Nazwisko:<br>
		<input type="text" ngControl="name"><br>
		<em class="ivalidInfo" *ngIf="!name.valid">Wprowadz imie lub imie i nazwisko</em><br>

		E-mail:<br>
		<input type="text" ngControl="mail"><br>
		<em class="ivalidInfo" *ngIf="!mail.valid">Wyprawdz adres</em><br>

		Pytanie:<br>
		<input type="text" ngControl="comment" size="50"><br>
		<span class="ivalidInfo" *ngIf="!comment.valid">20 znaków minimum</span><br><br>

		<button *ngIf="name.valid && mail.valid && comment.valid" (click)="Validate()">Send</button>
		</form>
	</div>
  `
})

export class ContactComponent { 
	contactForm: ControlGroup;
	name: Control;
	mail: Control;
	comment: Control;
	sent = false;

	constructor(
		private builder: FormBuilder
	) {
		this.name = new Control('', Validators.compose([Validators.required, Validators.pattern('^[A-Za-z]+\.([A-Za-z]\.)?[A-Za-z]+$')]));
		this.mail = new Control('', Validators.compose([Validators.required]));
		this.comment = new Control('', Validators.compose([Validators.required, Validators.minLength(20)]));
		this.contactForm = builder.group({
			name: this.name,
			mail: this.mail,
			comment: this.comment
		});
	}

	Validate() {
		this.Send(this.mail.value, this.name.value, this.comment.value);
	}

	Send(mail: any, name: any, comment: any)
	{
		this.sent = true;
	}
}