import {Component, OnInit} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../list.service';
import { PhaseService } from '../../../phase.service';
import { PhaseHal } from '../../../Phase';
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';

@Component({
  selector: 'condensed-table',
  template: require('./condensedTable.html'),
  pipes: [BaAppPicturePipe],
  providers: [PhaseService, BasicTablesService, HTTP_PROVIDERS]
})
export class CondensedTable implements OnInit{

  peopleTableData:Array<any>;
  error : any;
  phases:PaginatedList<PhaseHal>;
  
  //Variables para los botones de navegacion en las listas
  page : number;
  totalElements : number;
  totalPages : number;
  //******************************************************

  constructor(private _basicTablesService: BasicTablesService, private service : PhaseService) {

    this.peopleTableData = _basicTablesService.peopleTableData;
  }

  ngOnInit(){
  	this.getPage(0);
  }

  getPage(page : number){
    this.service.getPage(page).subscribe(response => {this.phases = response;},error => {this.error = error})
  }

  delete(phase : PhaseHal){
    this.service.delete(phase).subscribe(response=>{this.getPage},error => {this.getPage();alert("Error al eliminar")})
  }

  first(){
    this.getPage(0);
  }

  last(){
    this.getPage(this.phases.page.totalPages -1 );
  }

  previous(){
    var page: number;
    if(this.phases.page.number -1<0)
      page = 0;
    else
      page = this.phases.page.number -1;
    this.getPage(page);
  }

  next(){
    var page: number;
    if(this.phases.page.number +1 >= this.phases.page.totalPages -1)
      page = this.phases.page.totalPages -1;
    else
      page = this.phases.page.number +1;
    this.getPage(page);
  }
}