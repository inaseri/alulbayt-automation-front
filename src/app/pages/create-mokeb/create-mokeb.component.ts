import { Component, OnInit } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import {Mokeb} from "../../models/mokeb/mokeb";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-create-mokeb',
  templateUrl: './create-mokeb.component.html',
  styleUrls: ['./create-mokeb.component.scss']
})
export class CreateMokebComponent implements OnInit {

  createMokebMode: Mokeb;
  constructor(private apiService: ApiService) {
    this.createMokebMode = new Mokeb();
  }

  ngOnInit(): void {
  }



}
