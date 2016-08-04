import {Component} from '@angular/core';

import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../list.service';

@Component({
  selector: 'condensed-table',
  template: require('./condensedTable.html'),
  pipes: [BaAppPicturePipe]
})
export class CondensedTable {

  projectsTableData:Array<any>;

  constructor(private _basicTablesService: BasicTablesService) {
    this.projectsTableData = _basicTablesService.projectsTableData;
  }
}
