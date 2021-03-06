import { Component, OnInit } from '@angular/core';
import {Mokeb} from "../../models/mokeb/mokeb";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-create-mokeb',
  templateUrl: './create-mokeb.component.html',
  styleUrls: ['./create-mokeb.component.scss']
})
export class CreateMokebComponent implements OnInit {

  createMokebModel: Mokeb;
  mokebAdminList: any;

  constructor(private apiService: ApiService) {
    this.createMokebModel = new Mokeb();
  }

  ngOnInit(): void {
    this.getMokebAdmin();
  }

  getMokebAdmin() {
    this.apiService.getAdminMokeb().subscribe(
      response => this.mokebAdminList = response,
    )
  }

  createMokeb() {
    const uploadData = new FormData();
    const sign = (<HTMLInputElement>document.getElementById('sign')).files[0];
    const request_form = (<HTMLInputElement>document.getElementById('request_form')).files[0];
    uploadData.append('sign', sign);
    uploadData.append('request_page', request_form);
    uploadData.append('name', this.createMokebModel.name);
    uploadData.append('admin_detail_org', this.createMokebModel.admin_detail_org);
    uploadData.append('agent_detail_org', this.createMokebModel.agent_detail_org);
    uploadData.append('status_org', this.createMokebModel.status_org);
    uploadData.append('location', this.createMokebModel.location);
    uploadData.append('established', JSON.stringify(this.createMokebModel.established).split('T')[0].replace('"', ''));
    this.apiService.creatMokeb(uploadData).subscribe(
      response => alert('موکب با موفقیت ذخیره شده'),
      error => alert('در ذخیره موکب مشکلی رخ داده است. مجددا تلاش کنید')
    )
  }


}
