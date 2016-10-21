import {Component, OnInit} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../list.service';
import { JobService } from '../../../job.service';
import { JobHal } from '../../../Job';
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';
import { Panel } from './panel';

@Component({
  selector: 'responsive-table',
  template: require('./responsiveTable2.html'),
  pipes: [BaAppPicturePipe],
  providers: [JobService, BasicTablesService, HTTP_PROVIDERS],
  directives: [Panel]
})
export class ResponsiveTable implements OnInit{


  peopleTableData:Array<any>;
  error : any;
  jobs :PaginatedList<JobHal>;
 
  //Variables para los botones de navegacion en las listas.
  page : number;
  totalElements : number;
  totalPages : number;
  //******************************************************

  constructor(private _basicTablesService: BasicTablesService, private service : JobService) {
  }
  ngOnInit(){
    this.getPage(0);
  }

  getPage(page : number){
    this.service.getPage(page).subscribe(response => {this.jobs = response;},error => {this.error = error})
  }

  delete(job : JobHal){
    this.service.delete(job).subscribe(response=>{this.getPage},error => {this.getPage(0);alert("Error al eliminar")})
  }


  first(){
    this.getPage(0);
  }

  last(){
    this.getPage(this.jobs.page.totalPages -1 );
  }

  previous(){
    var page: number;
    if(this.jobs.page.number -1<0)
      page = 0;
    else
      page = this.jobs.page.number -1;
    this.getPage(page);
  }

  next(){
    var page: number;
    if(this.jobs.page.number +1 >= this.jobs.page.totalPages -1)
      page = this.jobs.page.totalPages -1;
    else
      page = this.jobs.page.number +1;
    this.getPage(page);
  }
}
