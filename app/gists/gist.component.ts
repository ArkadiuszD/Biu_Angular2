import { Component, OnInit } from '@angular/core';
import { Gist } from './gist';
import { GistService } from './gist.service';
import { SortByNamePipe } from '../pipes/pipe';
import 'rxjs/Rx';

@Component({
	selector: 'my-gists',

	template: `
		<form class="searchform cf">
		
	<input type='text' [(ngModel)]="filterValue"  placeholder="Szukaj">
	</form>
	<ul class="gist-list">
		<li *ngFor="let gist of gists | sortByName:filterValue; let i=index">
			<a class="gist-list-element">
			<h2> {{gist.kategoria}},</h2>
			<p> {{gist.opis}}</p> <p>{{gist.price}}.zł</p>
			 <p>{{gist.data}}</p></a>
		</li>
	</ul>
	<hr>

	`,

	pipes: [SortByNamePipe]
})

export class GistComponent implements OnInit {
	filterValue: String;
	gists: Gist[];
	constructor(private GistService: GistService) { }
	getGists() {
		this.GistService.getGists().then(gists => this.gists = gists);
	}
	ngOnInit() {
		this.getGists();
	}
}


