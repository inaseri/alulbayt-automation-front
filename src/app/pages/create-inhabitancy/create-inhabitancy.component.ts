import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Residence } from "../../models/residence/residence";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-inhabitancy',
  templateUrl: './create-inhabitancy.component.html',
  styleUrls: ['./create-inhabitancy.component.scss']
})
export class CreateInhabitancyComponent implements OnInit {

  data: Residence;
  constructor(private apiService: ApiService, private router: Router) {
    this.data = new Residence();
  }

  ngOnInit(): void {
  }

  create_residence() {
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

    this.apiService.create_residence(uploadData).subscribe(
      response => {
        alert('ثبت فرد جدید برای اقامت با موفقیت ثبت شد.');
        this.router.navigate(['/list-residence']);
      },
      error => alert('در ثبت فرد جدید برای اقامت مشکلی پیش آمده است. با پشتیبانی تماس حاصل فرمایید.')
    );
  }

}
