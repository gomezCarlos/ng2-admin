import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../../../../company/components/company.service';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {CompanyHal} from '../../../../../company/components/company';
import { OrganizationService } from '../../../organization.service';
import { OrganizationHal } from '../../../Organization';
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';
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
  selector: 'form',
  template: require('./form.html'),
  providers: [OrganizationService,CompanyService]  
})

export class Form  implements OnInit{
  listcompany : PaginatedList<CompanyHal>;
  error : any;
  organizationhal:OrganizationHal;
	constructor( private service : OrganizationService, private companies : CompanyService, private router : Router) {
		this.organizationhal = new OrganizationHal();
  }


 save(organization : OrganizationHal){
   organization.company=Number(organization.company);
 	this.service.save(organization).subscribe(response => {this.organizationhal = response; alert("Organizacion Creada");this.router.navigate(['/pages/organization/view/' + this.organizationhal.ids])},error => {this.error = error; 
         /* Manejo de errores */
         if(error.status==403)error.statusText="Usuario no autorizado.";
         if(error.status==401)error.statusText="Usuario no autorizado.";
        /*END error */
        })

 }


 ngOnInit(){
    this.getcompanies();
  }

 //OBTENER LISTA DE COMPAÑIAS
 getcompanies(){
   this.companies.getPage(0).subscribe(response=>{this.listcompany = response},error => {this.error = error; 
         /* Manejo de errores */
         if(error.status==403)error.statusText="Usuario no autorizado.";
         if(error.status==401)error.statusText="Usuario no autorizado.";
        /*END error */
        })
 }

 delete(organization : OrganizationHal){
 	this.service.delete(organization).subscribe(response => {alert("Organizacion Eliminada")},error => {this.error = error; alert(error.message)})

 }
}
