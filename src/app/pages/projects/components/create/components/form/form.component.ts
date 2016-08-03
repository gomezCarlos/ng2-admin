import {Component} from '@angular/core';
import {ProjectService} from '../../../projectService';
import {ProjectHal} from '../../../Project';

@Component({
  selector: 'form',
  template: require('./form.html'),
})
export class Form {

  object : ProjectHal

  constructor(service : ProjectService ) {
  }
}