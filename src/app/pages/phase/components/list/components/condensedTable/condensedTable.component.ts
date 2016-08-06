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

  constructor(private _basicTablesService: BasicTablesService, private service : PhaseService) {

    this.peopleTableData = _basicTablesService.peopleTableData;
  }

  ngOnInit(){
  	this.getPage();
  }

  getPage(){
    this.service.getPage(0).subscribe(response => {this.phases = response;},error => {this.error = error})
  }

  delete(phase : PhaseHal){
    this.service.delete(phase).subscribe(response=>{this.getPage},error => {this.getPage();alert("Error al eliminar")})
  }
}
