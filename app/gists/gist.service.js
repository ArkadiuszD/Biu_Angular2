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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var GistService = (function () {
    function GistService(http) {
        this.http = http;
        this.gistsUrl = '../database/gists';
    }
    GistService.prototype.getGists = function () {
        return this.http.get(this.gistsUrl).toPromise().then(function (response) { return response.json().data; }).catch(this.handleError);
    };
    GistService.prototype.getGist = function (id) {
        return this.getGists()
            .then(function (gists) { return gists.filter(function (gist) { return gist.id === id; })[0]; });
    };
    GistService.prototype.save = function (gist) {
        if (gist.id) {
            return this.put(gist);
        }
        return this.post(gist);
    };
    GistService.prototype.delete = function (gist) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.gistsUrl + "/" + gist.id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    GistService.prototype.post = function (gist) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http
            .post(this.gistsUrl, JSON.stringify(gist), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    GistService.prototype.put = function (gist) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.gistsUrl + "/" + gist.id;
        return this.http
            .put(url, JSON.stringify(gist), { headers: headers })
            .toPromise()
            .then(function () { return gist; })
            .catch(this.handleError);
    };
    GistService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    GistService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GistService);
    return GistService;
}());
exports.GistService = GistService;
//# sourceMappingURL=gist.service.js.map