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
    this.get_residence();
  }

  get_residence() {
    this.apiService.list_residence().subscribe(
      response => {
        const persianDate = require('jalaali-js');
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            const year = response[key].date.toString().substr(0,4);
            const month = response[key].date.toString().substr(5,2);
            const day = response[key].date.toString().substr(8,2);
            const persian = persianDate.toJalaali(Number(year), Number(month), Number(day));
            const newDate = persian.jy.toString() + '/' + persian.jm.toString() + '/' + persian.jd.toString();
            response[key].date = newDate;
          }
        }
        this.data = response
        this.data.reverse();
      },
      error => alert('در گرفتن اطلاعات پرونده های اقامت خطایی رخ داده است. لطفا با پشتیبانی تماس بگیرید.')
    );
  }

  open(content, id: string) {
    this.apiService.selected_residence(id).subscribe(
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
