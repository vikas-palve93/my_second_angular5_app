import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-delete-confirm-popup',
  templateUrl: './delete-confirm-popup.component.html',
  styleUrls: ['./delete-confirm-popup.component.css']
})
export class DeleteConfirmPopupComponent implements OnInit {

  
  closeResult: string;
  modalRef

  constructor(private modalService: NgbModal,private router : Router) {}



  openLg(content) {
   this.modalRef =  this.modalService.open(content, { size: 'lg' });
  }
 

  
  deleteUser() {
    
    
    this.modalRef.close();
  }
  ngOnInit() {
  }

  

}
