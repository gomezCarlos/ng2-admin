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

  constructor(private _basicTablesService: BasicTablesService, private service : JobService) {
    this.jobsTableData = _basicTablesService.jobsTableData;
  }
  ngOnInit(){
  	this.getPage();
  }

  getPage(){
    this.isEmpty = false;
    this.service.getPage(0).subscribe(response => {this.jobs = response; if(response._embedded == null)this.isEmpty=true; },error => {this.error = error})
  }

  delete(job : JobHal){
    this.service.delete(job).subscribe(response=>{this.getPage},error => {this.getPage();alert("Error al eliminar")})
  }
}





  

  

