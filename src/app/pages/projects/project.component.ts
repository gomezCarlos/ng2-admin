import {Component} from '@angular/core';
import {BaCard} from '../../theme/components';

@Component({
  selector: 'project',
  pipes: [],
  providers: [],
  styles: [],
  directives: [BaCard],
  template: `<router-outlet></router-outlet>`
})
export class Projects {

  constructor() {
  }

  ngOnInit() {
  }

}