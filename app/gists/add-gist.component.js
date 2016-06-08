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
var common_1 = require('@angular/common');
var AddDetailComponent = (function () {
    function AddDetailComponent(GistService, routeParams, builder) {
        this.GistService = GistService;
        this.routeParams = routeParams;
        this.builder = builder;
        this.close = new core_1.EventEmitter();
        this.navigated = false;
        this.name = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.pattern('^[A-Za-z]+\.([A-Za-z]\.)?[A-Za-z]+$')]));
        this.mail = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required]));
        this.contactForm = builder.group({
            name: this.name,
            mail: this.mail
        });
    }
    AddDetailComponent.prototype.save = function () {
        var _this = this;
        this.GistService
            .save(this.gist)
            .then(function (gist) {
            _this.gist = gist;
        })
            .catch(function (error) { return _this.error = error; });
        this.close.emit("testujemy");
    };
    AddDetailComponent.prototype.Validate = function () {
        this.Send(this.mail.value, this.name.value);
    };
    AddDetailComponent.prototype.Send = function (mail, name) {
        this.sent = true;
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
            template: "\n     <div *ngIf=\"sent\" id=\"form\" class=\"topBefore\">\n          <h3>Dzi\u0119kujemy wkr\u00F3tce odpowiemy</h3>\n    </div>\n\t<div *ngIf=\"!sent\">\n         <form [ngFormModel]=\"contactForm\" id=\"form\" class=\"topBefore\">\n       \n        <input [(ngModel)]=\"gist.opis\" ngControl=\"name\" placeholder=\"opis\"/><br>\n         <em class=\"ivalidInfo\" *ngIf=\"!name.valid\">Wprowadz imie lub imie i nazwisko</em><br>\n      \n        <input [(ngModel)]=\"gist.kategoria\" ngControl=\"mail\"  placeholder=\"kategoria\"/><br>\n       <em class=\"ivalidInfo\" *ngIf=\"!mail.valid\">Wyprawdz adres</em><br>\n     \n        <input  [(ngModel)]=\"gist.price\" type=\"number\" min=\"0\" step=\"10\" max=\"2500\" placeholder=\"price\" ngControl=\"mail\"/><br>\n        \n        <input type=\"date\"  [(ngModel)]=\"gist.data\" placeholder=\"Data\" required/><br>\n\n        <br><button *ngIf=\"name.valid && mail.valid\" (click)=\"save()\">Dodaj</button>\n        </form>\n\t</div>\n\n\t"
        }), 
        __metadata('design:paramtypes', [gist_service_1.GistService, router_deprecated_1.RouteParams, common_1.FormBuilder])
    ], AddDetailComponent);
    return AddDetailComponent;
}());
exports.AddDetailComponent = AddDetailComponent;
//# sourceMappingURL=add-gist.component.js.map