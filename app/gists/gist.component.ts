import { Component, OnInit } from '@angular/core';
import { Gist } from './gist';
import { GistService } from './gist.service';
import { SortByNamePipe } from '../pipes/pipe';
import 'rxjs/Rx';

@Component({
	selector: 'my-books',

	template: `
		<form class="searchform cf">
		
	<input type='text' [(ngModel)]="filterValue" value="Homer" placeholder="Szukaj">
	</form>
	<ul class="gist-list">
		<li *ngFor="let book of books | sortByName:filterValue; let i=index">
			<a class="gist-list-element"><h2> {{book.kategoria}},</h2><p> {{book.opis}}</p> <p>{{book.price}}.zł</p> <p>{{book.data}}</p></a>
		</li>
	</ul>
	<hr>

	`,

	pipes: [SortByNamePipe]
})

export class GistComponent implements OnInit {
	filterValue: String;
	books: Gist[];
	constructor(private GistService: GistService) { }
	getGists() {
		this.GistService.getGists().then(books => this.books = books);
	}
	ngOnInit() {
		this.getGists();
	}
}


