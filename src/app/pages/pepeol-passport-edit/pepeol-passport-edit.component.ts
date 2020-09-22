import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PeoplePassport} from '../../models/people-passport/people-passport';

@Component({
  selector: 'app-pepeol-passport-edit',
  templateUrl: './pepeol-passport-edit.component.html',
  styleUrls: ['./pepeol-passport-edit.component.scss']
})
export class PepeolPassportEditComponent implements OnInit {

  id: any;
  data: PeoplePassport;

  constructor(private apiService: ApiService, private actRoute: ActivatedRoute,private router: Router) {
    this.id = actRoute.snapshot.params.id;
    this.data = new PeoplePassport();
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
    const passportonepage = (<HTMLInputElement>document.getElementById('passportonepage')).files[0];
    const requestForm = (<HTMLInputElement>document.getElementById('requestForm')).files[0];
    const uploadData = new FormData();
    uploadData.append('firstName', this.data.firstName);
    uploadData.append('lastName', this.data.lastName);
    uploadData.append('fatherName', this.data.fatherName);
    uploadData.append('nation', this.data.nation);
    uploadData.append('passportNo', this.data.passportNo);
    uploadData.append('address', this.data.address);
    uploadData.append('phone', this.data.phone);
    uploadData.append('moaref', this.data.moaref);
    uploadData.append('image', image);
    uploadData.append('passportonepage', passportonepage);
    uploadData.append('requestForm', requestForm);
    this.apiService.update_residence(uploadData, this.id).subscribe(
      response => {
        alert('به روز رسانی با موفقیت انجام شد.');
        this.router.navigate(['/list-residence'])
      },
      error => {
        alert('در به روز رسانی اطلاعات مقیم خطایی رخ داده است. لطفا مجددا تلاش کنید');
        this.router.navigate(['/passport/list'])
      }
    );
  }

}
