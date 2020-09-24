import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {ApiService} from '../../services/api.service';
import {PeoplePassport} from '../../models/people-passport/people-passport';

declare const require: any;

@Component({
  selector: 'app-pepeol-passport-list',
  templateUrl: './pepeol-passport-list.component.html',
  styleUrls: ['./pepeol-passport-list.component.scss']
})
export class PepeolPassportListComponent implements OnInit {

  data: any;
  selectedData: PeoplePassport;

  disable = false;

  title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions:NgbModalOptions;

  constructor(private apiService: ApiService, private modalService: NgbModal) {
    this.selectedData = new PeoplePassport();
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
  }

  ngOnInit(): void {
    this.getPassportList();
  }

  getPassportList() {
    this.apiService.passport_list().subscribe(
      response => {
        this.data = response
        this.data.reverse();
      },
      error => alert('در گرفتن اطلاعات پرونده های اقامت خطایی رخ داده است. لطفا با پشتیبانی تماس بگیرید.')
    );
  }

  open(content, id: string) {
    this.apiService.passport_detail(id).subscribe(
      response => this.selectedData = response,
      error => alert('در دریافت اطلاعات خطایی رخ داده است.')
    );
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}
