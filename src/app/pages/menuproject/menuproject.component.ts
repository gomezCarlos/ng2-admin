import {Component} from '@angular/core';
import {BaCard} from '../../theme/components';

@Component({
  selector: 'menuproject',
  pipes: [],
  providers: [],
  styles: [],
  directives: [BaCard],
  template: `<router-outlet></router-outlet>`
})
export class MenuProject {

  constructor() {
  }

  ngOnInit() {
  }

}