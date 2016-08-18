import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../../../../tasks/components/task.service';
import {TaskHal} from '../../../../../tasks/components/Task';
import { EndPointServiceAuthenticationService } from '../../../EndPointServiceAuthentication.service';
import { EndPointServiceAuthenticationHal } from '../../../EndPointServiceAuthentication'
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';

@Component({
  selector: 'form',
  template: require('./form.html'),
  providers: [EndPointServiceAuthenticationService]
 
})

export class Form implements OnInit{
    listEndPointServiceAuthenticationHal : PaginatedList<EndPointServiceAuthenticationHal>;
    error : any;
    endPointServiceAuthenticationHal: EndPointServiceAuthenticationHal;
	  constructor( private service : EndPointServiceAuthenticationService) {
		    this.endPointServiceAuthenticationHal = new EndPointServiceAuthenticationHal();
    
    }
 
    save(endPointServiceAuthentication : EndPointServiceAuthenticationHal){
 	      this.service.save(endPointServiceAuthentication).subscribe(response => {this.endPointServiceAuthenticationHal = response; alert("Punto de Autenticacion de Servicios Creado")},error => {this.error = error; alert(error.message)})

     }

    delete(endPointServiceAuthentication : EndPointServiceAuthenticationHal){
        this.service.delete(endPointServiceAuthentication).subscribe(response => {alert("Cuenta Eliminada")},error => {this.error = error; alert(error.message)})

    }

}