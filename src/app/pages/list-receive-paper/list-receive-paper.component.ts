import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-receive-paper',
  templateUrl: './list-receive-paper.component.html',
  styleUrls: ['./list-receive-paper.component.scss']
})
export class ListReceivePaperComponent implements OnInit {

  searchStringSubjects: string;
  searchStringOrganizations: string;
  elements: any;
  headElements = ['ردیف', 'شماره نامه', 'سازمان ارسال کننده', 'موضوع نامه'];

  constructor(
    public apiSerivce: ApiService,
    public router: Router
  ) {
    this.elements = [];
  }

  ngOnInit(): void {
    this.apiSerivce.getListRecievePaper().subscribe(response => {
      this.elements = response;
    });
  }


}
