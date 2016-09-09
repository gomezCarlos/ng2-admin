import {Component, OnInit} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../list.service';
import { CompanyService } from '../../../company.service';
import { CompanyHal } from '../../../company';
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
  selector: 'condensed-table',
  template: require('./condensedTable.html'),
  pipes: [BaAppPicturePipe],
  providers: [CompanyService, BasicTablesService, HTTP_PROVIDERS]
})
export class CondensedTable implements OnInit{

  peopleTableData:Array<any>;
  error : any;
  companys:PaginatedList<CompanyHal>;
  
  //Variables para los botones de navegacion en las listas
  page : number;
  totalElements : number;
  totalPages : number;
  //******************************************************

  constructor(private _basicTablesService: BasicTablesService, private service : CompanyService) {

    this.peopleTableData = _basicTablesService.peopleTableData;
  }

  ngOnInit(){
  	this.getPage(0);
  }

  getPage(page : number){
    this.service.getPage(page).subscribe(response => {this.companys = response;},error => {this.error = error})
  }

  delete(company : CompanyHal){
    this.service.delete(company).subscribe(response=>{this.getPage},error => {this.getPage(0);alert("Error al eliminar")})
  }

  first(){
    this.getPage(0);
  }

  last(){
    this.getPage(this.companys.page.totalPages -1 );
  }

  previous(){
    var page: number;
    if(this.companys.page.number -1<0)
      page = 0;
    else
      page = this.companys.page.number -1;
    this.getPage(page);
  }

  next(){
    var page: number;
    if(this.companys.page.number +1 >= this.companys.page.totalPages -1)
      page = this.companys.page.totalPages -1;
    else
      page = this.companys.page.number +1;
    this.getPage(page);
  }
}
