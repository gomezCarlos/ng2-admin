import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../../theme/components';

import {FormProject} from './components/formproject';

@Component({
  selector: 'createproject',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, FormProject],
  template: require('./index.html'),
})
export class CreateProject {

  constructor() {
  }
}
