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
var gist_1 = require('./gist');
var gist_detail_component_1 = require('./gist-detail.component');
var gist_service_1 = require('./gist.service');
var add_gist_component_1 = require('./add-gist.component');
var EditGistComponent = (function () {
    function EditGistComponent(GistService) {
        this.GistService = GistService;
        this.addingBook = false;
        this.edittingBook = false;
    }
    EditGistComponent.prototype.getGists = function () {
        var _this = this;
        this.GistService.getGists().then(function (books) { return _this.books = books; });
    };
    EditGistComponent.prototype.ngOnInit = function () {
        this.getGists();
    };
    EditGistComponent.prototype.addBook = function () {
        this.edittingBook = false;
        this.addingBook = true;
        this.selectedGist = new gist_1.Gist();
    };
    EditGistComponent.prototype.close = function (message) {
        this.getGists();
    };
    EditGistComponent.prototype.delete = function (book, event) {
        var _this = this;
        this.GistService
            .delete(book)
            .then(function (res) {
            _this.books = _this.books.filter(function (b) { return b !== book; });
            if (_this.selectedGist === book) {
                _this.selectedGist = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    EditGistComponent.prototype.onSelect = function (book) {
        this.selectedGist = book;
        this.addingBook = false;
        this.edittingBook = true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], EditGistComponent.prototype, "message", void 0);
    EditGistComponent = __decorate([
        core_1.Component({
            selector: 'edit-gist',
            template: "\n\t\t<table class=\"edit-view-table\">\n\t\t<tr>\n\t\t\t<td width=\"50%\">\n\t\t\t\t<ul class=\"gist-list\">\n\t\t\t\t\t<li *ngFor=\"let book of books\" (click)=\"onSelect(book)\"\n\t\t\t\t\t\t[class.selected]=\"book === selectedGist\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<a class=\"gist-list-element\">{{i + 1}} : <h2> {{book.opis}},</h2><p> {{book.kategoria}}</p> <p>{{book.price}}.z\u0142</p>\n\t\t\t\t\t\t<button class=\"delete-button\" (click)=\"delete(book, $event)\">Remove</button></a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<button (click)=\"addBook()\">New</button>\n\t\t\t\t<button (click)=\"getGists()\">Refresh list</button>\n\n\t\t\t</td>\n\t\t\t<td width=\"50%\">\n\t\t\t\t<div *ngIf=\"addingBook\">\n\t\t\t\t\t<h2><b>\"Fill new book's info\":</b></h2>\n\t\t\t\t\t<add-gist-detail [book]=\"selectedGist\"></add-gist-detail>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"edittingBook\">\n\t\t\t\t\t<h2><b>Fast edition for:</b></h2>\n\t\t\t\t\t<my-gist-detail [book]=\"selectedGist\"></my-gist-detail> \n\t\t\t\t</div>\t\t\t\n\t\t\t</td> \n\t\t</tr>\n\t\t</table>\n\t",
            directives: [gist_detail_component_1.GistDetailComponent, add_gist_component_1.AddDetailComponent]
        }), 
        __metadata('design:paramtypes', [gist_service_1.GistService])
    ], EditGistComponent);
    return EditGistComponent;
}());
exports.EditGistComponent = EditGistComponent;
//# sourceMappingURL=edit-gist.component.js.map