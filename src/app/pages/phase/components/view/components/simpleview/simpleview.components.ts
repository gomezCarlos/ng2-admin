import {Component, OnInit} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../view.service';
import { PhaseService } from '../../../Phase.service';
import { PhaseHal } from '../../../Phase';
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'simple-view',
  template: require('./simpleview.html'),
  pipes: [BaAppPicturePipe],
  providers: [PhaseService, BasicTablesService, HTTP_PROVIDERS]
})
export class ResponsiveTable implements OnInit{

  projectsTableData:Array<any>;
  error : any;
  phase :PhaseHal;
  param : any;
  page : number;
  phases :PaginatedList<PhaseHal>;


  constructor(private _basicTablesService: BasicTablesService, private service : PhaseService, private route : ActivatedRoute) {
    this.projectsTableData = _basicTablesService.projectsTableData;
  }
  ngOnInit(){
  	this.param = this.route.params.subscribe(parameter=>{ let id = parameter['id'];
    if(id){
      this.service.find(id).subscribe(phase => this.phase = phase, error => this.error = error);
    }
    else{
      this.phase = new PhaseHal();
    }
    }  
  )

  }

 delete(phase : PhaseHal){
   this.service.delete(phase).subscribe(response => {alert("Phase Eliminado")},error => {this.error = error; alert("borrado")})

 }
 
}

