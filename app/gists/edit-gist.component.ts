import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gist } from './gist';
import { BookDetailComponent } from './gist-detail.component';
import { BookService } from './gist.service';
import { AddDetailComponent } from './add-gist.component';

@Component({
	selector: 'edit-gist',

	template: `
		<table class="edit-view-table">
		<tr>
			<td width="50%">
				<ul class="book-list">
					<li *ngFor="let book of books" (click)="onSelect(book)"
						[class.selected]="book === selectedBook">
						<button class="delete-button" (click)="delete(book, $event)">Remove</button>
						<span class="book-list-element"><b>"{{book.title}}"</b>, by: {{book.author}}, {{book.price}}</span>
					</li>
				</ul>
				<button (click)="addBook()">New</button>
				<button (click)="getBooks()">Refresh list</button>

			</td>
			<td width="50%">
				<div *ngIf="addingBook">
					<h2><b>"Fill new book's info":</b></h2>
					<add-gist-detail [book]="selectedBook"></add-gist-detail>
				</div>
				<div *ngIf="edittingBook">
					<h2><b>Fast edition for:</b></h2>
					<my-gist-detail [book]="selectedBook"></my-gist-detail> 
				</div>			
			</td> 
		</tr>
		</table>
	`,

	directives: [BookDetailComponent, AddDetailComponent]
})

export class EditBookComponent implements OnInit {
	@Input() message: String;
	books: Gist[];
	selectedBook: Gist;
	addingBook = false;
	edittingBook = false;
	error: any;
	constructor(private bookService: BookService) { }
	getBooks() {
		this.bookService.getBooks().then(books => this.books = books);
	}
	ngOnInit() {
		this.getBooks();
	}
	addBook() {
		this.edittingBook = false;
	    this.addingBook = true;
	    this.selectedBook = new Gist();
	}
	close(message) {
		this.getBooks();
	}
	delete(book: Gist, event: any) {
		this.bookService
		    .delete(book)
		    .then(res => {
		      this.books = this.books.filter(b => b !== book);
		      if (this.selectedBook === book) { this.selectedBook = null; }
		    })
		    .catch(error => this.error = error);
	}
	onSelect(book: Gist) { 
		this.selectedBook = book;
		this.addingBook = false;
		this.edittingBook = true;
	}
}


