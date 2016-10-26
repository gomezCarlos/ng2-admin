import {Component, OnInit} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../view.service';
import { TaskService } from '../../../task.service';
import { TaskHal } from '../../../Task';
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'simple-view',
  template: require('./simpleview.html'),
  pipes: [BaAppPicturePipe],
  providers: [TaskService, BasicTablesService, HTTP_PROVIDERS]
})
export class ResponsiveTable implements OnInit{

  projectsTableData:Array<any>;
  error : any;
  task : TaskHal;
  param : any;
  page : number;
  Tasks :PaginatedList<TaskHal>;


  constructor(private service : TaskService, private route : ActivatedRoute, private router) {   
  }
  ngOnInit(){
  	this.param = this.route.params.subscribe(parameter=>{ let id = parameter['id'];
    if(id){
      this.service.find(id).subscribe(task => this.task = task, error => {this.error = error; 
        /* Manejo de errores */
         if(error.status==401){
           error.statusText="Usuario no autorizado.";
           this.router.navigate(['login']);
         }
         if(error.status==403)error.statusText="Usuario no autorizado.";
         if(error.status==401)error.statusText="Usuario no autorizado.";

        /*END error */}
        );
         
    }
    else{
      this.task = new TaskHal();
    }
    }  
  )

  }

 delete(task : TaskHal){
   this.service.delete(task).subscribe(response => {alert("Proyecto Eliminado")},error => {this.error = error; alert("borrado")})

 }
 
}

