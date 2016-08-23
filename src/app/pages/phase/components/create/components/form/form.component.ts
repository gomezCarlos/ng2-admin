import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../../../projects/components/project.service';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {ProjectHal} from '../../../../../projects/components/Project';
import { PhaseService } from '../../../phase.service';
import { PhaseHal } from '../../../Phase';
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';

@Component({
  selector: 'form',
  template: require('./form.html'),
  providers: [PhaseService,ProjectService]  
})

export class Form  implements OnInit{
  listproject : PaginatedList<ProjectHal>;
  error : any;
  phasehal:PhaseHal;
	constructor( private service : PhaseService, private projects : ProjectService, private router : Router) {
		this.phasehal = new PhaseHal();
    
  }

  //object : ProjectHal

  //constructor(service : ProjectService ) {
 // }

 save(phase : PhaseHal){
   phase.project=Number(phase.project);
 	this.service.save(phase).subscribe(response => {this.phasehal = response; alert("Fase Creada");this.router.navigate(['/pages/phase/view/' + this.phasehal.ids])},error => {this.error = error; alert(error.message)})

 }


 ngOnInit(){
    this.getprojects();
  }

 //OBTENER LISTA DE PROYECTOS
 getprojects(){
   this.projects.getPage(0).subscribe(response=>{this.listproject=response},error => {this.error = error; alert(error.message)})
 }

 delete(phase : PhaseHal){
 	this.service.delete(phase).subscribe(response => {alert("Fase Eliminada")},error => {this.error = error; alert(error.message)})

 }
}
