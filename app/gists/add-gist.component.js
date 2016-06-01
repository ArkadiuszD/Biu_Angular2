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
var gist_service_1 = require('./gist.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var AddDetailComponent = (function () {
    function AddDetailComponent(bookService, routeParams) {
        this.bookService = bookService;
        this.routeParams = routeParams;
        this.close = new core_1.EventEmitter();
        this.navigated = false;
    }
    AddDetailComponent.prototype.save = function () {
        var _this = this;
        this.bookService
            .save(this.book)
            .then(function (book) {
            _this.book = book;
        })
            .catch(function (error) { return _this.error = error; });
        this.close.emit("testujemy");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', book_1.Book)
    ], AddDetailComponent.prototype, "book", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AddDetailComponent.prototype, "close", void 0);
    AddDetailComponent = __decorate([
        core_1.Component({
            selector: 'add-gist-detail',
            template: "\n\t<div *ngIf=\"book\">\n    <h2>[{{book.title}}], kategoria: {{book.author}}, cena: {{book.price}}</h2>\n    <div>\n        <label>Title: </label>\n        <input [(ngModel)]=\"book.title\" placeholder=\"title\" required/>\n        <label>Author: </label>\n        <input [(ngModel)]=\"book.author\" placeholder=\"author\" required/>\n        <label>Price: </label>\n        <input [(ngModel)]=\"book.price\" placeholder=\"price\" required/>\n        <br><button (click)=\"save()\">CONFIRM</button>\n      </div>\n\t</div>\n\n\t"
        }), 
        __metadata('design:paramtypes', [gist_service_1.BookService, router_deprecated_1.RouteParams])
    ], AddDetailComponent);
    return AddDetailComponent;
}());
exports.AddDetailComponent = AddDetailComponent;
//# sourceMappingURL=add-gist.component.js.map