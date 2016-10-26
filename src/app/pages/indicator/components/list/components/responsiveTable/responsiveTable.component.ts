import {Component, OnInit} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../list.service';
import {IndicatorService} from '../../../indicator.service';
import {IndicatorHal} from '../../../Indicator';
import {PaginatedList} from '../../../../../../shared/PaginatedList.component';

@Component({
  selector: 'responsive-table',
  template: require('./responsiveTable.html'),
  pipes: [BaAppPicturePipe],
  providers: [IndicatorService, BasicTablesService, HTTP_PROVIDERS]
})
export class ResponsiveTable implements OnInit{

  jobsTableData:Array<any>;
  error : any;
  indicators :PaginatedList<IndicatorHal>;
  isEmpty : boolean = true;

  //Variables para los botones de navegacion en las listas
  page : number;
  totalElements : number;
  totalPages : number;
  //******************************************************

  constructor(private _basicTablesService: BasicTablesService, private service : IndicatorService) {
  }
  ngOnInit(){
  	this.getPage(0);
  }

  getPage(page : number){
    this.isEmpty = false;
    this.service.getPage(0).subscribe(response => {this.indicators = response; if(response._embedded == null)this.isEmpty=true; },error => {this.error = error; 
         /* Manejo de errores */
         if(error.status==403)error.statusText="Usuario no autorizado.";
         if(error.status==401)error.statusText="Usuario no autorizado.";
        /*END error */
        })
  }

  delete(indicator : IndicatorHal){
    this.service.delete(indicator).subscribe(response=>{this.getPage},error => {this.getPage(0);alert("Error al eliminar")})
  }

  first(){
    this.getPage(0);
  }

  last(){
    this.getPage(this.indicators.page.totalPages -1 );
  }

  previous(){
    var page: number;
    if(this.indicators.page.number -1<0)
      page = 0;
    else
      page = this.indicators.page.number -1;
    this.getPage(page);
  }

  next(){
    var page: number;
    if(this.indicators.page.number +1 >= this.indicators.page.totalPages -1)
      page = this.indicators.page.totalPages -1;
    else
      page = this.indicators.page.number +1;
    this.getPage(page);
  }
}
