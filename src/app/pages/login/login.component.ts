import { Component, OnInit } from '@angular/core';
import { User } from "../../models/User/user";
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: User;
  authFormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });


  constructor(
    public apiService: ApiService,
    public router: Router,
  ) {
    this.data = new User();
  }

  ngOnInit() {
  }

  get_key() {
    this.data.username = this.authFormGroup.value.username
    this.data.password = this.authFormGroup.value.password
    this.apiService.get_key(this.data).subscribe(response => {
      localStorage.setItem('username', this.data.username);
      localStorage.setItem('password', this.data.password);
      this.router.navigate(['verify']);
      window.location.assign('#/verify');
    });
  }

}
