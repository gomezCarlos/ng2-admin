import {Component} from '@angular/core';
import {BaCard} from '../../theme/components';

@Component({
  selector: 'task',
  pipes: [],
  providers: [],
  styles: [],
  directives: [BaCard],
  template: `<router-outlet></router-outlet>`
})
export class Task {

  constructor() {
  }

  ngOnInit() {
  }

}

