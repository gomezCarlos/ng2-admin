import {Component} from '@angular/core';
//import {ProjectService} from '../../../projectService';
//import {ProjectHal} from '../../../Project';
import { AccountService } from '../../../account.service';
import { AccountHal } from '../../../Account';
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'form',
  template: require('./form.html'),
  providers: [AccountService]
 //providers: [ProjectService],
})
export class Form {
  error : any;
  accounthal:AccountHal;
	constructor( private service : AccountService, private router : Router) {
		this.accounthal = new AccountHal();
    
  }

  //object : ProjectHal

  //constructor(service : ProjectService ) {
 // }

 save(account : AccountHal){
 	this.service.save(account).subscribe(response => {this.accounthal = response; alert("Cuenta Creada"); this.router.navigate(['/pages/account/view/' + this.accounthal.ids]);},error => {this.error = error; 
         /* Manejo de errores */
         if(error.status==403)error.statusText="Usuario no autorizado.";
        /*END error */
        })

 }

 delete(account : AccountHal){
 	this.service.delete(account).subscribe(response => {alert("Cuenta Eliminada")},error => {this.error = error; alert(error.message)})

 }
}
