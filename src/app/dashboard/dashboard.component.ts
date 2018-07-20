import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { obj } from '../object.component';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import { MatDialogModule } from '@angular/material';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isActiveKey = 'dashboard';
  editUserData = [];
  constructor(private userService:UserService, private router : Router,private loadingBar: LoadingBarService, private localStorage:LocalStorageService) { }
  userData;
  ngOnInit() {
    this.localStorage.clear('isActiveKey');
    this.localStorage.store('isActiveKey', this.isActiveKey);
    this.loadingBar.start();
   
    this.userService.getUser().subscribe(
      data=>{
         
           this.userData = data;
           this.localStorage.clear('editUserData');
           this.localStorage.store('editUserData', this.editUserData);
          console.log(this.userData);
          this.loadingBar.complete();
    },
    error=>{
      console.log(error);
      this.loadingBar.complete();
    }); 
  }
  goToTable() {
    
    this.router.navigate(['table']);
   
    }

}
