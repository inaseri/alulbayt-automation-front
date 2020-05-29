import { Component, OnInit } from '@angular/core';
import { User } from "../../models/User/user";
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  data: User;

  constructor(
    public router: Router,
    public apiService: ApiService
  ) {
    this.data = new User();
  }

  ngOnInit(): void {

  }

  verify() {
    this.data.username = localStorage.getItem('username');
    this.data.password = localStorage.getItem('password');
    this.apiService.login(this.data).subscribe((response) => {
      console.log(response);
      this.apiService.token = response.token;
      localStorage.setItem('token', response.token);
      this.router.navigate(['home']);
    });
  }

}
