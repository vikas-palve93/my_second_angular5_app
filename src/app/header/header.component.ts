import { Component, OnInit } from '@angular/core';
import { obj } from '../object.component';
import {MatCardModule} from '@angular/material';
import {MatIcon} from '@angular/material';
import { MatDialogModule } from '@angular/material';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
//  @LocalStorage() public lastSearchQuery:Object = {};
  isActive= 'dashboard';
  constructor(private localStorage:LocalStorageService) { }

  ngOnInit() {
    this.isActive = this.localStorage.retrieve('isActiveKey');
    console.log(this.isActive);
  }

}
