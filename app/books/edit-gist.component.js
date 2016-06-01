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
var book_1 = require('./book');
var gist_detail_component_1 = require('./gist-detail.component');
var gist_service_1 = require('./gist.service');
var add_gist_component_1 = require('./add-gist.component');
var EditBookComponent = (function () {
    function EditBookComponent(bookService) {
        this.bookService = bookService;
        this.addingBook = false;
        this.edittingBook = false;
    }
    EditBookComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks().then(function (books) { return _this.books = books; });
    };
    EditBookComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    EditBookComponent.prototype.addBook = function () {
        this.edittingBook = false;
        this.addingBook = true;
        this.selectedBook = new book_1.Book();
    };
    EditBookComponent.prototype.close = function (message) {
        this.getBooks();
    };
    EditBookComponent.prototype.delete = function (book, event) {
        var _this = this;
        this.bookService
            .delete(book)
            .then(function (res) {
            _this.books = _this.books.filter(function (b) { return b !== book; });
            if (_this.selectedBook === book) {
                _this.selectedBook = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    EditBookComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
        this.addingBook = false;
        this.edittingBook = true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], EditBookComponent.prototype, "message", void 0);
    EditBookComponent = __decorate([
        core_1.Component({
            selector: 'edit-gist',
            template: "\n\t\t<table class=\"edit-view-table\">\n\t\t<tr>\n\t\t\t<td width=\"50%\">\n\t\t\t\t<ul class=\"book-list\">\n\t\t\t\t\t<li *ngFor=\"let book of books\" (click)=\"onSelect(book)\"\n\t\t\t\t\t\t[class.selected]=\"book === selectedBook\">\n\t\t\t\t\t\t<button class=\"delete-button\" (click)=\"delete(book, $event)\">Remove</button>\n\t\t\t\t\t\t<span class=\"book-list-element\"><b>\"{{book.title}}\"</b>, by: {{book.author}}, {{book.price}}</span>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<button (click)=\"addBook()\">New</button>\n\t\t\t\t<button (click)=\"getBooks()\">Refresh list</button>\n\n\t\t\t</td>\n\t\t\t<td width=\"50%\">\n\t\t\t\t<div *ngIf=\"addingBook\">\n\t\t\t\t\t<h2><b>\"Fill new book's info\":</b></h2>\n\t\t\t\t\t<add-gist-detail [book]=\"selectedBook\"></add-gist-detail>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"edittingBook\">\n\t\t\t\t\t<h2><b>Fast edition for:</b></h2>\n\t\t\t\t\t<my-gist-detail [book]=\"selectedBook\"></my-gist-detail> \n\t\t\t\t</div>\t\t\t\n\t\t\t</td> \n\t\t</tr>\n\t\t</table>\n\t",
            directives: [gist_detail_component_1.BookDetailComponent, add_gist_component_1.AddDetailComponent]
        }), 
        __metadata('design:paramtypes', [gist_service_1.BookService])
    ], EditBookComponent);
    return EditBookComponent;
}());
exports.EditBookComponent = EditBookComponent;
//# sourceMappingURL=edit-gist.component.js.map