import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {CreateSendPaper} from '../../models/create_send_paper/create-send-paper';
import {ReceivePaper} from '../../models/Mokatebat/receive-paper';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-mokatebat-report',
  templateUrl: './mokatebat-report.component.html',
  styleUrls: ['./mokatebat-report.component.scss']
})
export class MokatebatReportComponent implements OnInit {

  head1 = ['ردیف', 'شماره نامه', 'سازمان ارسال کننده', 'موضوع نامه'];
  head2 = ['ردیف', 'شماره نامه', 'سازمان گیرنده', 'شخص گیرنده', 'موضوع'];

  search: CreateSendPaper;
  search2: ReceivePaper;

  elements: any;
  listSendPaper: any[];

  @ViewChild('TABLE', {static: false}) TABLE: ElementRef;
  @ViewChild('TABLE2', {static: false}) TABLE2: ElementRef;

  constructor(private apiService: ApiService) {
    this.search = new CreateSendPaper();
    this.search2 = new ReceivePaper();
  }

  ngOnInit(): void {
    this.apiService.getListRecievePaper().subscribe(response => {
      this.elements = response;
      this.elements.reverse();
    });
  }

  filter($event) {
    const value = [$event.index];
    if (value[0] == 0) {
      this.apiService.getListRecievePaper().subscribe(response => {
        this.elements = response;
        this.elements.reverse();
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
          this.elements.reverse();
        },
        error => console.log('There is some problems: ', error)
      );
    }
  }

  title = 'Excel';

  ExportTOExcel1() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');
  }

  ExportTOExcel2() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');
  }

}
