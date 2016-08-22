import {Component, ViewEncapsulation, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AppState} from '../../../app.state';
import {BaProfilePicturePipe} from '../../pipes';
import {BaMsgCenter} from '../../components/baMsgCenter';
import {BaScrollPosition} from '../../directives';
import {UserService} from '../../../shared/user.service.ts'
import {AccountService} from '../../../pages/account/components/account.service';
import {AccountHal} from '../../../pages/account/components/Account';


@Component({
  selector: 'ba-page-top',
  styles: [require('./baPageTop.scss')],
  template: require('./baPageTop.html'),
  directives: [BaMsgCenter, BaScrollPosition],
  pipes: [BaProfilePicturePipe],
  encapsulation: ViewEncapsulation.None,
  providers: [UserService, AccountService, AccountHal]
})
export class BaPageTop implements OnInit{

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;
   public data : string;
      public foto : string

  constructor(private _state:AppState, private user : UserService, private router : Router, private accountService : AccountService, private accountHal : AccountHal) {
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

  GetPicture(){
    if(this.user.isLoggedIn()){
      return this.user.getUser().subscribe(response=>{this.data = response.username},error=>{ this.data = "assets/img/theme/no-photo.png"})
    }
  }

  ngOnInit(){
    this.GetPicture();
  }
}
