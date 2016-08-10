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

  constructor(private _basicTablesService: BasicTablesService, private service : TaskService) {

    this.taskTableData = _basicTablesService.taskTableData;
  }

  ngOnInit(){
  	this.getPage();
  }

  getPage(){
    this.service.getPage(0).subscribe(response => {this.tasks = response;},error => {this.error = error})
  }

  delete(task : TaskHal){
    this.service.delete(task).subscribe(response=>{this.getPage},error => {this.getPage();alert("Error al eliminar")})
  }
}
