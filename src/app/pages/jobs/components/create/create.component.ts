import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../../theme/components';

import {Form} from './components/form';

@Component({
  selector: 'create',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, Form],
  template: require('./index.html'),
})
export class CreateJob {

  constructor() {
  }
}
