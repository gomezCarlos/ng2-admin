import {Component} from '@angular/core';
//import {ProjectService} from '../../../projectService';
//import {ProjectHal} from '../../../Project';
import { AccountService } from '../../../account.service';
import { AccountHal } from '../../../Account';
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';

@Component({
  selector: 'form',
  template: require('./form.html'),
  providers: [AccountService]
 //providers: [ProjectService],
})
export class Form {
  error : any;
  accounthal:AccountHal;
	constructor( private service : AccountService) {
		this.accounthal = new AccountHal();
    
  }

  //object : ProjectHal

  //constructor(service : ProjectService ) {
 // }

 save(account : AccountHal){
 	this.service.save(account).subscribe(response => {this.accounthal = response; alert("Cuenta Creada")},error => {this.error = error; alert(error.message)})

 }

 delete(account : AccountHal){
 	this.service.delete(account).subscribe(response => {alert("Cuenta Eliminada")},error => {this.error = error; alert(error.message)})

 }
}
