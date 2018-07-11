import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputEmail: string;
  inputPassword: string;

  constructor(private router : Router) { }

  ngOnInit() {
  }
  login() {
    if(this.inputEmail == 'vikas@gmail.com' && this.inputPassword == 'vikas') {
    this.router.navigate(['dashboard']);
    }else {
    alert("Invalid credentials.")
    }
    }
}
