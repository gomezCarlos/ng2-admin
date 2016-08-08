import {Component, OnInit} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../list.service';
import { ProjectService } from '../../../project.service';
import { ProjectHal } from '../../../Project';
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';

@Component({
  selector: 'responsive-table',
  template: require('./responsiveTable.html'),
  pipes: [BaAppPicturePipe],
  providers: [ProjectService, BasicTablesService, HTTP_PROVIDERS]
})
export class ResponsiveTable implements OnInit{

  projectsTableData:Array<any>;
   error : any;
  projects :PaginatedList<ProjectHal>;

  constructor(private _basicTablesService: BasicTablesService, private service : ProjectService) {
    this.projectsTableData = _basicTablesService.projectsTableData;
  }
  ngOnInit(){
  	this.getPage();
  }

  getPage(){
    this.service.getPage(0).subscribe(response => {this.projects = response;},error => {this.error = error})
  }

  delete(project : ProjectHal){
    this.service.delete(project).subscribe(response=>{this.getPage},error => {this.getPage();alert("Error al eliminar")})
  }
}





  

  

