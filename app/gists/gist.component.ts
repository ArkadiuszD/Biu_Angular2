import { Component, OnInit } from '@angular/core';
import { Gist } from './gist';
import { GistService } from './gist.service';
import { SortByNamePipe } from '../pipes/pipe';
import 'rxjs/Rx';

@Component({
	selector: 'my-books',

	template: `
	<h2>Full list of avaible books:</h2>
	<label>Search by kategoria:  </label>
	<input type='text' [(ngModel)]="filterValue" value="Homer">
	<ul class="gist-list">
		<li *ngFor="let book of books | sortByName:filterValue; let i=index">
			<a class="gist-list-element">{{i + 1}} : <h2> {{book.opis}},</h2><p> {{book.kategoria}}</p> <p>{{book.price}}.zł</p></a>
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


