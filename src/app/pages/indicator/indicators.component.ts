import {Component} from '@angular/core';
import {BaCard} from '../../theme/components';

@Component({
  selector: 'indicators',
  pipes: [],
  providers: [],
  styles: [],
  directives: [BaCard],
  template: `<router-outlet></router-outlet>`
})
export class Indicator {

  constructor() {
  }

  ngOnInit() {
  }

}