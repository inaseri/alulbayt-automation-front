import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { SentPaperStatus } from "../../models/sentpaperstatus/sent-paper-status";

@Component({
  selector: 'app-view-sent-paper',
  templateUrl: './view-sent-paper.component.html',
  styleUrls: ['./view-sent-paper.component.scss']
})
export class ViewSentPaperComponent implements OnInit {

  listSendPaper: any;
  id: any;

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
    document.getElementById('contentToConvert').style.fontFamily = 'BZar';
    document.getElementById('contentToConvert').style.fontSize = '16px';
    print();

    document.getElementById('contentToConvert').style.fontFamily = 'BZar';
    document.getElementById('contentToConvert').style.fontSize = '15px';
  }

  printA5Arabic() {
    document.getElementById('contentToConvert').style.fontFamily = 'BZar';
    document.getElementById('contentToConvert').style.fontSize = '14px';
    print();

    document.getElementById('contentToConvert').style.fontFamily = 'BZar';
    document.getElementById('contentToConvert').style.fontSize = '15px';
  }

  printA4Persian() {
    document.getElementById('contentToConvert').style.fontFamily = 'BTitr';
    document.getElementById('contentToConvert').style.fontSize = '16px';
    print();

    document.getElementById('contentToConvert').style.fontFamily = 'BZar';
    document.getElementById('contentToConvert').style.fontSize = '15px';
  }

  printA5Persian() {
    document.getElementById('contentToConvert').style.fontFamily = 'BTitr';
    document.getElementById('contentToConvert').style.fontSize = '14px';
    print();

    document.getElementById('contentToConvert').style.fontFamily = 'BZar';
    document.getElementById('contentToConvert').style.fontSize = '15px';
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
