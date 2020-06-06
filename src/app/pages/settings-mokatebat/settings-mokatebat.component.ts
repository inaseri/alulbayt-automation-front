import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Location } from "../../models/location/location";
import { Subject } from "../../models/subject/subject";

@Component({
  selector: 'app-settings-mokatebat',
  templateUrl: './settings-mokatebat.component.html',
  styleUrls: ['./settings-mokatebat.component.scss']
})
export class SettingsMokatebatComponent implements OnInit {

  title_str: string;
  modal_body: any[] = [];
  closeResult: string;

  create_location: Location;
  list_location: any;

  create_subject: Subject;
  list_subject: any;

  constructor(private modalService: NgbModal, private apiService: ApiService) {
    this.create_location = new Location();
    this.create_subject = new Subject();
  }

  open(content, title: string) {

    if (title === 'لیست مکان ها دریافت نامه') {
      for (const key in this.list_location)  {
        if (this.list_location.hasOwnProperty(key)) {
          this.modal_body.push(this.list_location[key].name);
        }
      }
      console.log(this.list_location);
    } else if (title === 'لیست موضوعات نامه ها') {
      for (const key in this.list_subject)  {
        if (this.list_subject.hasOwnProperty(key)) {
          this.modal_body.push(this.list_subject[key].text);
        }
      }
      console.log(this.list_subject);
    }

    this.title_str = title;
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

  ngOnInit(): void {
    this.list_send_location();
    this.list_send_subject();
  }

  create_send_location() {
    this.apiService.create_location_send_paper(this.create_location).subscribe(
      response => alert('ثبت نامه با مکان دریافت با موفقیت انجام شد.'),
      error => console.log('There is some problem: ', error)
    );
  }

  list_send_location() {
    this.apiService.list_location_send_paper().subscribe(
      response => this.list_location = response['objects'],
      error => console.log('There is some problem: ', error)
    );
  }

  create_send_subject() {
    this.apiService.create_subject_send_paper(this.create_subject).subscribe(
      response => alert('ثبت موضوع با موفقیت انجام شد.'),
      error => console.log('There is some problem: ', error)
    );
  }

  list_send_subject() {
    this.apiService.list_subject_send_paper().subscribe(
      response => this.list_subject = response['objects'],
      error => console.log('There is some problems: ', error)
    )
  }




}
