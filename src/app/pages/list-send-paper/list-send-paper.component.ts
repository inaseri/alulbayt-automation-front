import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-list-send-paper',
  templateUrl: './list-send-paper.component.html',
  styleUrls: ['./list-send-paper.component.scss']
})
export class ListSendPaperComponent implements OnInit {

  closeResult: string;

  listSendPaper: any[];
  tableHead = ['ردیف', 'شماره نامه', 'سازمان گیرنده', 'شخص گیرنده', 'موضوع', 'عملیات'];
  constructor(private modalService: NgbModal, private apiService: ApiService) {}

  open(content) {
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
    this.get_list_send_paper();
  }

  get_list_send_paper() {
    this.apiService.list_send_paper().subscribe(
      response => {
        this.listSendPaper = []
        for (const key in response['objects']) {
          if (response['objects'].hasOwnProperty(key)) {
            this.listSendPaper.push({
              id: response['objects'][key].id,
              subject: response['objects'][key]['subject'].text,
              user: response['objects'][key]['user'].name,
              organize: response['objects'][key]['user']['location'].name
            });
          }
        }
      },
      error => console.log('There is some problems: ', error)
    );
  }

}
