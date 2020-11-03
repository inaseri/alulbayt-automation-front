import { Component, OnInit } from '@angular/core';
import {MokebAdmin} from "../../models/mokeb/mokeb";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-settings-mavakeb',
  templateUrl: './settings-mavakeb.component.html',
  styleUrls: ['./settings-mavakeb.component.scss']
})
export class SettingsMavakebComponent implements OnInit {

  admin: MokebAdmin

  constructor(public apiService: ApiService) {
    this.admin = new MokebAdmin();
  }

  ngOnInit(): void {
  }

  createMokebAdmin() {
    const image = (<HTMLInputElement>document.getElementById('sign')).files[0];
    const uploadData = new FormData();
    uploadData.append('name', this.admin.name);
    uploadData.append('last_name', this.admin.lastName);
    uploadData.append('Father_name', this.admin.Father_name);
    uploadData.append('cellphone', this.admin.cellphone);
    uploadData.append('code_meli', this.admin.code_meli);
    this.admin.birthday = JSON.stringify(this.admin.birthday).split('T')[0].replace('"', '');
    uploadData.append('birthday', this.admin.birthday);
    uploadData.append('sign', image);
    console.log(uploadData);
    this.apiService.createAdminMokeb(uploadData).subscribe(
      response => alert('مدیر موکب با موفقیت ایجاد شد.'),
      error => console.log(error)
    );
  }

}
