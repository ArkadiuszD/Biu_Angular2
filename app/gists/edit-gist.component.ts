import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gist } from './gist';
import { GistDetailComponent } from './gist-detail.component';
import { GistService } from './gist.service';
import { AddDetailComponent } from './add-gist.component';

@Component({
	selector: 'edit-gist',

	template: `

	 <nav id="horz" class="navBarEdit"> 
   		 <a>
   		 <button (click)="addGist()">Dodaj </button>
   		 </a>
   		 <a>
   		 <button (click)="getGists()">Odśwież</button>
   		 </a>

	</nav>
		<table class="edit-view-table">
		<tr>
			<td width="70%">
				<ul class="gist-list">
					<li *ngFor="let gist of gists" (click)="onSelect(gist)"
						[class.selected]="gist === selectedGist">
						
						<a class="gist-list-element"><h2> {{gist.kategoria}},</h2><p> {{gist.opis}}</p> <p>{{gist.price}}.zł</p><p>{{gist.data}}</p>
						<button class="delete-button" (click)="delete(gist, $event)">Usuń</button></a>
					</li>
				</ul>
				

			</td>
			<td width="30%">
				<div *ngIf="addingGist">
					<add-gist-detail [gist]="selectedGist"></add-gist-detail>
				</div>
				<div *ngIf="edittingGist">
					<my-gist-detail [gist]="selectedGist"></my-gist-detail> 
				</div>			
			</td> 
		</tr>
		</table>
	`,

	directives: [GistDetailComponent, AddDetailComponent]
})

export class EditGistComponent implements OnInit {
	@Input() message: String;
	gists: Gist[];
	selectedGist: Gist;
	addingGist = false;
	edittingGist = false;
	error: any;
	constructor(private GistService: GistService) { }
	getGists() {
		this.GistService.getGists().then(gists => this.gists = gists);
	}
	ngOnInit() {
		this.getGists();
	}
	addGist() {
		this.edittingGist = false;
	    this.addingGist = true;
	    this.selectedGist = new Gist();
	}
	close(message) {
		this.getGists();
	}
	delete(gist: Gist, event: any) {
		this.GistService
		    .delete(gist)
		    .then(res => {
		      this.gists = this.gists.filter(b => b !== gist);
		      if (this.selectedGist === gist) { this.selectedGist = null; }
		    })
		    .catch(error => this.error = error);
	}
	onSelect(gist: Gist) { 
		this.selectedGist = gist;
		this.addingGist = false;
		this.edittingGist = true;
	}
}


