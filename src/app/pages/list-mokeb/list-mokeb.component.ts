import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ApiService} from "../../services/api.service";
import {Mokeb} from "../../models/mokeb/mokeb";

@Component({
  selector: 'app-list-mokeb',
  templateUrl: './list-mokeb.component.html',
  styleUrls: ['./list-mokeb.component.scss']
})
export class ListMokebComponent implements OnInit {

  closeResult: string;
  mokebList: any;
  mokebViwe: Mokeb;

  constructor(private modalService: NgbModal, private apiService: ApiService) {
    this.mokebViwe = new Mokeb();
  }

  ngOnInit(): void {
    this.getMokebList();
  }

  getMokebList() {
    this.apiService.getMavakebs().subscribe(
      response => {
        for (let i = 0; i < response.length; i++) {
          if (response[i].location == 1) {
            response[i].locationName = 'کربلا'
          } else if (response[i].location == 2) {
            response[i].locationName = 'نجف'
          } else if (response[i].location == 3) {
            response[i].locationName = 'کاظمین'
          } else if (response[i].location == 4) {
            response[i].locationName = 'سامرا'
          } else if (response[i].location == 5) {
            response[i].locationName = 'مسیر نجف کربلا'
          } else if (response[i].location == 6) {
            response[i].locationName = 'مسیر کاظمین کربلا'
          } else if (response[i].location == 7) {
            response[i].locationName = 'مسیر بصره کربلا'
          }
        }
        console.log(response)
        this.mokebList = response;
      },
      error => alert('در گرفتن اطلاعات مواکب مشکلی رخ داده است')
    )
  }

  open(content, data) {
    this.mokebViwe.location = data.locationName;
    this.mokebViwe.name = data.name;
    this.mokebViwe.id = data.id;
    this.mokebViwe.admin_detail_org = data.admin_detail_org;
    this.mokebViwe.sign = data.sign;
    this.mokebViwe.request_page = data.request_page;
    this.mokebViwe.status_org = data.status_org;
    if (data.status_org == 1) {
      this.mokebViwe.status_org = 'شخصی';
    } else if (data.status_org == 2) {
      this.mokebViwe.status_org = 'وقفی';
    } else if (data.status_org == 3) {
      this.mokebViwe.status_org = 'هیت امنایی';
    } else if (data.status_org == 4) {
      this.mokebViwe.status_org = 'سیار';
    }
    if (data.status) {
      this.mokebViwe.status = 'فعال';
    } else {
      this.mokebViwe.status = 'راکد';
    }
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
