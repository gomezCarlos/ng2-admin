import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {BasicTablesService} from './list.service';
import {BaCard} from '../../../../theme/components';
//import {HoverTable} from './components/hoverTable';
//import {BorderedTable} from './components/borderedTable';
//import {CondensedTable} from './components/condensedTable';
//import {StripedTable} from './components/stripedTable';
//import {ContextualTable} from './components/contextualTable';
import {ResponsiveTable} from './components/responsiveTable';
import {EndPointServiceAuthenticationService} from '../EndPointServiceAuthentication.service'; 
//MOISES
@Component({
  selector: 'basic-tables',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, ResponsiveTable],
  styles: [require('./list.scss')],
  template: require('./index.html'),
  providers: [BasicTablesService,EndPointServiceAuthenticationService]
})
export class ListEndPointServiceAuthentication {
	error : any;

  constructor() {
  }
}

