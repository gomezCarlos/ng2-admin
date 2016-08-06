import {Component} from '@angular/core';
//import {ProjectService} from '../../../projectService';
//import {ProjectHal} from '../../../Project';
import { PhaseService } from '../../../phase.service';
import { PhaseHal } from '../../../Phase';
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';

@Component({
  selector: 'form',
  template: require('./form.html'),
  providers: [PhaseService]
 //providers: [ProjectService],
})
export class Form {
  error : any;
  phasehal:PhaseHal;
	constructor( private service : PhaseService) {
		this.phasehal = new PhaseHal();
    
  }

  //object : ProjectHal

  //constructor(service : ProjectService ) {
 // }

 save(account : PhaseHal){
 	this.service.save(phase).subscribe(response => {this.phasehal = response; alert("Fase Creada")},error => {this.error = error; alert(error.message)})

 }

 delete(account : PhaseHal){
 	this.service.delete(phase).subscribe(response => {alert("Fase Eliminada")},error => {this.error = error; alert(error.message)})

 }
}
