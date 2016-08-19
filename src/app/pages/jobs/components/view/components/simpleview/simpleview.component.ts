import {Component, OnInit} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../view.service';
import { JobService } from '../../../job.service';
import { JobHal } from '../../../Job';
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'simple-view',
  template: require('./simpleview.html'),
  pipes: [BaAppPicturePipe],
  providers: [JobService, BasicTablesService, HTTP_PROVIDERS]
})
export class ResponsiveTable implements OnInit{

  projectsTableData:Array<any>;
  error : any;
  job :JobHal;
  param : any;
  page : number;
  jobs :PaginatedList<JobHal>;


  constructor(private _basicTablesService: BasicTablesService, private service : JobService, private route : ActivatedRoute) {
    this.projectsTableData = _basicTablesService.projectsTableData;
  }
  ngOnInit(){
  	this.param = this.route.params.subscribe(parameter=>{ let id = parameter['id'];
    if(id){
      this.service.find(id).subscribe(job => this.job = job, error => this.error = error);
    }
    else{
      this.job = new JobHal();
    }
    }  
  )

  }

 delete(job : JobHal){
   this.service.delete(job).subscribe(response => {alert("Proyecto Eliminado")},error => {this.error = error; alert("borrado")})

 }
 
}

