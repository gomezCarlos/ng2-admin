import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  directives: [],
  styles: [require('./login.scss')],
  template: require('./login.html'),
  providers: [UserService]
})
export class Login implements OnInit {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  public error : any;

  constructor(fb:FormBuilder, private userService: UserService, private router: Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  ngOnInit(){
    if (this.userService.isLoggedIn())
      this.router.navigate(['/pages/dashboard']);
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
	this.userService.login(this.email.value,this.password.value)
          .subscribe((result) =>{
            //alert(this.userService.isLoggedIn());
            if(result){
              this.router.navigate(['/pages/dashboard']);
            }

          },error=>{this.error = error; console.log(error); alert("Cuenta Invalida")} );
      // console.log(values);
    }
  }
}
