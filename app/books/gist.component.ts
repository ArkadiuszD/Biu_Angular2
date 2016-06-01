import { Component, OnInit } from '@angular/core';
import { Gist } from './book';
import { BookService } from './gist.service';
import { SortByNamePipe } from '../pipes/pipe';
import 'rxjs/Rx';

@Component({
	selector: 'my-books',

	template: `
	<h2>Full list of avaible books:</h2>
	<label>Search by author:  </label>
	<input type='text' [(ngModel)]="filterValue" value="Homer">
	<ul class="book-list">
		<li *ngFor="let book of books | sortByName:filterValue; let i=index">
			<span class="book-list-element">{{i + 1}} : <b>"{{book.title}}"</b>, by: {{book.author}}</span>
		</li>
	</ul>
	<hr>
	`,

	pipes: [SortByNamePipe]
})

export class BooksComponent implements OnInit {
	filterValue: String;
	books: Gist[];
	constructor(private bookService: BookService) { }
	getBooks() {
		this.bookService.getBooks().then(books => this.books = books);
	}
	ngOnInit() {
		this.getBooks();
	}
}


