import {Component, ViewEncapsulation} from '@angular/core';
import { UserService } from '../../shared/user.service';

import {BaCard} from '../../theme/components';

//import {InlineForm} from '/../../components/inlineForm';
//import {BlockForm} from './components/blockForm';
//import {HorizontalForm} from './components/horizontalForm';
//import {BasicForm} from './components/basicForm';
//import {WithoutLabelsForm} from './components/withoutLabelsForm';
import {BaPictureUploader} from '../../theme/components';

@Component({
  selector: 'layouts',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard,  BaPictureUploader],
  providers: [UserService],
  styles: [require ('./layouts.scss')],
  template: require('./layouts.html'),
})
export class Layouts {

  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile:any = {
    picture: 'assets/img/app/profile/undefined.png' 
      };
  public uploaderOptions:any = {
    url: 'http://localhost:7890/upload',
    customHeaders: {
      'Access-Control-Allow-Origin': '*',
      'X-Auth-Token': this.userService.getToken().toString(),
    }
  };

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser().subscribe(response => { return this.profile.picture = 'assets/img/app/profile/' + response.username + '.png'}, error => {return "assets/img/theme/no-photo.png"} ).toString()
  }
}
