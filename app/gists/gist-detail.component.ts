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
 <button (click)="goBack()">Cancel</button>
  <button (click)="save()">Confirm</button>
	</div>

	`
})

export class GistDetailComponent {
  @Input() gist: Gist;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false;

  constructor(
    private gistService: GistService,
    private routeParams: RouteParams) {
  }
  save() {
    this.gistService
        .save(this.gist)
        .then(gist => {
          this.gist = gist;
          this.goBack(gist);
        })
        .catch(error => this.error = error);
  }
  ngOnInit() {
    if (this.routeParams.get('id') !== null) {
      let id = +this.routeParams.get('id');
      this.navigated = true;
      this.gistService.getGist(id)
          .then(gist => this.gist = gist);
    } else {
      this.navigated = false;
      this.gist = new Gist();
    }
  }
  goBack(savedGist: Gist = null) {
    this.close.emit(savedGist);
    if (this.navigated) { window.history.back(); }
  }
}
