import {Component} from '@angular/core';
import {BaCard} from '../../theme/components';

@Component({
  selector: 'quicktask',
  pipes: [],
  providers: [],
  styles: [],
  directives: [BaCard],
  template: `<router-outlet></router-outlet>`
})
export class QuickTask {

  constructor() {
  }

  ngOnInit() {
  }

}
