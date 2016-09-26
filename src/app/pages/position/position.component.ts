import {Component} from '@angular/core';
import {BaCard} from '../../theme/components';

@Component({
  selector: 'positions',
  pipes: [],
  providers: [],
  styles: [],
  directives: [BaCard],
  template: `<router-outlet></router-outlet>`
})
export class Position {

  constructor() {
  }

  ngOnInit() {
  }

}