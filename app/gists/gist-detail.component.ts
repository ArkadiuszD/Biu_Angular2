import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gist } from './gist';
import { GistService } from './gist.service'
import { RouteParams } from '@angular/router-deprecated';

@Component({
	selector: 'my-gist-detail',
	template: `
	<div *ngIf="gist">

  <form id="form" class="topBefore">
    
      <input id="opis" type="text" [(ngModel)]="gist.opis" placeholder="Opis">
      <input id="kategoria" type="text" [(ngModel)]="gist.kategoria" placeholder="Kategoria">
      <input id="price" type="number" min="0.01" step="0.01" max="5000" [(ngModel)]="gist.price" placeholder="Cena">
      <input id="data" type="date" [(ngModel)]="gist.data" placeholder="Data">
</form>
	</div>

	`
})

export class GistDetailComponent {
  @Input() gist: Gist;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false;

  constructor(
    private GistService: GistService,
    private routeParams: RouteParams) {
  }
  save() {
    this.GistService
        .save(this.gist)
        .then(gist => {
          this.gist = gist;
          this.close.emit(null);
        })
        .catch(error => this.error = error);

}
}
