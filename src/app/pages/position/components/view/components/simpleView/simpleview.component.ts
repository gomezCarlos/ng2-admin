import {Component, OnInit} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../view.service';
import { PositionService } from '../../../position.service';
import { PositionHal } from '../../../position';
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'simple-view',
  template: require('./simpleview.html'),
  pipes: [BaAppPicturePipe],
  providers: [PositionService, BasicTablesService, HTTP_PROVIDERS]
})
export class ResponsiveTable implements OnInit{

  projectsTableData:Array<any>;
  error : any;
  Position :PositionHal;
  param : any;
  page : number;
  positions :PaginatedList<PositionHal>;


  constructor(private _basicTablesService: BasicTablesService, private service : PositionService, private route : ActivatedRoute) {
    this.projectsTableData = _basicTablesService.projectsTableData;
  }
  ngOnInit(){
  	this.param = this.route.params.subscribe(parameter=>{ let id = parameter['id'];
    if(id){
      this.service.find(id).subscribe(position => this.position = position, error => {this.error = error; 
         /* Manejo de errores */
         if(error.status==403)error.statusText="Usuario no autorizado.";
         if(error.status==401)error.statusText="Usuario no autorizado.";
        /*END error */
        });
    }
    else{
      this.position = new PositionHal();
    }
    }  
  )

  }

 delete(position : PositionHal){
   this.service.delete(position).subscribe(response => {alert("Cargo Eliminado")},error => {this.error = error; alert("borrado")})

 }
 
}

