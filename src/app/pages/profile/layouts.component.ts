import {Component, ViewEncapsulation} from '@angular/core';
import { UserService } from '../../shared/user.service';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {BaCard} from '../../theme/components';
import { AccountService } from '../account/components/account.service';
import { AccountHal } from '../account/components/Account';
import { PaginatedList } from '../../shared/PaginatedList.component';
import { DepartmentService } from '../department/components/department.service';
import { DepartmentHal } from '../department/components/department';
import { Hal } from '../../shared/Hal';

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
  providers: [UserService, AccountService, DepartmentService],
  styles: [require ('./layouts.scss')],
  template: require('./layouts.html'),
})
export class Layouts {
  error : any;
  departmenthal:DepartmentHal;
  accounthal : AccountHal;
  _user: Hal;
  listdepartment : PaginatedList<DepartmentHal>;
   public form:FormGroup;
   public password:AbstractControl;
  public repeatPassword:AbstractControl;
  public passwords:FormGroup;
    public submitted:boolean = false;

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

  constructor(private userService: UserService, fb:FormBuilder, private service : AccountService, private departments : DepartmentService ) {
       this.form = fb.group({
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
    });


    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
    this.accounthal = new AccountHal();
    this.departmenthal = new DepartmentHal();
  }
 

  ngOnInit() {
    this.userService.getUser().subscribe(response => { return this.profile.picture = 'assets/img/app/profile/' + response.username + '.png'}, error => {return "assets/img/theme/no-photo.png"} ).toString()
    this.getdepartments();
    this.getUser();
  }
  getdepartments(){
   this.departments.getPage(0).subscribe(response=>{this.listdepartment=response},error => {this.error = error; alert(error.message)})
 }
  save(account : AccountHal){
   this.service.save(account).subscribe(response => {this.accounthal = response; alert("Cuenta Creada")},error => {this.error = error; alert(error.message)})

 }
 getUser(){
   this.userService.getUser().subscribe(response=>{this.accounthal=response},error => {this.error = error; alert(error.message)})
 }

 updatePassword(){
   if(this.password.value == this.repeatPassword.value){
     this.accounthal.password=this.password.value;
     
     this.service.changePassword(this.accounthal).subscribe(reponse=>{alert("Contraseña actualizada.");},error=>{this.error = error});

   }
 }


public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
    }
  }
}
