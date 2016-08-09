import {Component} from '@angular/core';
//import {ProjectService} from '../../../projectService';
//import {ProjectHal} from '../../../Project';
import { JobService } from '../../../job.service';
import { JobHal } from '../../../Job'
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';

@Component({
  selector: 'form',
  template: require('./form.html'),
  providers: [JobService]
 //providers: [ProjectService],
})
export class Form {
  error : any;
  jobhal:JobHal;
	constructor( private service : JobService) {
		this.jobhal = new JobHal();
    
  }

  //object : ProjectHal

  //constructor(service : ProjectService ) {
 // }

 save(job : JobHal){
 	this.service.save(job).subscribe(response => {this.jobhal = response; alert("Cuenta Creada")},error => {this.error = error; alert(error.message)})

 }

 delete(job : JobHal){
 	this.service.delete(job).subscribe(response => {alert("Cuenta Eliminada")},error => {this.error = error; alert(error.message)})

 }
}
