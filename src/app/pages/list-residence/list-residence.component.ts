import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";

declare const require: any;

@Component({
  selector: 'app-list-residence',
  templateUrl: './list-residence.component.html',
  styleUrls: ['./list-residence.component.scss']
})
export class ListResidenceComponent implements OnInit {

  data: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.get_residence();
  }

  get_residence() {
    this.apiService.list_residence().subscribe(
      response => {
        const persianDate = require('jalaali-js');
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            const year = response[key].date.toString().substr(0,4);
            const month = response[key].date.toString().substr(5,2);
            const day = response[key].date.toString().substr(8,2);
            const persian = persianDate.toJalaali(Number(year), Number(month), Number(day));
            const newDate = persian.jy.toString() + "/" + persian.jm.toString() + "/" + persian.jd.toString();
            response[key].date = newDate;
          }
        }
        this.data = response
      },
      error => alert('در گرفتن اطلاعات پرونده های اقامت خطایی رخ داده است. لطفا با پشتیبانی تماس بگیرید.')
    );
  }

  get_residence_detail(id: string) {
    this.apiService.selected_residence(id).subscribe(

    );
  }

}
