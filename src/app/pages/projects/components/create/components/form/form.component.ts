import {Component, OnInit} from '@angular/core';
import { Router,ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import {IndicatorHal} from '../../../../../indicator/components/Indicator';
import {IndicatorService} from '../../../../../indicator/components/indicator.service'
import {ProjectService } from '../../../project.service';
import {ProjectHal } from '../../../Project';
import {DepartmentHal} from '../../../../../department/components/department';
import {DepartmentService} from '../../../../../department/components/department.service'
import {PaginatedList } from '../../../../../../shared/PaginatedList.component';

@Component({
  selector: 'form',
  template: require('./form.html'),
  providers: [ProjectService, IndicatorService,DepartmentService],
})

export class Form implements OnInit{
  listdepartment : PaginatedList<DepartmentHal>;  
  listindicator : PaginatedList<IndicatorHal>;
  error : any;
  projecthal:ProjectHal;
   param : any;
  
	constructor( private service : ProjectService, private indicators : IndicatorService,private departments : DepartmentService, private router: Router, private route : ActivatedRoute) {
		this.projecthal = new ProjectHal();
    
  }  
 


  save(project : ProjectHal){
    project.indicator=Number(project.indicator);
    project.department=Number(project.department);
 	this.service.save(project).subscribe(response => {this.projecthal = response; alert("Proyecto Creado"); this.router.navigate(['/pages/projects/view/' + this.projecthal.ids])},error => {this.error = error; alert(error.message)})

 }


 ngOnInit(){
       this.param = this.route.params.subscribe(parameter=>{ let id = parameter['id'];
    if(id){
      this.service.find(id).subscribe(task => this.projecthal = task, error => this.error = error);
    }
    else{
      this.projecthal = new ProjectHal();
    }
    }  
  );
    this.getindicators();
    this.getdepartments();
  }

 //OBTENER LISTA DE PROYECTOS
 getindicators(){
   this.indicators.getPage(0).subscribe(response=>{this.listindicator=response},error => {this.error = error; alert(error.message)})
 }
 //OBTENER LISTA DE PROYECTOS
 getdepartments(){
   this.departments.getPage(0).subscribe(response=>{this.listdepartment=response},error => {this.error = error; alert(error.message)})
 }

  delete(project : ProjectHal){
   this.service.delete(project).subscribe(response => {alert("Proyecto Eliminado")},error => {this.error = error; alert(error.message)})

 }
}
