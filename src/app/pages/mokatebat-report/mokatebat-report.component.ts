import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { CreateSendPaper } from "../../models/create_send_paper/create-send-paper";
import {ReceivePaper} from "../../models/Mokatebat/receive-paper";

@Component({
  selector: 'app-mokatebat-report',
  templateUrl: './mokatebat-report.component.html',
  styleUrls: ['./mokatebat-report.component.scss']
})
export class MokatebatReportComponent implements OnInit {

  head1 = ['ردیف', 'شماره نامه', 'سازمان ارسال کننده' , 'موضوع نامه'];
  head2 = ['ردیف', 'شماره نامه', 'سازمان گیرنده', 'شخص گیرنده', 'موضوع'];

  search: CreateSendPaper;
  search2: ReceivePaper;

  elements: any;
  listSendPaper: any[];

  constructor(private apiService: ApiService) {
    this.search = new CreateSendPaper();
    this.search2 = new ReceivePaper();
  }

  ngOnInit(): void {
    this.apiService.getListRecievePaper().subscribe(response => {
      this.elements = response;
    });
  }

  filter($event) {
    const value = [$event.index];
    if (value[0] == 0) {
      this.apiService.getListRecievePaper().subscribe(response => {
        this.elements = response;
      });
    } else {
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

}
