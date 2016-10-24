import {Component, OnInit} from '@angular/core';
//import {TaskService} from '../../../../../tasks/components/task.service';
//import {TaskHal} from '../../../../../tasks/components/Task';
import { DepartmentService } from '../../../department.service';
import { DepartmentHal } from '../../../department';
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';
//
// CREATED AND EDITED BY:
// ING RONALDO MORENO 
// WITH 
// MASTERCOPYPASTE TECNIQUE
// WITH MANY YEAR OF EXPERIENCE
// IN THE AREA
// COMPLETELY GRATEFUL TO GOD
// AND THE BLESSED VIRGIN
//

@Component({
  selector: 'form',
  template: require('./form.html'),
  providers: [DepartmentService,DepartmentHal]
 
})
export class Form implements OnInit{
  error : any;
  departmenthal:DepartmentHal;
	constructor( private service : DepartmentService) {
		this.departmenthal = new DepartmentHal();
    
  }
 
  save(department : DepartmentHal){
 	this.service.save(department).subscribe(response => {this.departmenthal = response; alert("Departamento Creado")},error => {this.error = error; 
         /* Manejo de errores */
         if(error.status==403)error.statusText="Usuario no autorizado.";
        /*END error */
        })

 }
 ngOnInit(){
  }


 delete(department : DepartmentHal){
 	this.service.delete(department).subscribe(response => {alert("Departamento Eliminado")},error => {this.error = error; 
         /* Manejo de errores */
         if(error.status==403)error.statusText="Usuario no autorizado.";
        /*END error */
        })

 }
}



