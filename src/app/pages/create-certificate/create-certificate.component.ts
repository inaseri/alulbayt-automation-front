import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-certificate',
  templateUrl: './create-certificate.component.html',
  styleUrls: ['./create-certificate.component.scss']
})
export class CreateCertificateComponent implements OnInit {

  showDetail = false;
  selectedData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
