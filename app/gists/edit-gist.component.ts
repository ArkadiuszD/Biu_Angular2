import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gist } from './gist';
import { GistDetailComponent } from './gist-detail.component';
import { GistService } from './gist.service';
import { AddDetailComponent } from './add-gist.component';

@Component({
	selector: 'edit-gist',

	template: `
		<table class="edit-view-table">
		<tr>
			<td width="50%">
				<ul class="gist-list">
					<li *ngFor="let book of books" (click)="onSelect(book)"
						[class.selected]="book === selectedGist">
						
						<a class="gist-list-element">{{i + 1}} : <h2> {{book.opis}},</h2><p> {{book.kategoria}}</p> <p>{{book.price}}.zł</p>
						<button class="delete-button" (click)="delete(book, $event)">Remove</button></a>
					</li>
				</ul>
				<button (click)="addBook()">New</button>
				<button (click)="getGists()">Refresh list</button>

			</td>
			<td width="50%">
				<div *ngIf="addingBook">
					<h2><b>"Fill new book's info":</b></h2>
					<add-gist-detail [book]="selectedGist"></add-gist-detail>
				</div>
				<div *ngIf="edittingBook">
					<h2><b>Fast edition for:</b></h2>
					<my-gist-detail [book]="selectedGist"></my-gist-detail> 
				</div>			
			</td> 
		</tr>
		</table>
	`,

	directives: [GistDetailComponent, AddDetailComponent]
})

export class EditGistComponent implements OnInit {
	@Input() message: String;
	books: Gist[];
	selectedGist: Gist;
	addingBook = false;
	edittingBook = false;
	error: any;
	constructor(private GistService: GistService) { }
	getGists() {
		this.GistService.getGists().then(books => this.books = books);
	}
	ngOnInit() {
		this.getGists();
	}
	addBook() {
		this.edittingBook = false;
	    this.addingBook = true;
	    this.selectedGist = new Gist();
	}
	close(message) {
		this.getGists();
	}
	delete(book: Gist, event: any) {
		this.GistService
		    .delete(book)
		    .then(res => {
		      this.books = this.books.filter(b => b !== book);
		      if (this.selectedGist === book) { this.selectedGist = null; }
		    })
		    .catch(error => this.error = error);
	}
	onSelect(book: Gist) { 
		this.selectedGist = book;
		this.addingBook = false;
		this.edittingBook = true;
	}
}


