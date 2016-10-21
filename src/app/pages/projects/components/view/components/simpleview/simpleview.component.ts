import {Component, OnInit} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../view.service';
import { ProjectService } from '../../../project.service';
import { ProjectHal } from '../../../Project';
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';
import { ActivatedRoute, Router } from '@angular/router'
import {AccountService} from '../../../../../account/components/account.service'
import {AccountHal} from '../../../../../account/components/Account'

@Component({
  selector: 'simple-view',
  template: require('./simpleview.html'),
  pipes: [BaAppPicturePipe],
  providers: [ProjectService, BasicTablesService, HTTP_PROVIDERS, AccountService]
})
export class ResponsiveTable implements OnInit{

  projectsTableData:Array<any>;
  error : any;
  project :ProjectHal;
  param : any;
  page : number;
  projects :PaginatedList<ProjectHal>;


  constructor(private _basicTablesService: BasicTablesService, private service : ProjectService, private route : ActivatedRoute, private accounts : AccountService) {
    this.projectsTableData = _basicTablesService.projectsTableData;
  }
  ngOnInit(){
  	this.param = this.route.params.subscribe(parameter=>{ let id = parameter['id'];
    if(id){
      this.service.find(id).subscribe(project => this.project = project, error => this.error = error;
        if(error.status==403)error.statusText="Usuario no autorizado.";
      );
    }
    else{
      this.project = new ProjectHal();
    }
    }  
  )

  }

 delete(project : ProjectHal){
   this.service.delete(project).subscribe(response => {alert("Proyecto Eliminado")},error => {this.error = error; alert("borrado")})

 }
 
}

