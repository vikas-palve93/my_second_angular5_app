import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputEmail: string;
  inputPassword: string;
  
  isUsernameError;
  isPasswordError;
  constructor(private router : Router, private toastr: ToastrService) { }

  ngOnInit() {
  }
 
  login() {
    if(this.inputEmail == 'vikas@gmail.com' && this.inputPassword == 'vikas') {
      this.isUsernameError = false;
      this.isPasswordError = false;
    this.router.navigate(['dashboard']);
    }else {
      if(this.inputEmail == undefined && this.inputPassword == undefined){
        this.isUsernameError = true;
        this.isPasswordError = true;
        this.toastr.error('Please enter username and password');
      }
      else if(this.inputEmail == undefined && this.inputPassword != undefined){
        this.isUsernameError = true;
        this.isPasswordError = false;
        this.toastr.error('Please enter username');
      }
      else if(this.inputEmail != undefined && this.inputPassword == undefined){
        this.isUsernameError = false;
        this.isPasswordError = true;
        this.toastr.error('Please enter password');
      }
      else if(this.inputEmail != 'vikas@gmail.com' && this.inputPassword != 'vikas'){
        this.isUsernameError = true;
        this.isPasswordError = true;
        this.toastr.error('Please enter valied credientials');
      }
      else if(this.inputEmail == 'vikas@gmail.com' && this.inputPassword != 'vikas'){
        this.isUsernameError = false;
        this.isPasswordError = true;
        this.toastr.error('Please enter valied password');
      }
      else if(this.inputEmail != 'vikas@gmail.com' && this.inputPassword == 'vikas'){
        this.isUsernameError = true;
        this.isPasswordError = false;
        this.toastr.error('Please enter valied username');
      }
      
    }
}
removeErrorClass(){
  this.isUsernameError = false;
  this.isPasswordError = false;
}
}