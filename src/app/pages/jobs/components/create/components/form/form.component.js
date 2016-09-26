"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var task_service_1 = require('../../../../../tasks/components/task.service');
var job_service_1 = require('../../../job.service');
var phase_service_1 = require('../../../../../phase/components/phase.service');
var department_service_1 = require('../../../../../department/components/department.service');
var project_service_1 = require('../../../../../projects/components/project.service');
var Job_1 = require('../../../Job');
var http_1 = require('@angular/http');
var Form = (function () {
    function Form(service, departments, tasks, phases, projects, router, route) {
        this.service = service;
        this.tasks = tasks;
        this.phases = phases;
        this.projects = projects;
        this.router = router;
        this.route = route;
        this.jobhal = new Job_1.JobHal();
    }
    Form.prototype.save = function (job) {
        var _this = this;
        job.task = Number(job.task);
        this.service.save(job).subscribe(function (response) { _this.jobhal = response; alert("trabajo Creado"); _this.router.navigate(['/pages/jobs/view/' + _this.jobhal.ids]); }, function (error) { _this.error = error; alert(error.message); });
    };
    Form.prototype.ngOnInit = function () {
        var _this = this;
        this.param = this.route.params.subscribe(function (parameter) {
            var id = parameter['id'];
            if (id) {
                _this.service.find(id).subscribe(function (job) { return _this.jobhal = job; }, function (error) { return _this.error = error; });
            }
            else {
                _this.jobhal = new Job_1.JobHal();
            }
        });
        this.gettasks();
        this.getphases();
        this.getprojects();
        this.getdepartments();
    };
    //OBTENER LISTA DE TAREAS
    Form.prototype.gettasks = function () {
        var _this = this;
        this.tasks.getPage(0).subscribe(function (response) { _this.listtask = response; }, function (error) { _this.error = error; alert(error.message); });
    };
    Form.prototype.getphases = function () {
        var _this = this;
        this.phases.getPage(0).subscribe(function (response) { _this.listphase = response; }, function (error) { _this.error = error; alert(error.message); });
    };
    Form.prototype.getprojects = function () {
        var _this = this;
        this.projects.getPage(0).subscribe(function (response) { _this.listproject = response; }, function (error) { _this.error = error; alert(error.message); });
    };
    Form.prototype.updatePhases = function (id) {
        var _this = this;
        this.projects.getPhases(id).subscribe(function (response) { _this.listphase = response; }, function (error) { _this.error = error; alert(error.message); });
    };
    Form.prototype.updateTasks = function (id) {
        var _this = this;
        this.phases.getTasks(id).subscribe(function (response) { _this.listtask = response; }, function (error) { _this.error = error; alert(error.message); });
    };
    Form.prototype.getdepartments = function () {
        var _this = this;
        this.departments.getPage(0).subscribe(function (response) { _this.listdepartment = response; }, function (error) { _this.error = error; alert(error.message); });
    };
    Form.prototype.delete = function (job) {
        var _this = this;
        this.service.delete(job).subscribe(function (response) { alert("Cuenta Eliminada"); }, function (error) { _this.error = error; alert(error.message); });
    };
    Form = __decorate([
        core_1.Component({
            selector: 'form',
            template: require('./form.html'),
            providers: [task_service_1.TaskService, phase_service_1.PhaseService, project_service_1.ProjectService, department_service_1.DepartmentService, job_service_1.JobService, http_1.HTTP_PROVIDERS]
        })
    ], Form);
    return Form;
}());
exports.Form = Form;
