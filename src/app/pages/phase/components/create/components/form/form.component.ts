import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../../../projects/components/project.service';
import {Router,ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import {ProjectHal} from '../../../../../projects/components/Project';
import { PhaseService } from '../../../phase.service';
import { PhaseHal } from '../../../Phase';
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';
import {IndicatorHal} from '../../../../../indicator/components/Indicator';
import {IndicatorService} from '../../../../../indicator/components/indicator.service'
import {DepartmentHal} from '../../../../../department/components/department';
import {DepartmentService} from '../../../../../department/components/department.service'
import {AccountHal} from '../../../../../account/components/Account';
import {AccountService} from '../../../../../account/components/account.service';

@Component({
  selector: 'form',
  template: require('./form.html'),
  providers: [PhaseService,ProjectService,IndicatorService,DepartmentService, AccountService]  
})

export class Form  implements OnInit{
   param : any;
  listdepartment : PaginatedList<DepartmentHal>;
  listproject : PaginatedList<ProjectHal>;
  listindicator : PaginatedList<IndicatorHal>;
  listaccount : PaginatedList<AccountHal>;
  error : any;
  phasehal:PhaseHal;
	constructor( private service : PhaseService, private route : ActivatedRoute, private projects : ProjectService, private indicators : IndicatorService,private departments : DepartmentService, private router : Router, private accounts : AccountService) {
		this.phasehal = new PhaseHal();
    
  }

 

 save(phase : PhaseHal){
   phase.project=Number(phase.project);
   phase.department=Number(phase.department);
   phase.indicator=Number(phase.indicator);
   phase.account=Number(phase.account);
 	this.service.save(phase).subscribe(response => {this.phasehal = response; alert("Fase Creada");this.router.navigate(['/pages/phase/view/' + this.phasehal.ids])},error => {this.error = error; alert(error.message)})

 }


 ngOnInit(){    this.param = this.route.params.subscribe(parameter=>{ let id = parameter['id'];
    if(id){
      this.service.find(id).subscribe(phase => this.phasehal = phase, error => this.error = error);
    }
    else{
      this.phasehal = new PhaseHal();
    }
    }  
  )
    this.getprojects();
    this.getindicators();
    this.getdepartments();
    this.getaccounts();
  }

 //OBTENER LISTA DE PROYECTOS
 getprojects(){
   this.projects.getPage(0).subscribe(response=>{this.listproject=response},error => {this.error = error; alert(error.message)})
 }

 //OBTENER LISTA DE INDICADORES
 getindicators(){
   this.indicators.getPage(0).subscribe(response=>{this.listindicator=response},error => {this.error = error; alert(error.message)})
 }
 //OBTENER LISTA DE PROYECTOS
 getdepartments(){
   this.departments.getPage(0).subscribe(response=>{this.listdepartment=response},error => {this.error = error; alert(error.message)})
 }
 //OBTENER LISTA DE USUARIOS
 getaccounts(){
   this.accounts.getPage(0).subscribe(response=>{this.listaccount=response},error => {this.error = error; alert(error.message)})
 }
 delete(phase : PhaseHal){
 	this.service.delete(phase).subscribe(response => {alert("Fase Eliminada")},error => {this.error = error; alert(error.message)})

 }
}
