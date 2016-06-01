import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gist } from './gist';
import { BookDetailComponent } from './gist-detail.component';
import { GistService } from './gist.service';
import { AddDetailComponent } from './add-gist.component';

@Component({
	selector: 'edit-gist',

	template: `
		<table class="edit-view-table">
		<tr>
			<td width="50%">
				<ul class="gist-list">
					<li *ngFor="let gist of books" (click)="onSelect(gist)"
						[class.selected]="gist === selectedBook">
						<button class="delete-button" (click)="delete(gist, $event)">Remove</button>
						<span class="gist-list-element"><b>"{{gist.title}}"</b>, by: {{gist.author}}, {{gist.price}}</span>
					</li>
				</ul>
				<button (click)="addBook()">New</button>
				<button (click)="getBooks()">Refresh list</button>

			</td>
			<td width="50%">
				<div *ngIf="addingBook">
					<h2><b>"Fill new gist's info":</b></h2>
					<add-gist-detail [gist]="selectedBook"></add-gist-detail>
				</div>
				<div *ngIf="edittingBook">
					<h2><b>Fast edition for:</b></h2>
					<my-gist-detail [gist]="selectedBook"></my-gist-detail> 
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
	constructor(private bookService: GistService) { }
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
	delete(gist: Gist, event: any) {
		this.bookService
		    .delete(gist)
		    .then(res => {
		      this.books = this.books.filter(b => b !== gist);
		      if (this.selectedBook === gist) { this.selectedBook = null; }
		    })
		    .catch(error => this.error = error);
	}
	onSelect(gist: Gist) { 
		this.selectedBook = gist;
		this.addingBook = false;
		this.edittingBook = true;
	}
}


