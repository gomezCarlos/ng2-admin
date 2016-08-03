import {Component} from '@angular/core';
import {BaCard} from '../../theme/components';

@Component({
  selector: 'maccount',
  pipes: [],
  providers: [],
  styles: [],
  directives: [BaCard],
  template: `<router-outlet></router-outlet>`
})
export class Account {

  constructor() {
  }

  ngOnInit() {
  }

}