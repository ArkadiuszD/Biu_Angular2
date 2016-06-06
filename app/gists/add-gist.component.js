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
var AddDetailComponent = (function () {
    function AddDetailComponent(GistService, routeParams) {
        this.GistService = GistService;
        this.routeParams = routeParams;
        this.close = new core_1.EventEmitter();
        this.navigated = false;
    }
    AddDetailComponent.prototype.save = function () {
        var _this = this;
        this.GistService
            .save(this.gist)
            .then(function (gist) {
            _this.gist = gist;
        })
            .catch(function (error) { return _this.error = error; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', gist_1.Gist)
    ], AddDetailComponent.prototype, "gist", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AddDetailComponent.prototype, "close", void 0);
    AddDetailComponent = __decorate([
        core_1.Component({
            selector: 'add-gist-detail',
            template: "\n\t<div *ngIf=\"gist\">\n    <div>\n\n        <form #Form=\"ngForm\" id=\"form\" class=\"topBefore\">\n       \n        <input [(ngModel)]=\"gist.opis\" placeholder=\"opis\" required maxlength=\"40\"/><br>\n      \n        <input [(ngModel)]=\"gist.kategoria\"  placeholder=\"kategoria\" required maxlength=\"20\"/><br>\n     \n        <input  [(ngModel)]=\"gist.price\" type=\"number\" min=\"0.01\" step=\"0.01\" max=\"2500\" placeholder=\"price\" required/><br>\n        \n        <input type=\"date\"  [(ngModel)]=\"gist.data\" placeholder=\"Data\" required/><br>\n        <br><button (click)=\"save()\">Dodaj</button>\n        </form>\n\n\n\n      </div>\n\t</div>\n\n\t"
        }), 
        __metadata('design:paramtypes', [gist_service_1.GistService, router_deprecated_1.RouteParams])
    ], AddDetailComponent);
    return AddDetailComponent;
}());
exports.AddDetailComponent = AddDetailComponent;
//# sourceMappingURL=add-gist.component.js.map