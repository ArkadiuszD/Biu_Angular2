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
			<span class="gist-list-element">{{i + 1}} : <b>"{{book.title}}"</b>, by: {{book.kategoria}}</span>
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


