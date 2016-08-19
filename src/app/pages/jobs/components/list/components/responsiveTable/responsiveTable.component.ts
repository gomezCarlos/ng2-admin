import {Component, OnInit} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../list.service';
import {JobService} from '../../../job.service';
import {JobHal} from '../../../Job';
import {PaginatedList} from '../../../../../../shared/PaginatedList.component';

@Component({
  selector: 'responsive-table',
  template: require('./responsiveTable.html'),
  pipes: [BaAppPicturePipe],
  providers: [JobService, BasicTablesService, HTTP_PROVIDERS]
})
export class ResponsiveTable implements OnInit{

  jobsTableData:Array<any>;
  error : any;
  jobs :PaginatedList<JobHal>;
  isEmpty : boolean = true;

  //Variables para los botones de navegacion en las listas
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
    this.isEmpty = false;
    this.service.getPage(0).subscribe(response => {this.jobs = response; if(response._embedded == null)this.isEmpty=true; },error => {this.error = error})
  }

  delete(job : JobHal){
    this.service.delete(job).subscribe(response=>{this.getPage},error => {this.getPage(0);alert("Error al eliminar")})
  }

  first(){
    this.getPage(0);
  }

  last(){
    this.getPage(this.jobs.getPage().getTotalPages() -1 );
  }

  previous(){
    var page: number;
    if(this.jobs.getPage().getNumber() -1<0)
      page = 0;
    else
      page = this.jobs.getPage().getNumber() -1;
    this.getPage(page);
  }

  next(){
    var page: number;
    if(this.jobs.getPage().getNumber() +1 >= this.jobs.getPage().getTotalPages() -1)
      page = this.jobs.getPage().getTotalPages() -1;
    else
      page = this.jobs.getPage().getNumber() +1;
    this.getPage(page);
  }
}





  

  

