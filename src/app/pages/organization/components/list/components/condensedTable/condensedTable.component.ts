import {Component, OnInit} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../list.service';
import { OrganizationService } from '../../../organization.service';
import { OrganizationHal } from '../../../Organization';
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';
import { Panel } from './panel';
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
  providers: [OrganizationService, BasicTablesService, HTTP_PROVIDERS]
  //directives: [Panel]
})
export class CondensedTable implements OnInit{

  peopleTableData:Array<any>;
  error : any;
  organizations:PaginatedList<OrganizationHal>;
  
  //Variables para los botones de navegacion en las listas
  page : number;
  totalElements : number;
  totalPages : number;
  //******************************************************

  constructor(private _basicTablesService: BasicTablesService, private service : OrganizationService) {
 }

  ngOnInit(){
  	this.getPage(0);
  }

  getPage(page : number){
    this.service.getPage(page).subscribe(response => {this.organizations = response;},error => {this.error = error})
  }

  delete(organization : OrganizationHal){
    this.service.delete(organization).subscribe(response=>{this.getPage},error => {this.getPage(0);alert("Error al eliminar")})
  }

  first(){
    this.getPage(0);
  }

  last(){
    this.getPage(this.organizations.page.totalPages -1 );
  }

  previous(){
    var page: number;
    if(this.organizations.page.number -1<0)
      page = 0;
    else
      page = this.organizations.page.number -1;
    this.getPage(page);
  }

  next(){
    var page: number;
    if(this.organizations.page.number +1 >= this.organizations.page.totalPages -1)
      page = this.organizations.page.totalPages -1;
    else
      page = this.organizations.page.number +1;
    this.getPage(page);
  }
}
