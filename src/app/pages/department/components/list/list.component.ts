import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {BasicTablesService} from './list.service';
import {BaCard} from '../../../../theme/components';
//import {HoverTable} from './components/hoverTable';
//import {BorderedTable} from './components/borderedTable';
//import {CondensedTable} from './components/condensedTable';
//import {StripedTable} from './components/stripedTable';
//import {ContextualTable} from './components/contextualTable';
import {ResponsiveTable} from './components/responsiveTable';
import {DepartmentService} from '../department.service'; 
//
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
  selector: 'basic-tables',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, ResponsiveTable],
  styles: [require('./list.scss')],
  template: require('./index.html'),
  providers: [BasicTablesService,DepartmentService]
})
export class ListDepartment {
	error : any;

  constructor() {
  }
}