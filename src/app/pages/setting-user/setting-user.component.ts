import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-setting-user',
  templateUrl: './setting-user.component.html',
  styleUrls: ['./setting-user.component.scss']
})
export class SettingUserComponent implements OnInit {

  constructor() { }
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  ngOnInit(): void {
  }

}
