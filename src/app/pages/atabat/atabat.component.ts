import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import  { Atabat } from "../../models/atabat";

@Component({
  selector: 'app-atabat',
  templateUrl: './atabat.component.html',
  styleUrls: ['./atabat.component.scss']
})
export class AtabatComponent implements OnInit {

  atabe: Atabat;
  constructor(private apiService: ApiService) {
    this.atabe = new Atabat();
  }

  ngOnInit(): void {
  }

  createAtabe() {
    this.apiService.create_atabe(this.atabe).subscribe(
      response => alert('عتبات با موفیت ذخیره شد')
    );
  }

}
