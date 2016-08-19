import {Component, OnInit} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../list.service';
import {EndPointServiceAuthenticationService} from '../../../EndPointServiceAuthentication.service';
import {EndPointServiceAuthenticationHal} from '../../../EndPointServiceAuthentication';
import {PaginatedList} from '../../../../../../shared/PaginatedList.component';

@Component({
  selector: 'responsive-table',
  template: require('./responsiveTable.html'),
  pipes: [BaAppPicturePipe],
  providers: [EndPointServiceAuthenticationService, BasicTablesService, HTTP_PROVIDERS]
})
export class ResponsiveTable implements OnInit{

  endPointServiceAuthenticationTableData : Array<any>;
  error : any;
  endPointServiceAuthentications : PaginatedList<EndPointServiceAuthenticationHal>;
  isEmpty : boolean = true;

  //Variables para los botones de navegacion en las listas
  page : number;
  totalElements : number;
  totalPages : number;
  //******************************************************

  constructor(private service : EndPointServiceAuthenticationService) {
  }
  
  ngOnInit(){
  	this.getPage(0);
  }

  getPage(page : number){
    this.isEmpty = false;
    this.service.getPage(0).subscribe(response => {this.endPointServiceAuthentications = response; if(response._embedded == null)this.isEmpty=true; },error => {this.error = error})
  }

  delete(endPointServiceAuthentication : EndPointServiceAuthenticationHal){
    this.service.delete(endPointServiceAuthentication).subscribe(response=>{this.getPage},error => {this.getPage(0);alert("Error al eliminar")})
  }

  first(){
    this.getPage(0);
  }

  last(){
    this.getPage(this.endPointServiceAuthentications.getPage().getTotalPages() -1 );
  }

  previous(){
    var page: number;
    if(this.endPointServiceAuthentications.getPage().getNumber() -1<0)
      page = 0;
    else
      page = this.endPointServiceAuthentications.getPage().getNumber() -1;
    this.getPage(page);
  }

  next(){
    var page: number;
    if(this.endPointServiceAuthentications.getPage().getNumber() +1 >= this.endPointServiceAuthentications.getPage().getTotalPages() -1)
      page = this.endPointServiceAuthentications.getPage().getTotalPages() -1;
    else
      page = this.endPointServiceAuthentications.getPage().getNumber() +1;
    this.getPage(page);
  }
}
