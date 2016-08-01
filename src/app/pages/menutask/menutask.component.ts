import {Component} from '@angular/core';
import {BaCard} from '../../theme/components';

@Component({
  selector: 'menutask',
  pipes: [],
  providers: [],
  styles: [],
  directives: [BaCard],
  template: `<router-outlet></router-outlet>`
})
export class MenuTask {

  constructor() {
  }

  ngOnInit() {
  }

}