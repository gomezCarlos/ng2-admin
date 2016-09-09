import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../../theme/components';

import {Form} from './components/form';
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
  selector: 'create',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, Form],
  template: require('./index.html'),
})
export class CreateCompany {

  constructor() {
  }
}
