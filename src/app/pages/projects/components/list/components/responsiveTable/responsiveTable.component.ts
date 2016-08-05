import {Component} from '@angular/core';

import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../list.service';

@Component({
  selector: 'responsive-table',
  template: require('./responsiveTable.html'),
  pipes: [BaAppPicturePipe]
})
export class ResponsiveTable {

  projectsTableData:Array<any>;

  constructor(private _basicTablesService: BasicTablesService) {
    this.projectsTableData = _basicTablesService.projectsTableData;
  }
}
