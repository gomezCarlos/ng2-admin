import {Component} from '@angular/core';
import {BaCard} from '../../theme/components';

@Component({
  selector: 'menuaccount',
  pipes: [],
  providers: [],
  styles: [],
  directives: [BaCard],
  template: `<router-outlet></router-outlet>`
})
export class MenuAccount {

  constructor() {
  }

  ngOnInit() {
  }

}