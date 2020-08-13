import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { SentPaperStatus } from "../../models/sentpaperstatus/sent-paper-status";

declare const require: any;

@Component({
  selector: 'app-view-sent-paper',
  templateUrl: './view-sent-paper.component.html',
  styleUrls: ['./view-sent-paper.component.scss']
})
export class ViewSentPaperComponent implements OnInit {

  listSendPaper: any;
  id: any;
  fromCenterText = 'مدیریت مرکز جهانی آل البیت (ع)';
  lajevardi = 'سید ابراهیم لاجوردی';
  arabic = false;
  persian = true;

  constructor(private apiService: ApiService, private actRoute: ActivatedRoute,private router: Router) {
    this.id = actRoute.snapshot.params.paperID;
  }

  ngOnInit(): void {
    this.get_list_send_paper();
  }

  get_list_send_paper() {
    this.apiService.view_sent_paper(this.id).subscribe(
      response => this.listSendPaper = response,
      error => console.log('There is some problems: ', error)
    );
  }

  printA4Arabic() {
    window.open('#/print-paper/' + this.id + '/' + 'ar/' + 'A4', '', 'width=595,height=842,resizable=No,menubar=0');
  }

  printA5Arabic() {
    window.open('#/print-paper/' + this.id + '/' + 'ar/' + 'A4', '', 'width=420,height=595,resizable=0,menubar=0');
  }

  printA4Persian() {
    window.open('#/print-paper/' + this.id + '/' + 'ar/' + 'A4', '', 'width=595,height=842,resizable=0,menubar=0');
  }

  printA5Persian() {
    window.open('#/print-paper/' + this.id + '/' + 'ar/' + 'A4', '', 'width=420,height=595,resizable=0,menubar=0');
  }

  acceptPaper(id: number, status: string) {
    const data = new SentPaperStatus();
    data.id = id;
    data.status = status;
    this.apiService.sent_paper_status(data).subscribe(
      response => {
        alert('درخواست شما با موفقیت ثبت شد.');
        this.router.navigate(['list-send-paper'])
      },
      error => console.log('There is some problems: ', error)
    );
  }



}
