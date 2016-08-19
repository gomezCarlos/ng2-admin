import {Component, OnInit} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../list.service';
import { ProjectService } from '../../../project.service';
import { ProjectHal } from '../../../Project';
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';
import { Panel } from './panel';

@Component({
  selector: 'responsive-table',

  template: require('./responsiveTable.html'),
  pipes: [BaAppPicturePipe],
  providers: [ProjectService, BasicTablesService, HTTP_PROVIDERS],
  directives: [Panel]
})
export class ResponsiveTable implements OnInit{


  peopleTableData:Array<any>;
  error : any;
  projects :PaginatedList<ProjectHal>;
 
  //Variables para los botones de navegacion en las listas
  page : number;
  totalElements : number;
  totalPages : number;
  //******************************************************

  constructor(private _basicTablesService: BasicTablesService, private service : ProjectService) {
  }
  ngOnInit(){
  	this.getPage(0);
  }

  getPage(page : number){
    this.service.getPage(page).subscribe(response => {this.projects = response;},error => {this.error = error})
  }

  delete(project : ProjectHal){
    this.service.delete(project).subscribe(response=>{this.getPage},error => {this.getPage(0);alert("Error al eliminar")})
  }


  first(){
    this.getPage(0);
  }

  last(){
    this.getPage(this.projects.page.totalPages -1 );
  }

  previous(){
    var page: number;
    if(this.projects.page.number -1<0)
      page = 0;
    else
      page = this.projects.page.number -1;
    this.getPage(page);
  }

  next(){
    var page: number;
    if(this.projects.page.number +1 >= this.projects.page.totalPages -1)
      page = this.projects.page.totalPages -1;
    else
      page = this.projects.page.number +1;
    this.getPage(page);
  }
}
