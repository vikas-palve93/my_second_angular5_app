import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-logout-confirm-popup',
  templateUrl: './logout-confirm-popup.component.html',
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `],
  encapsulation: ViewEncapsulation.None,
})
export class LogoutConfirmPopupComponent implements OnInit {

  closeResult: string;
  displayObject = "block"
  modalRef

  constructor(private modalService: NgbModal,
   
     private router : Router) {}



  openLg(content) {
   this.modalRef =  this.modalService.open(content, { size: 'lg' });
  }
 

  
  goToLogin() {
    
    this.router.navigate(['login']);
    this.modalRef.close();
  }
  ngOnInit() {
  }

}
