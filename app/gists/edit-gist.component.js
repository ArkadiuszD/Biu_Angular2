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
        this.addingGist = false;
        this.edittingGist = false;
    }
    EditGistComponent.prototype.getGists = function () {
        var _this = this;
        this.GistService.getGists().then(function (gists) { return _this.gists = gists; });
    };
    EditGistComponent.prototype.ngOnInit = function () {
        this.getGists();
    };
    EditGistComponent.prototype.addGist = function () {
        this.edittingGist = false;
        this.addingGist = true;
        this.selectedGist = new gist_1.Gist();
    };
    EditGistComponent.prototype.close = function (message) {
        this.getGists();
    };
    EditGistComponent.prototype.delete = function (gist, event) {
        var _this = this;
        this.GistService
            .delete(gist)
            .then(function (res) {
            _this.gists = _this.gists.filter(function (b) { return b !== gist; });
            if (_this.selectedGist === gist) {
                _this.selectedGist = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    EditGistComponent.prototype.onSelect = function (gist) {
        this.selectedGist = gist;
        this.addingGist = false;
        this.edittingGist = true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], EditGistComponent.prototype, "message", void 0);
    EditGistComponent = __decorate([
        core_1.Component({
            selector: 'edit-gist',
            template: "\n\n\t <nav id=\"horz\" class=\"navBarEdit\"> \n   \t\t <a>\n   \t\t <button (click)=\"addGist()\">Dodaj </button>\n   \t\t </a>\n   \t\t <a>\n   \t\t <button (click)=\"getGists()\">Od\u015Bwie\u017C</button>\n   \t\t </a>\n\n\t</nav>\n\t\t<table class=\"edit-view-table\">\n\t\t<tr>\n\t\t\t<td width=\"70%\">\n\t\t\t\t<ul class=\"gist-list\">\n\t\t\t\t\t<li *ngFor=\"let gist of gists\" (click)=\"onSelect(gist)\"\n\t\t\t\t\t\t[class.selected]=\"gist === selectedGist\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<a class=\"gist-list-element\"><h2> {{gist.kategoria}},</h2><p> {{gist.opis}}</p> <p>{{gist.price}}.z\u0142</p><p>{{gist.data}}</p>\n\t\t\t\t\t\t<button class=\"delete-button\" (click)=\"delete(gist, $event)\">Usu\u0144</button></a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t\n\n\t\t\t</td>\n\t\t\t<td width=\"30%\">\n\t\t\t\t<div *ngIf=\"addingGist\">\n\t\t\t\t\t<add-gist-detail [gist]=\"selectedGist\"></add-gist-detail>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"edittingGist\">\n\t\t\t\t\t<my-gist-detail [gist]=\"selectedGist\"></my-gist-detail> \n\t\t\t\t</div>\t\t\t\n\t\t\t</td> \n\t\t</tr>\n\t\t</table>\n\t",
            directives: [gist_detail_component_1.GistDetailComponent, add_gist_component_1.AddDetailComponent]
        }), 
        __metadata('design:paramtypes', [gist_service_1.GistService])
    ], EditGistComponent);
    return EditGistComponent;
}());
exports.EditGistComponent = EditGistComponent;
//# sourceMappingURL=edit-gist.component.js.map