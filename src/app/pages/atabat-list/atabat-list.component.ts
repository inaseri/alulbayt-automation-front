import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {ApiService} from '../../services/api.service';

declare const require;

@Component({
  selector: 'app-atabat-list',
  templateUrl: './atabat-list.component.html',
  styleUrls: ['./atabat-list.component.scss']
})
export class AtabatListComponent implements OnInit {

  title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions: NgbModalOptions;
  atabeData: any;
  selectedData: any;

  constructor(private apiService: ApiService, private modalService: NgbModal) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    }
  }

  ngOnInit(): void {
    this.getAtabeList()
  }

  getAtabeList() {
    this.apiService.atabe_list().subscribe(
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
        this.atabeData = response
        this.atabeData.reverse();
      },
      error => console.log('There is some problems: ', error)
    );
  }

  open(content, id: string) {
    this.apiService.atabe_detail(id).subscribe(
      response => this.selectedData = response
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
      return `with: ${reason}`;
    }
  }

}
