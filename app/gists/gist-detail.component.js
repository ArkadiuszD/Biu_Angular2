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
var gist_service_1 = require('./gist.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var GistDetailComponent = (function () {
    function GistDetailComponent(GistService, routeParams) {
        this.GistService = GistService;
        this.routeParams = routeParams;
        this.close = new core_1.EventEmitter();
        this.navigated = false;
    }
    GistDetailComponent.prototype.save = function () {
        var _this = this;
        this.GistService
            .save(this.book)
            .then(function (book) {
            _this.book = book;
            _this.close.emit(null);
        })
            .catch(function (error) { return _this.error = error; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', gist_1.Gist)
    ], GistDetailComponent.prototype, "book", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], GistDetailComponent.prototype, "close", void 0);
    GistDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-gist-detail',
            template: "\n\t<div *ngIf=\"book\">\n\t\t<h2>[{{book.opis}}], written by: {{book.kategoria}}</h2>\n\t\t<div>\n\t\t    <label>Title: </label>\n\t\t    <input [(ngModel)]=\"book.opis\" placeholder=\"opis\" required/>\n\t\t    <label>Author: </label>\n\t\t    <input [(ngModel)]=\"book.kategoria\" placeholder=\"kategoria\" required/>\n        <label>Price: </label>\n        <input [(ngModel)]=\"book.price\" placeholder=\"price\"/>\n\t\t</div>\n\t</div>\n\n\t"
        }), 
        __metadata('design:paramtypes', [gist_service_1.GistService, router_deprecated_1.RouteParams])
    ], GistDetailComponent);
    return GistDetailComponent;
}());
exports.GistDetailComponent = GistDetailComponent;
//# sourceMappingURL=gist-detail.component.js.map