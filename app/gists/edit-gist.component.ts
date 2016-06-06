import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router-deprecated';
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
					  <my-gist-detail (close)="close($event)"></my-gist-detail>
				</div>
				 <div *ngIf="selectedGist">
 			  		<form id="form" style="font-size:200%">
 				    Kategoria:  {{selectedGist.kategoria}} <br \>
 				    Opis:  {{selectedGist.opis}}<br \>
 				     <button (click)="gotoDetail()">Edytuj</button>
 				  	</form>
				</div>			
			</td> 
		</tr>
		</table>
	`,

	directives: [GistDetailComponent]
})

export class EditGistComponent implements OnInit {
	gists: Gist[];
	selectedGist: Gist;
	addingGist = false;
	error: any;

	constructor(private router: Router, private gistService: GistService) { }
	getGists() {
		this.gistService.getGists().then(gists => this.gists = gists);
	}
	ngOnInit() {
		this.getGists();
	}
	addGist() {
	    this.addingGist = true;
	    this.selectedGist = null;
	}
	close(savedGist: Gist) {
		this.addingGist = false;
		if (savedGist) { this.getGists(); }
	}
	delete(gist: Gist, event: any) {
		this.gistService
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
	}
	gotoDetail() {
    	this.router.navigate(['GistDetail', { id: this.selectedGist.id }]);
	}
}


