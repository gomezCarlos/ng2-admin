import {Component} from '@angular/core';
import {BaCard} from '../../theme/components';

@Component({
  selector: 'menuphase',
  pipes: [],
  providers: [],
  styles: [],
  directives: [BaCard],
  template: `<router-outlet></router-outlet>`
})
export class MenuPhase {

  constructor() {
  }

  ngOnInit() {
  }

}