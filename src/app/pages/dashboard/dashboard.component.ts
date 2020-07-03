import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {

  notifyList: any[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.get_notify_IDs();
  }

  get_notify_IDs() {
    const userID = localStorage.getItem('userID')
    let index = 0;
    this.apiService.get_notify(userID).subscribe(
      response => {
        for (const key in response) {
          if (response.hasOwnProperty(key) && response[key].length > 0) {
            const object = JSON.parse(response['objects'][index].extra)
            const id = object.mokatebat;
            const notify = response['objects'][index].id;
            this.apiService.view_sent_paper(id).subscribe(
              response2 => {
                this.notifyList.push({
                  id: response2.id,
                  text: response2['subject'].text,
                  notify: notify
                });
              },
              error => console.log(error)
            );
            index = index + 1;
          }
        }
      },
      error => console.log('There is some problems: ', error)
    );
  }


  open_notify(id: string) {
    this.apiService.road_notify(id).subscribe(
      response => console.log('The response is:', response),
      error => console.log(error)
    );
  }

}
