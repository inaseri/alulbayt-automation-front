import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-create-certificate',
  templateUrl: './create-certificate.component.html',
  styleUrls: ['./create-certificate.component.scss']
})
export class CreateCertificateComponent implements OnInit {

  showDetail = false;
  selectedData: any;
  id: any;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
  }

  printMokeb() {
    document.getElementById('hideFind').style.display = 'none'
    window.print()
    window.onafterprint = () => {
      document.getElementById('hideFind').style.display = 'block'
    }
  }

  getMokeb() {
    this.apiService.getMokeb(this.id).subscribe(
      response => {
        for (let i = 0; i < response.length; i++) {
          if (response[i].location == 1) {
            response[i].locationName = 'کربلا'
          } else if (response[i].location == 2) {
            response[i].locationName = 'نجف'
          } else if (response[i].location == 3) {
            response[i].locationName = 'کاظمین'
          } else if (response[i].location == 4) {
            response[i].locationName = 'سامرا'
          } else if (response[i].location == 5) {
            response[i].locationName = 'مسیر نجف کربلا'
          } else if (response[i].location == 6) {
            response[i].locationName = 'مسیر کاظمین کربلا'
          } else if (response[i].location == 7) {
            response[i].locationName = 'مسیر بصره کربلا'
          }
        }
        this.selectedData = response[0];
        this.showDetail = true;
      }, error => alert('موکب انتخابی یافت نشد.')
    );
  }

}
