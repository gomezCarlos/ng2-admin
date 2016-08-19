import {Component, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import {AppState} from '../../../app.state';
import {BaProfilePicturePipe} from '../../pipes';
import {BaMsgCenter} from '../../components/baMsgCenter';
import {BaScrollPosition} from '../../directives';
import {UserService} from '../../../shared/user.service.ts'

@Component({
  selector: 'ba-page-top',
  styles: [require('./baPageTop.scss')],
  template: require('./baPageTop.html'),
  directives: [BaMsgCenter, BaScrollPosition],
  pipes: [BaProfilePicturePipe],
  encapsulation: ViewEncapsulation.None,
  providers: [UserService]
})
export class BaPageTop {

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;

  constructor(private _state:AppState, private user : UserService, private router : Router) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  public collapseMenu(){
    this.isMenuCollapsed = true;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  logout(){
    this.user.logout();
    this.router.navigate (['/#/login'])

  }

}
