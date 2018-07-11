import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService:UserService) { }
  userData;
  ngOnInit() {
    this.userService.getUser().subscribe(
      data=>{
         
           this.userData = data;
          console.log(this.userData);
    },
    error=>{
      console.log(error);
    }); 
  }

}
