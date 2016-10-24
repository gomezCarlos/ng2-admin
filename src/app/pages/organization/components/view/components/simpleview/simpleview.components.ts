import {Component, OnInit} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../view.service';
import { OrganizationService } from '../../../organization.service';
import { OrganizationHal } from '../../../Organization';
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
  providers: [OrganizationService, BasicTablesService, HTTP_PROVIDERS]
})
export class ResponsiveTable implements OnInit{

  projectsTableData:Array<any>;
  error : any;
  organization :OrganizationHal;
  param : any;
  page : number;
  Organizations :PaginatedList<OrganizationHal>;


   constructor(private service : OrganizationService, private route : ActivatedRoute) {   
  }
  ngOnInit(){
    this.param = this.route.params.subscribe(parameter=>{ let id = parameter['id'];
    if(id){
      this.service.find(id).subscribe(organization => this.organization = organization, error => {this.error = error; 
         /* Manejo de errores */
         if(error.status==403)error.statusText="Usuario no autorizado.";
        /*END error */
        });
    }
    else{
      this.organization = new OrganizationHal();
    }
    }  
  )

  }

 delete(organization : OrganizationHal){
   this.service.delete(organization).subscribe(response => {alert("Organización Eliminada")},error => {this.error = error; alert("borrado")})

 }

}