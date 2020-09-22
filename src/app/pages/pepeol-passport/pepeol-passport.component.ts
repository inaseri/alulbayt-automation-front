import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import {PeoplePassport} from '../../models/people-passport/people-passport';

@Component({
  selector: 'app-pepeol-passport',
  templateUrl: './pepeol-passport.component.html',
  styleUrls: ['./pepeol-passport.component.scss']
})
export class PepeolPassportComponent implements OnInit {

  data: PeoplePassport;

  constructor(private apiService: ApiService, private router: Router) {
    this.data = new PeoplePassport();
  }

  ngOnInit(): void {
  }

  create_residence() {
    const image = (<HTMLInputElement>document.getElementById('image')).files[0];
    const requestForm = (<HTMLInputElement>document.getElementById('passportpageone')).files[0];
    const passportpageone = (<HTMLInputElement>document.getElementById('requestForm')).files[0];
    const uploadData = new FormData();
    uploadData.append('firstName', this.data.firstName);
    uploadData.append('lastName', this.data.lastName);
    uploadData.append('fatherName', this.data.fatherName);
    uploadData.append('nation', this.data.nation);
    uploadData.append('passportNo', this.data.passportNo);
    uploadData.append('address', this.data.address);
    uploadData.append('phone', this.data.phone);
    uploadData.append('introduced', this.data.moaref);
    uploadData.append('image', image);
    uploadData.append('passportpageone', passportpageone);
    uploadData.append('requestForm', requestForm);

    this.apiService.create_passport(uploadData).subscribe(
      response => {
        alert('تمدید روادید با موفقیت انجام گرفت');
        this.router.navigate(['/passport/list']);
      },
      error => alert('در تمدید روادید مشکلی پیش آمده است. با پشتیبانی تماس حاصل فرمایید.')
    );
  }

}
