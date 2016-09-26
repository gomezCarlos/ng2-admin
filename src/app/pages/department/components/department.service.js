"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var api_url_1 = require('../../../shared/api_url');
var service_component_1 = require('../../../shared/service.component');
var user_service_1 = require('../../../shared/user.service');
//
// CREATED AND EDITED BY:
// ING RONALDO MORENO 
// WITH 
// MASTERCOPYPASTE TECNIQUE
// WITH MANY YEAR OF EXPERIENCE
// IN THE AREA
// COMPLETELY GRATEFUL TO GOD
// AND THE BLESSED VIRGIN
//
var DepartmentService = (function (_super) {
    __extends(DepartmentService, _super);
    function DepartmentService(http, user) {
        _super.call(this, http, user);
        this.urlBackend = api_url_1.API_URL + "departments";
    }
    DepartmentService = __decorate([
        core_1.Component({
            providers: [user_service_1.UserService]
        }),
        core_1.Injectable()
    ], DepartmentService);
    return DepartmentService;
}(service_component_1.Service));
exports.DepartmentService = DepartmentService;
