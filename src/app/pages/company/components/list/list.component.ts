import {Component, ViewEncapsulation, OnInit} from '@angular/core';

import {BasicTablesService} from './list.service';
import {BaCard} from '../../../../theme/components';
//import {HoverTable} from './components/hoverTable';
//import {BorderedTable} from './components/borderedTable';
import {CondensedTable} from './components/condensedTable';
//import {StripedTable} from './components/stripedTable';
//import {ContextualTable} from './components/contextualTable';
//import {ResponsiveTable} from './components/responsiveTable';
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
import { CompanyService } from '../company.service'; 
@Component({
  selector: 'basic-tables',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, CondensedTable],
  styles: [require('./list.scss')],
  template: require('./index.html'),
  providers: [BasicTablesService,CompanyService]
})
export class ListCompany{

  
  error : any;
  
  constructor() {
  }

}
