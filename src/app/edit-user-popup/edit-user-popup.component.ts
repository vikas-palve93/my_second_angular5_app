import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-edit-user-popup',
  templateUrl: './edit-user-popup.component.html',
  styleUrls: ['./edit-user-popup.component.css']
})
export class EditUserPopupComponent implements OnInit {

  modalRef;
  editUserData;
  constructor(private modalService: NgbModal,private router : Router, private localStorage:LocalStorageService) {}



  openLg(content) {
   this.modalRef =  this.modalService.open(content, { size: 'lg' });
   this.editUserData= this.localStorage.retrieve('editUserData');
   console.log(this.editUserData);
  }
 

  
  saveUser() {
    
    
    this.modalRef.close();
  }
  ngOnInit() {
  }

}
