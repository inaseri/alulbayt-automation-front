import { Component, OnInit } from '@angular/core';
import { User } from "../../models/User/user";
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  data: User;
  authFormGroup = new FormGroup({
    key: new FormControl('')
  });

  constructor(
    public router: Router,
    public apiService: ApiService
  ) {
    this.data = new User();
  }

  ngOnInit(): void {

  }

  verify() {
    this.data.key = this.authFormGroup.value.key;
    this.data.username = localStorage.getItem('username');
    this.data.password = localStorage.getItem('password');
    this.apiService.login(this.data).subscribe((response) => {
      this.apiService.token = response.token;
      if (response.is_superuser == true) {
        this.apiService.is_superuser = true;
      } else {
        this.apiService.is_superuser = false;
      }
      localStorage.setItem('userID', response.id)
      this.apiService.userID = response.id;
      this.apiService.token = response.token
      localStorage.setItem('token_alulbayt_automation', response.token);
      this.router.navigate(['dashboard']);
    });
  }

}
