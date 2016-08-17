import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {BasicTablesService} from './view.service';
import {BaCard} from '../../../../theme/components';
//import {HoverTable} from './components/hoverTable';
//import {BorderedTable} from './components/borderedTable';
//import {CondensedTable} from './components/condensedTable';
//import {StripedTable} from './components/stripedTable';
//import {ContextualTable} from './components/contextualTable';
import {ResponsiveTable} from './components/simpleview';
import { TaskService } from '../task.service'; 
//MOISES
@Component({
	selector: 'view',
	encapsulation: ViewEncapsulation.None,
	directives: [BaCard, ResponsiveTable],
	styles: [require('./view.scss')],
	template: require('./index.html'),
	providers: [BasicTablesService,TaskService]
})
export class ViewTask {
	error : any;

	constructor() {
	}
}

