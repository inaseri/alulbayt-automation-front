import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  notifyList: any[] = [];
  myPaper: any;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.get_notify_IDs();
    this.get_my_paper();
  }

  get_notify_IDs() {
    let index = 0;
    this.apiService.get_notify().subscribe(
      response => {
        for (const key in response.objects) {
          if (response.objects.hasOwnProperty(key)) {
            const object = JSON.parse(response.objects[index].extra)
            const id = object.mokatebat;
            const notify = response.objects[index].id;
            this.apiService.view_sent_paper(id).subscribe(
              response2 => {
                this.notifyList.push({
                  id: response2.id,
                  text: response2.subject.text,
                  notify,
                  first_name: response2.owner.first_name,
                  last_name: response2.owner.last_name
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

  get_my_paper() {
    this.apiService.list_my_send_paper().subscribe(
      response => {
        this.myPaper = response.objects;
      },
      error => console.log('There is some problems: ', error)
    );
  }

}
