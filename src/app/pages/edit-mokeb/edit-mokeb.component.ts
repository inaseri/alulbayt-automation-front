import { Component, OnInit } from '@angular/core';
import {Mokeb} from "../../models/mokeb/mokeb";
import {ApiService} from "../../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-mokeb',
  templateUrl: './edit-mokeb.component.html',
  styleUrls: ['./edit-mokeb.component.scss']
})
export class EditMokebComponent implements OnInit {

  createMokebModel: Mokeb;
  mokebAdminList: any;
  id: number;

  constructor(private apiService: ApiService, private actRoute: ActivatedRoute,private router: Router) {
    this.id = actRoute.snapshot.params.id;
    this.createMokebModel = new Mokeb();
  }

  ngOnInit(): void {
    this.getMokebAdmin();
    this.getMokeb();
  }

  getMokebAdmin() {
    this.apiService.getAdminMokeb().subscribe(
      response => this.mokebAdminList = response,
    )
  }

  getMokeb() {
    this.apiService.getMokeb(this.id).subscribe(
      response => {
        this.createMokebModel = response[0];
        console.log(this.createMokebModel);
      },
    )
  }

  updateMokeb() {
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
    this.apiService.updateMokeb(uploadData, this.id).subscribe(
      response => {
        alert('موکب با موفقیت ذخیره شده');
        this.router.navigate(['/mavakeb'])
      },
      error => alert('در ذخیره موکب مشکلی رخ داده است. مجددا تلاش کنید')
    )
  }

}
