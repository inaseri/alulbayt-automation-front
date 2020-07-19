import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Residence } from "../../models/residence/residence";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-edit-residence',
  templateUrl: './edit-residence.component.html',
  styleUrls: ['./edit-residence.component.scss']
})
export class EditResidenceComponent implements OnInit {

  id: any;
  data: Residence;

  constructor(private apiService: ApiService, private actRoute: ActivatedRoute,private router: Router) {
    this.id = actRoute.snapshot.params.id;
    this.data = new Residence();
  }

  ngOnInit(): void {
    this.get_residence()
  }

  get_residence() {
    this.apiService.selected_residence(this.id).subscribe(
      response => this.data = response[0],
      error => {
        alert('در دریافت اطلاعات مقیم خطایی رخ داده است. لطفا مجددا تلاش کنید');
        this.router.navigate(['/list-residence'])
      }
    );
  }

  update_residence() {
    const image = (<HTMLInputElement>document.getElementById('image')).files[0];
    const passportImage = (<HTMLInputElement>document.getElementById('passportImage')).files[0];
    const requestForm = (<HTMLInputElement>document.getElementById('requestForm')).files[0];
    const uploadData = new FormData();

    uploadData.append('date', this.data.date);
    uploadData.append('firstName', this.data.firstName);
    uploadData.append('lastName', this.data.lastName);
    uploadData.append('fatherName', this.data.fatherName);
    uploadData.append('nation', this.data.nation);
    uploadData.append('passportNo', this.data.passportNo);
    uploadData.append('address', this.data.address);
    uploadData.append('phone', this.data.phone);
    uploadData.append('introduced', this.data.introduced);
    uploadData.append('familyFirstName', this.data.familyFirstName);
    uploadData.append('familyLastName', this.data.familyLastName);
    uploadData.append('familyNation', this.data.familyNation);
    uploadData.append('familyPhone', this.data.familyPhone);
    uploadData.append('image', image);
    uploadData.append('passportImage', passportImage);
    uploadData.append('requestForm', requestForm);
    this.apiService.update_residence(uploadData, this.id).subscribe(
      response => {
        alert('به روز رسانی با موفقیت انجام شد.');
        this.router.navigate(['/list-residence'])
      },
      error => {
        alert('در به روز رسانی اطلاعات مقیم خطایی رخ داده است. لطفا مجددا تلاش کنید');
        this.router.navigate(['/list-residence'])
      }
    );
  }

}
