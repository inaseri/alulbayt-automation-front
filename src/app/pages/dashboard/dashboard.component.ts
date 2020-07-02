import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {

  notifyList: any;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    const userID = localStorage.getItem('userID')
    this.apiService.get_notify(userID).subscribe(
      response => this.notifyList = response['objects']['extras'],
      error => console.log('There is some problems: ', error)
    );

    // this.apiService.view_sent_paper()
  }

}
