import {Component} from '@angular/core';
import {BaCard} from '../../theme/components';

@Component({
  selector: 'jobs',
  pipes: [],
  providers: [],
  styles: [],
  directives: [BaCard],
  template: `<router-outlet></router-outlet>`
})
export class Jobs {

  constructor() {
  }

  ngOnInit() {
  }

}