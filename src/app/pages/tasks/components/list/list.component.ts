import {Component, ViewEncapsulation, OnInit} from '@angular/core';

import {BasicTablesServicet} from './list.service';
import {BaCard} from '../../../../theme/components';
//import {HoverTable} from './components/hoverTable';
//import {BorderedTable} from './components/borderedTable';
import {CondensedTable} from './components/condensedTable';
//import {StripedTable} from './components/stripedTable';
//import {ContextualTable} from './components/contextualTable';
//import {ResponsiveTable} from './components/responsiveTable';
//alonso
import { TaskService } from '../task.service'; 
@Component({
  selector: 'basic-tables',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, CondensedTable],
  styles: [require('./list.scss')],
  template: require('./index.html'),
  providers: [BasicTablesServicet,TaskService]
})
export class ListTask{

  
  error : any;
  
  constructor() {
  }

}
