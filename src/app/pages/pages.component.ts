import {Component, ViewEncapsulation} from '@angular/core';
import {BaPageTop, BaContentTop, BaSidebar, BaBackTop} from '../theme/components';
import {AppState} from '../app.state';

@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  directives: [BaPageTop, BaSidebar, BaContentTop, BaBackTop],
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main" (click)="collapseMenu()">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right"><img src="http://anca.org.ve/img/slogan-01.png"></div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; <a href="http://akveo.com">Team TI</a> 2016</div>
        <ul class="al-share clearfix">
          <li><i class="socicon socicon-facebook" href="http://akveo.com"></i></li>
          <li src="http://akveo.com"><i class="socicon socicon-twitter" href="http://akveo.com"></i></li>
        </ul>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;

  constructor(private _state:AppState) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }
   public collapseMenu(){
    this.isMenuCollapsed = true;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  ngOnInit() {
  }
}
