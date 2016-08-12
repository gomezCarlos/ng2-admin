import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'panel',
  styles: [`
    .hide {
      display: none;
    },
    `
  ],
  template: `
  <div class="card" *ngIf="name">
    <div class="card-header" (click)="toggle()">{{name}}  </div>
    <div  class="card-block" [ngClass]="{hide: !opened}">{{description}} {{estimatedDateEnd}}</div>
  </div>`,
  inputs: ['name', 'description', 'estimatedDateEnd']
})
export class Panel {
    opened: Boolean = false;
    toggle () {
      this.opened = !this.opened;
    }
  }
}