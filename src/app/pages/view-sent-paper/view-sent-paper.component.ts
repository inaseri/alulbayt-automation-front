import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { ActivatedRoute } from "@angular/router";
import { SentPaperStatus } from "../../models/sentpaperstatus/sent-paper-status";

@Component({
  selector: 'app-view-sent-paper',
  templateUrl: './view-sent-paper.component.html',
  styleUrls: ['./view-sent-paper.component.scss']
})
export class ViewSentPaperComponent implements OnInit {

  listSendPaper: any;
  id: any;

  constructor(private apiService: ApiService, private actRoute: ActivatedRoute) {
    console.log(actRoute.snapshot.params.paperID);
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

  captureScreen() {
    print();
  }

  acceptPaper(id: number, status: string) {
    const data = new SentPaperStatus();
    data.id = id;
    data.status = status;
    this.apiService.sent_paper_status(data).subscribe(
      response => alert('نامه با موفیت تایید شد.'),
      error => console.log('There is some problems: ', error)
    );
  }



}
