import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
//import {ProjectService} from '../../../projectService';
//import {ProjectHal} from '../../../Project';
import {ProjectService } from '../../../project.service';
import {ProjectHal } from '../../../Project';
import {PaginatedList } from '../../../../../../shared/PaginatedList.component';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'form',
  template: require('./form.html'),
  providers: [ProjectService, HTTP_PROVIDERS],
})
//Asi funcionaba estatico MOISES 05-08/2016
//export class Form {
 // object : ProjectHal
 // constructor(service : ProjectService ) {
//  }
export class Form implements OnInit{
  error : any;
  projecthal:ProjectHal;
   param : any;
  
	constructor( private service : ProjectService, private router: Router, private route : ActivatedRoute) {
		this.projecthal = new ProjectHal();
    
  }

  save(project : ProjectHal){
 	this.service.save(project).subscribe(response => {this.projecthal = response; alert("Proyecto Creado"); this.router.navigate(['/pages/projects/view/' + this.projecthal.ids])},error => {this.error = error; alert(error.message)})

 }

 delete(project : ProjectHal){
 	this.service.delete(project).subscribe(response => {alert("Proyecto Eliminado")},error => {this.error = error; alert(error.message)})

 }
 ngOnInit(){
 	this.param = this.route.params.subscribe(parameter=>{ let id = parameter['id'];
    if(id){
      this.service.find(id).subscribe(project => this.projecthal = project, error => this.error = error);
    }
    else{
      this.projecthal = new ProjectHal();
    }
    }  
  )

 }
}
