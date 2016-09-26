"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/of');
require('rxjs/add/operator/do');
var user_service_1 = require('./user.service');
var Service = (function () {
    //inject the http object for managing requests
    function Service(_http, userService) {
        this._http = _http;
        this.userService = userService;
    }
    //handle the error, you should implements what to do.
    Service.prototype.getError = function (error) { return Observable_1.Observable.throw(error); };
    //handle the response as a json object, it will fail with an empty response.
    Service.prototype.getData = function (r) { if (r != null)
        return r.json();
    else
        return null; };
    //define the basic options for the request.
    Service.prototype.getOptions = function () {
        var token = "none";
        if (this.userService.getToken() == null || this.userService.getToken() == undefined)
            token = "none";
        else
            token = this.userService.getToken().toString();
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'X-Auth-Token': token
        });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    //getter for the url of the rest service.
    Service.prototype.getUrlBackend = function () {
        return this.urlBackend;
    };
    //setter for the url of the rest service.
    Service.prototype.setUrlBackend = function (url) {
        this.urlBackend = url;
    };
    //save the object
    Service.prototype.save = function (object) {
        //let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        var requestOptions = this.getOptions(); //new RequestOptions({ headers: headers });
        var url = '';
        if (object.ids != null) {
            url = this.urlBackend + "/" + object.ids;
            return this._http.put(url, JSON.stringify(object), requestOptions)
                .map(this.getData)
                .catch(this.getError);
        }
        else {
            url = this.urlBackend;
            return this._http.post(url, JSON.stringify(object), requestOptions)
                .map(this.getData)
                .catch(this.getError);
        }
    };
    //delete the object, this could generate an empty response.
    Service.prototype.delete = function (object) {
        return this._http.delete(this.urlBackend + "/" + object.ids, this.getOptions).map(this.getData).catch(this.getError);
    };
    //find one object by its id.
    Service.prototype.find = function (id) {
        //let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        //let requestOptions = new RequestOptions({ headers: headers });
        return this._http.get(this.getUrlBackend() + "/" + id, this.getOptions)
            .map(this.getData)
            .catch(this.getError);
    };
    //get a paginated response wrapping an array of obects
    Service.prototype.getPage = function (page, size) {
        var perPage = 10;
        var params = new http_1.URLSearchParams();
        if (size)
            params.set("size", size.toString());
        else
            params.set("size", perPage.toString());
        params.set("page", page.toString());
        var headers = new http_1.Headers({ 'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'X-Auth-Token': this.userService.getToken().toString()
        });
        var requestOptions = new http_1.RequestOptions({ headers: headers, search: params });
        return this._http.get(this.urlBackend, requestOptions)
            .map(this.getData)
            .catch(this.getError);
    };
    Service.prototype.getAll = function () {
        var params = new http_1.URLSearchParams();
        var headers = new http_1.Headers({ 'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'X-Auth-Token': this.userService.getToken().toString() });
        var requestOptions = new http_1.RequestOptions({ headers: headers, search: params });
        return this._http.get(this.urlBackend, requestOptions)
            .map(this.getArray)
            .catch(this.getError);
    };
    Service.prototype.getArray = function (r) {
        var result;
        if (r != null) {
            result = r.json();
            if (result._embedded)
                return result._embedded;
        }
        result = [];
        return result;
    };
    Service.prototype.getHttp = function () {
        return this._http;
    };
    Service = __decorate([
        core_2.Component({
            providers: [user_service_1.UserService]
        }),
        core_1.Injectable()
    ], Service);
    return Service;
}());
exports.Service = Service;
