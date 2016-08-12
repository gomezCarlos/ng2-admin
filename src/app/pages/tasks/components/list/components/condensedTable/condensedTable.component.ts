import {Component, OnInit} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../list.service';
import { TaskService } from '../../../task.service';
import { TaskHal } from '../../../Task';
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';

@Component({
  selector: 'condensed-table',
  template: require('./condensedTable.html'),
  pipes: [BaAppPicturePipe],
  providers: [TaskService, BasicTablesService, HTTP_PROVIDERS]
})
export class CondensedTable implements OnInit{

  taskTableData:Array<any>;
  error : any;
  tasks:PaginatedList<TaskHal>;

  //Variables para los botones de navegacion en las listas
  page : number;
  totalElements : number;
  totalPages : number;
  //******************************************************

  constructor(private _basicTablesService: BasicTablesService, private service : TaskService) {

    this.taskTableData = _basicTablesService.taskTableData;
  }

  ngOnInit(){
  	this.getPage(0);
  }

  getPage(page : number){
    this.service.getPage(0).subscribe(response => {this.tasks = response;},error => {this.error = error})
  }

  delete(task : TaskHal){
    this.service.delete(task).subscribe(response=>{this.getPage},error => {this.getPage();alert("Error al eliminar")})
  }

  first(){
    this.getPage(0);
  }

  last(){
    this.getPage(this.tasks.page.totalPages -1 );
  }

  previous(){
    var page: number;
    if(this.tasks.page.number -1<0)
      page = 0;
    else
      page = this.tasks.page.number -1;
    this.getPage(page);
  }

  next(){
    var page: number;
    if(this.tasks.page.number +1 >= this.tasks.page.totalPages -1)
      page = this.tasks.page.totalPages -1;
    else
      page = this.tasks.page.number +1;
    this.getPage(page);
  }
}
