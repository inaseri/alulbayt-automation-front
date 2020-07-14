import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import { User } from "../../models/User/user";


@Component({
  selector: 'app-setting-user',
  templateUrl: './setting-user.component.html',
  styleUrls: ['./setting-user.component.scss']
})

export class SettingUserComponent implements OnInit {

  permissionList = [];
  user: User;
  userList: any;

  userPermission: User;

  constructor(private apiService: ApiService) {
    this.user = new User();
    this.userPermission = new User();
  }

  ngOnInit(): void {
    this.permissionList.push({
      id: 45,
      text: 'ایجاد نامه دریافتی'
    });
    this.permissionList.push({
      id: 48,
      text: 'مشاهده نامه دریافتی'
    });
    this.permissionList.push({
      id: 29,
      text: 'ایجاد نامه ارسالی'
    });
    this.permissionList.push({
      id: 32,
      text: 'مشاهده نامه ارسالی'
    });
    this.get_user_list();
  }

  get_user_list() {
    this.apiService.users_list().subscribe(
      response => this.userList = response['objects'],
      error => console.log('There is some problem: ', error)
    );
  }

  createUser() {
    this.apiService.create_user(this.user).subscribe(
      response => alert('کاربر با نام کاربری رو به رو ساخته شد:' + response.username),
      error => console.log('There is somp problem: ', error)
    );
  }

  setPermissionForUsers() {
    console.log(this.userPermission.permid);
    this.apiService.set_permission(this.userPermission).subscribe(
      response => alert('سطح دسترسی ها با موفقیت تایید گردید.'),
      error => console.log('There is some problems: ', error)
    );
  }

}
