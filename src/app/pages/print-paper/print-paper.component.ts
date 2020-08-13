import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-print-paper',
  templateUrl: './print-paper.component.html',
  styleUrls: ['./print-paper.component.scss']
})
export class PrintPaperComponent implements OnInit {

  id: any;
  type: any;
  lang: any;

  listSendPaper: any;

  constructor(private apiService: ApiService, private actRoute: ActivatedRoute,private router: Router) {
    this.id = actRoute.snapshot.params.id;
    this.type = actRoute.snapshot.params.type;
    this.lang = actRoute.snapshot.params.lang;
    document.getElementById('sidebar-iman').style.display = 'none';
    document.getElementById('navbar-iman').style.display = 'none';
    document.getElementById('footer-iman').style.display = 'none';
    document.getElementById('fixed-iman').style.display = 'none';

  }


  ngOnInit(): void {
    this.get_list_send_paper();
    console.log('in ts file')
    print();
  }

  get_list_send_paper() {
    this.apiService.view_sent_paper(this.id).subscribe(
      response => this.listSendPaper = response,
      error => console.log('There is some problems: ', error)
    );
  }
}
