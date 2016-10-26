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
import {AccountService} from '../../../../../account/components/account.service'
import {AccountHal} from '../../../../../account/components/Account'

@Component({
  selector: 'form',
  template: require('./form.html'),
  providers: [ProjectService, IndicatorService,DepartmentService,AccountService],
})

export class Form implements OnInit{
  listdepartment : PaginatedList<DepartmentHal>;  
  listindicator : PaginatedList<IndicatorHal>;
  listaccount : PaginatedList<AccountHal>;
  error : any;
  projecthal:ProjectHal;
   param : any;
  
	constructor( private service : ProjectService, private indicators : IndicatorService,private departments : DepartmentService, private router: Router, private route : ActivatedRoute, private accounts : AccountService) {
		this.projecthal = new ProjectHal();
    
  }  
 


  save(project : ProjectHal){
    project.indicator=Number(project.indicator);
    project.department=Number(project.department);
    project.owner=Number(project.owner);
    var projectStartDate = new Date(project.estimatedStartDate+"");
    var projectEndDate = new Date(project.estimatedDateEnd+"");
    var duration = projectEndDate.valueOf() - projectStartDate.valueOf();
    
    if(duration>0)
 	    this.service.save(project).subscribe(response => {this.projecthal = response; alert("Proyecto Creado"); this.router.navigate(['/pages/projects/view/' + this.projecthal.ids])},error => {this.error = error; 
         /* Manejo de errores */
         if(error.status==403)error.statusText="Usuario no autorizado.";
         if(error.status==401)error.statusText="Usuario no autorizado.";
        /*END error */
        })
     else
       alert("Fecha invalida.");
 }

   validateDate(project : ProjectHal){
    var success = false;
    var projectStartDate = new Date(project.estimatedStartDate+"");
    var projectEndDate = new Date(project.estimatedDateEnd+"");
    var duration = projectEndDate.valueOf() - projectStartDate.valueOf();
    if(duration>0){
      success=true;
    }

     return success;
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
  );
    this.getindicators();
    this.getdepartments();
    this.getaccounts();
  }

 //OBTENER LISTA DE INDICADORES
 getindicators(){
   this.indicators.getPage(0).subscribe(response=>{this.listindicator=response},error => {this.error = error; alert(error.message)})
 }
 //OBTENER LISTA DE DEPARTAMENTOS
 getdepartments(){
   this.departments.getPage(0).subscribe(response=>{this.listdepartment=response},error => {this.error = error; alert(error.message)})
 }
// OBTENER LISTA DE USUARIOS
getaccounts(){
   this.accounts.getPage(0).subscribe(response=>{this.listaccount=response},error => {this.error = error; alert(error.message)})
 }
  delete(project : ProjectHal){
   this.service.delete(project).subscribe(response => {alert("Proyecto Eliminado")},error => {this.error = error; alert(error.message)})

 }
}
