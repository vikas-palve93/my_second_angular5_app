import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor( private userService:UserService,) { }
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
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };

  

}
