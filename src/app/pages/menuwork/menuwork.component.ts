import {Component} from '@angular/core';
import {BaCard} from '../../theme/components';

@Component({
  selector: 'menuwork',
  pipes: [],
  providers: [],
  styles: [],
  directives: [BaCard],
  template: `<router-outlet></router-outlet>`
})
export class MenuWork {

  constructor() {
  }

  ngOnInit() {
  }

}