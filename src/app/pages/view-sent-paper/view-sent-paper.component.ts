import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { ActivatedRoute } from "@angular/router";

import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

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



}
