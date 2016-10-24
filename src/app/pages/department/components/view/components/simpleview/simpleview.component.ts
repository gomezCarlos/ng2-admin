import {Component, OnInit} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../view.service';
import { DepartmentService } from '../../../department.service';
import { DepartmentHal } from '../../../department';
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
  providers: [DepartmentService, BasicTablesService, HTTP_PROVIDERS]
})
export class ResponsiveTable implements OnInit{

  projectsTableData:Array<any>;
  error : any;
  department :DepartmentHal;
  param : any;
  page : number;
  departments :PaginatedList<DepartmentHal>;


  constructor(private _basicTablesService: BasicTablesService, private service : DepartmentService, private route : ActivatedRoute) {
    this.projectsTableData = _basicTablesService.projectsTableData;
  }
  ngOnInit(){
  	this.param = this.route.params.subscribe(parameter=>{ let id = parameter['id'];
    if(id){
      this.service.find(id).subscribe(department => this.department = department, error => {this.error = error; 
         /* Manejo de errores */
         if(error.status==403)error.statusText="Usuario no autorizado.";
        /*END error */
        });
    }
    else{
      this.department = new DepartmentHal();
    }
    }  
  )

  }

 delete(department : DepartmentHal){
   this.service.delete(department).subscribe(response => {alert("Departamento Eliminado")},error => {this.error = error; alert("borrado")})

 }
 
}

