import {Component, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import { CompanyService } from '../../../company.service';
import { CompanyHal } from '../../../company';
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
  providers: [CompanyService]  
})

export class Form  implements OnInit{
  error : any;
  companyhal:CompanyHal;
	constructor( private service : CompanyService, private router : Router) {
		this.companyhal = new CompanyHal();
    
  }

 save(company : CompanyHal){
 	this.service.save(company).subscribe(response => {this.companyhal = response; alert("Compañía Creada");this.router.navigate(['/pages/company/view/' + this.companyhal.ids])},error => {this.error = error; alert(error.message)})

 }

 ngOnInit(){
  }

 delete(company : CompanyHal){
 	this.service.delete(company).subscribe(response => {alert("Compañía Eliminada")},error => {this.error = error; alert(error.message)})

 }
}
