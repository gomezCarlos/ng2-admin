import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../../../../tasks/components/task.service';
import {TaskHal} from '../../../../../tasks/components/Task';
import { IndicatorService } from '../../../indicator.service';
import { IndicatorHal } from '../../../Indicator'
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';

@Component({
  selector: 'form',
  template: require('./form.html'),
  providers: [TaskService,IndicatorService]
 
})
export class Form implements OnInit{
  listtask : PaginatedList<TaskHal>;
  error : any;
  indicatorhal:IndicatorHal;
	constructor( private service : IndicatorService, private tasks : TaskService) {
		this.indicatorhal = new IndicatorHal();
    
  }
 
  save(indicator : IndicatorHal){
 	this.service.save(indicator).subscribe(response => {this.indicatorhal = response; alert("indicador Creado")},error => {this.error = error; 
         /* Manejo de errores */
         if(error.status==403)error.statusText="Usuario no autorizado.";
         if(error.status==401)error.statusText="Usuario no autorizado.";
        /*END error */
        })

 }
 ngOnInit(){
    this.gettasks();
  }

 //OBTENER LISTA DE TAREAS
 gettasks(){
   this.tasks.getPage(0).subscribe(response=>{this.listtask=response},error => {this.error = error; 
         /* Manejo de errores */
         if(error.status==403)error.statusText="Usuario no autorizado.";
         if(error.status==401)error.statusText="Usuario no autorizado.";
        /*END error */
        })
 }


 delete(indicator : IndicatorHal){
 	this.service.delete(indicator).subscribe(response => {alert("Indicador Eliminado")},error => {this.error = error; 
         /* Manejo de errores */
         if(error.status==403)error.statusText="Usuario no autorizado.";
         if(error.status==401)error.statusText="Usuario no autorizado.";
        /*END error */
        })

 }
}



