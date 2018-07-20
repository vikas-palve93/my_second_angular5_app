import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {TooltipModule} from "ngx-tooltip";
const now = new Date();

@Component({
  selector: 'app-datepicker-multiple',
  templateUrl: './datepicker-multiple.component.html',
  styleUrls: ['./datepicker-multiple.component.css']
})
export class DatepickerMultipleComponent implements OnInit {
  model: NgbDateStruct;
  
  constructor() {  }
  

  ngOnInit() {this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};}
    
  displayMonths = 2;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';

}
