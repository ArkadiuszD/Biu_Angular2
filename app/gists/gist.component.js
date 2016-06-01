"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var gist_service_1 = require('./gist.service');
var pipe_1 = require('../pipes/pipe');
require('rxjs/Rx');
var GistComponent = (function () {
    function GistComponent(GistService) {
        this.GistService = GistService;
    }
    GistComponent.prototype.getGists = function () {
        var _this = this;
        this.GistService.getGists().then(function (books) { return _this.books = books; });
    };
    GistComponent.prototype.ngOnInit = function () {
        this.getGists();
    };
    GistComponent = __decorate([
        core_1.Component({
            selector: 'my-books',
            template: "\n\t<h2>Full list of avaible books:</h2>\n\t<label>Search by kategoria:  </label>\n\t<input type='text' [(ngModel)]=\"filterValue\" value=\"Homer\">\n\t<ul class=\"gist-list\">\n\t\t<li *ngFor=\"let book of books | sortByName:filterValue; let i=index\">\n\t\t\t<span class=\"gist-list-element\">{{i + 1}} : <b>\"{{book.title}}\"</b>, by: {{book.kategoria}}</span>\n\t\t</li>\n\t</ul>\n\t<hr>\n\t",
            pipes: [pipe_1.SortByNamePipe]
        }), 
        __metadata('design:paramtypes', [gist_service_1.GistService])
    ], GistComponent);
    return GistComponent;
}());
exports.GistComponent = GistComponent;
//# sourceMappingURL=gist.component.js.map