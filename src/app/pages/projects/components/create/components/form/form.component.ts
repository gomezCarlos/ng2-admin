import {Component} from '@angular/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from '@angular/router';
//import {ProjectService} from '../../../projectService';
//import {ProjectHal} from '../../../Project';
import {ProjectService } from '../../../project.service';
import {ProjectHal } from '../../../Project';
import {PaginatedList } from '../../../../../../shared/PaginatedList.component';

@Component({
  selector: 'form',
  template: require('./form.html'),
  providers: [ProjectService],
})
//Asi funcionaba estatico MOISES 05-08/2016
//export class Form {
 // object : ProjectHal
 // constructor(service : ProjectService ) {
//  }
export class Form {
  error : any;
  projecthal:ProjectHal;
  
	constructor( private service : ProjectService, private router: Router) {
		this.projecthal = new ProjectHal();
    
  }

  save(project : ProjectHal){
 	this.service.save(project).subscribe(response => {this.projecthal = response; alert("Proyecto Creado"); this.router.navigate(['/pages/projects/view/' + this.projecthal.ids])},error => {this.error = error; alert(error.message)})

 }

 delete(project : ProjectHal){
 	this.service.delete(project).subscribe(response => {alert("Proyecto Eliminado")},error => {this.error = error; alert(error.message)})

 }
}
