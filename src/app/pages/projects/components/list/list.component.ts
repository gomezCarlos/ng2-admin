import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../../theme/components';


@Component({
  selector: 'list',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard],
  template: require('./index.html'),
})
export class List {

  constructor() {
  }
}
