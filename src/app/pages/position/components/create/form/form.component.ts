import {Component, OnInit} from '@angular/core';
//import {TaskService} from '../../../../../tasks/components/task.service';
//import {TaskHal} from '../../../../../tasks/components/Task';
import { PositionService } from '../../position.service';
import { PositionHal } from '../../position';
import { PaginatedList } from '../../../../../shared/PaginatedList.component';

@Component({   
  selector: 'form',
  template: require('./form.html'),
  providers: [PositionService,PositionHal]
 
})
export class Form implements OnInit{
  error : any;
  positionhal:PositionHal; 
	constructor( private service : PositionService) {
		this.positionhal = new PositionHal();
    
  }

  save(position : PositionHal){
 	this.service.save(position).subscribe(response => {this.positionhal = response; alert("Cargo Creado Exitosamente")},error => {this.error = error; alert(error.message)})

 }
 ngOnInit(){
  }


 delete(position : PositionHal){
 	this.service.delete(position).subscribe(response => {alert("Cargo Eliminado Exitosamente")},error => {this.error = error; alert(error.message)})

 }
}