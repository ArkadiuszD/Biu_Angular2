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
    function GistDetailComponent(gistService, routeParams) {
        this.gistService = gistService;
        this.routeParams = routeParams;
        this.close = new core_1.EventEmitter();
        this.navigated = false;
    }
    GistDetailComponent.prototype.save = function () {
        var _this = this;
        this.gistService
            .save(this.gist)
            .then(function (gist) {
            _this.gist = gist;
            _this.goBack(gist);
        })
            .catch(function (error) { return _this.error = error; });
    };
    GistDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.routeParams.get('id') !== null) {
            var id = +this.routeParams.get('id');
            this.navigated = true;
            this.gistService.getGist(id)
                .then(function (gist) { return _this.gist = gist; });
        }
        else {
            this.navigated = false;
            this.gist = new gist_1.Gist();
        }
    };
    GistDetailComponent.prototype.goBack = function (savedGist) {
        if (savedGist === void 0) { savedGist = null; }
        this.close.emit(savedGist);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', gist_1.Gist)
    ], GistDetailComponent.prototype, "gist", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], GistDetailComponent.prototype, "close", void 0);
    GistDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-gist-detail',
            template: "\n\t<div *ngIf=\"gist\">\n\n  <form id=\"form\" class=\"topBefore\">\n    \n      <input id=\"opis\" type=\"text\" [(ngModel)]=\"gist.opis\" placeholder=\"Opis\">\n      <input id=\"kategoria\" type=\"text\" [(ngModel)]=\"gist.kategoria\" placeholder=\"Kategoria\">\n      <input id=\"price\" type=\"number\" min=\"0.01\" step=\"10\" max=\"25000\" [(ngModel)]=\"gist.price\" placeholder=\"Cena\">\n      <input id=\"data\" type=\"date\" [(ngModel)]=\"gist.data\" placeholder=\"Data\">\n       <button (click)=\"goBack()\">Anuluj</button>\n       <button (click)=\"save()\">Zapisz</button>\n</form>\n\n\t</div>\n\n\t"
        }), 
        __metadata('design:paramtypes', [gist_service_1.GistService, router_deprecated_1.RouteParams])
    ], GistDetailComponent);
    return GistDetailComponent;
}());
exports.GistDetailComponent = GistDetailComponent;
//# sourceMappingURL=gist-detail.component.js.map