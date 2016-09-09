import {Component, OnInit} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../view.service';
import { CompanyService } from '../../../company.service';
import { CompanyHal } from '../../../company';
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';
import { ActivatedRoute, Router } from '@angular/router'
//
// CREATED AND EDITED BY:
// ING RONALDO MORENO 
// WITH 
// MASTERCOPYPASTE TECNIQUE
// WITH MANY YEAR OF EXPERIENCE
// IN THE AREA
// COMPLETELY GRATEFUL TO GOD
// AND THE BLESSED VIRGIN
//

@Component({
  selector: 'simple-view',
  template: require('./simpleview.html'),
  pipes: [BaAppPicturePipe],
  providers: [CompanyService, BasicTablesService, HTTP_PROVIDERS]
})
export class ResponsiveTable implements OnInit{

  projectsTableData:Array<any>;
  error : any;
  company :CompanyHal;
  param : any;
  page : number;
  companys :PaginatedList<CompanyHal>;


  constructor(private _basicTablesService: BasicTablesService, private service : CompanyService, private route : ActivatedRoute) {
    this.projectsTableData = _basicTablesService.projectsTableData;
  }
  ngOnInit(){
  	this.param = this.route.params.subscribe(parameter=>{ let id = parameter['id'];
    if(id){
      this.service.find(id).subscribe(company => this.company = company, error => this.error = error);
    }
    else{
      this.company = new CompanyHal();
    }
    }  
  )

  }

 delete(company : CompanyHal){
   this.service.delete(company).subscribe(response => {alert("Compañia Eliminada")},error => {this.error = error; alert("borrado")})

 }
 
}

