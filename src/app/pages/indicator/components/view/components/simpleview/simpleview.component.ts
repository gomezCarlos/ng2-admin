import {Component, OnInit} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../view.service';
import { IndicatorService } from '../../../indicator.service';
import { IndicatorHal } from '../../../Indicator';
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'simple-view',
  template: require('./simpleview.html'),
  pipes: [BaAppPicturePipe],
  providers: [IndicatorService, BasicTablesService, HTTP_PROVIDERS]
})
export class ResponsiveTable implements OnInit{

  projectsTableData:Array<any>;
  error : any;
  indicator :IndicatorHal;
  param : any;
  page : number;
  indicators :PaginatedList<IndicatorHal>;


  constructor(private _basicTablesService: BasicTablesService, private service : IndicatorService, private route : ActivatedRoute) {
    this.projectsTableData = _basicTablesService.projectsTableData;
  }
  ngOnInit(){
  	this.param = this.route.params.subscribe(parameter=>{ let id = parameter['id'];
    if(id){
      this.service.find(id).subscribe(indicator => this.indicator = indicator, error => {this.error = error; 
         /* Manejo de errores */
         if(error.status==403)error.statusText="Usuario no autorizado.";
         if(error.status==401)error.statusText="Usuario no autorizado.";
        /*END error */
        });
    }
    else{
      this.indicator = new IndicatorHal();
    }
    }  
  )

  }

 delete(indicator : IndicatorHal){
   this.service.delete(indicator).subscribe(response => {alert("Indicador Eliminado")},error => {this.error = error; alert("borrado")})

 }
 
}

