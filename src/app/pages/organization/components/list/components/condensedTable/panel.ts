import {Component, Output, EventEmitter} from '@angular/core';
//
// CREATED AND EDITED BY:
// ING RONALDO MORENO 
// WITH 
// MASTERCOPYPASTE TECNIQUE
// WITH MANY YEAR OF EXPERIENCE
// IN THE AREA
// COMPLETELY GRATEFUL TO GOD
// AND THE BLESSED VIRGIN
//
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
    <div  class="card-block" [ngClass]="{hide: !opened}">{{description}}</div>
  </div>`,
  inputs: ['name', 'description']
})
export class Panel {
  opened: Boolean = false;
  toggle () {
    this.opened = !this.opened;
  }
}