import {Component, OnInit} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../list.service';
import { AccountService } from '../../../account.service';
import { AccountHal } from '../../../Account';
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';

@Component({
  selector: 'condensed-table',
  template: require('./condensedTable.html'),
  pipes: [BaAppPicturePipe],
  providers: [AccountService, BasicTablesService, HTTP_PROVIDERS]
})
export class CondensedTable implements OnInit{

  peopleTableData:Array<any>;
  error : any;
  accounts:PaginatedList<AccountHal>;
  page : number;
  totalElements : number;
  totalPages : number;

  constructor(private _basicTablesService: BasicTablesService, private service : AccountService) {
    this.peopleTableData = _basicTablesService.peopleTableData;
  }

  ngOnInit(){
  	this.getPage(0);
  }

  getPage(page : number){
    this.service.getPage(page).subscribe(response => {this.accounts = response; },error => {this.error = error; 
         /* Manejo de errores */
         if(error.status==403)error.statusText="Usuario no autorizado.";
         if(error.status==401)error.statusText="Usuario no autorizado.";
        /*END error */
        })
  }

  delete(account : AccountHal){
    this.service.delete(account).subscribe(response => {this.getPage},error => {this.getPage(0);alert("Error al eliminar")})
  }

  first(){
    this.getPage(0);
  }

  last(){
    this.getPage(this.accounts.page.totalPages -1 );
  }

  previous(){
    var page: number;
    if(this.accounts.page.number -1<0)
      page = 0;
    else
      page = this.accounts.page.number -1;
    this.getPage(page);
  }

  next(){
    var page: number;
    if(this.accounts.page.number +1 >= this.accounts.page.totalPages -1)
      page = this.accounts.page.totalPages -1;
    else
      page = this.accounts.page.number +1;
    this.getPage(page);
  }

}
