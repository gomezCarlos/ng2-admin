import {Component, OnInit} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../list.service';
import {DepartmentService} from '../../../department.service';
import {DepartmentHal} from '../../../department';
import {PaginatedList} from '../../../../../../shared/PaginatedList.component';
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
  selector: 'responsive-table',
  template: require('./responsiveTable.html'),
  pipes: [BaAppPicturePipe],
  providers: [DepartmentService, BasicTablesService, HTTP_PROVIDERS]
})
export class ResponsiveTable implements OnInit{

  jobsTableData:Array<any>;
  error : any;
  departments :PaginatedList<DepartmentHal>;
  isEmpty : boolean = true;

  //Variables para los botones de navegacion en las listas
  page : number;
  totalElements : number;
  totalPages : number;
  //******************************************************

  constructor(private _basicTablesService: BasicTablesService, private service : DepartmentService) {
  }
  ngOnInit(){
  	this.getPage(0);
  }

  getPage(page : number){
    this.isEmpty = false;
    this.service.getPage(0).subscribe(response => {this.departments = response; if(response._embedded == null)this.isEmpty=true; },error => {this.error = error})
  }

  delete(department : DepartmentHal){
    this.service.delete(department).subscribe(response=>{this.getPage},error => {this.getPage(0);alert("Error al eliminar")})
  }

  first(){
    this.getPage(0);
  }

  last(){
    this.getPage(this.departments.page.totalPages -1 );
  }

  previous(){
    var page: number;
    if(this.departments.page.number -1<0)
      page = 0;
    else
      page = this.departments.page.number -1;
    this.getPage(page);
  }

  next(){
    var page: number;
    if(this.departments.page.number +1 >= this.departments.page.totalPages -1)
      page = this.departments.page.totalPages -1;
    else
      page = this.departments.page.number +1;
    this.getPage(page);
  }
}
