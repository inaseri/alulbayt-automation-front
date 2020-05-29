import { Component, OnInit } from '@angular/core';
import { User } from "../../models/User/user";
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: User;

  constructor(
    public apiService: ApiService,
    public router: Router,
  ) {
    this.data = new User();
  }

  ngOnInit() {
  }

  get_key() {
    this.apiService.get_key(this.data).subscribe(response => {
      console.log('username is:', this.data.username);
      localStorage.setItem('username', this.data.username);
      localStorage.setItem('password', this.data.password);
      console.log(localStorage.getItem('username'));
      console.log(localStorage.getItem('password'));
      this.router.navigate(['verify']);
      window.location.assign('#/verify');
    });
  }

}
