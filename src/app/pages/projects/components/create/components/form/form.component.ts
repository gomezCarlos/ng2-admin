import {Component, OnInit} from '@angular/core';
import {Router,ROUTER_DIRECTIVES} from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import {IndicatorHal} from '../../../../../indicator/components/Indicator';
import {IndicatorService} from '../../../../../indicator/components/indicator.service'
import {ProjectService } from '../../../project.service';
import {ProjectHal } from '../../../Project';
import {PaginatedList } from '../../../../../../shared/PaginatedList.component';
//import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'form',
  template: require('./form.html'),
  providers: [ProjectService, IndicatorService],
})

export class Form implements OnInit{
  listindicator : PaginatedList<IndicatorHal>;
  error : any;
  projecthal:ProjectHal;
   param : any;
  
	constructor( private service : ProjectService, private indicators : IndicatorService,private router: Router, private route : ActivatedRoute) {
		this.projecthal = new ProjectHal();
    
  }  
 


  save(project : ProjectHal){
    project.indicator=Number(project.indicator);
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
  }

 //OBTENER LISTA DE PROYECTOS
 getindicators(){
   this.indicators.getPage(0).subscribe(response=>{this.listindicator=response},error => {this.error = error; alert(error.message)})
 }

  delete(project : ProjectHal){
   this.service.delete(project).subscribe(response => {alert("Proyecto Eliminado")},error => {this.error = error; alert(error.message)})

 }
}