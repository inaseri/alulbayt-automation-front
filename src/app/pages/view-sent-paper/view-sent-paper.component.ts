import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { SentPaperStatus } from "../../models/sentpaperstatus/sent-paper-status";

declare const require: any;

@Component({
  selector: 'app-view-sent-paper',
  templateUrl: './view-sent-paper.component.html',
  styleUrls: ['./view-sent-paper.component.scss']
})
export class ViewSentPaperComponent implements OnInit {

  listSendPaper: any;
  id: any;

  constructor(private apiService: ApiService, private actRoute: ActivatedRoute,private router: Router) {
    this.id = actRoute.snapshot.params.paperID;
  }

  ngOnInit(): void {
    this.get_list_send_paper();
  }

  get_list_send_paper() {
    this.apiService.view_sent_paper(this.id).subscribe(
      response => this.listSendPaper = response,
      error => console.log('There is some problems: ', error)
    );
  }

  printA4Arabic() {
    const divToPrint = document.getElementById('contentToConvert');
    const newWin=window.open('','Print-Window','width=2480,height=3508');
    newWin.document.open();
    newWin.document.write(
      '<html>' +
      '<head>' +
      '<style>' +
      '@font-face{font-family: \'BZar\'; src: url("../../../assets/fonts/B Zar_0.ttf");}' +
      ' h1 {font-size: 25px !important; font-family: BZar !important;}' +
      'p {font-size: 20px !important; font-family: BZar !important;}' +
      '@page{size: A4}' +
      '</style><body style="margin-top: 25%;" onload="window.print()">' +
      '<div class="row" ><div class="col"><p>'+ this.listSendPaper.date + '</p></div></div>' +      
      '<div class="row" style="margin-bottom: 100px;"><div class="col"><p>'+ this.id + '</p></div></div>' +  
       divToPrint.innerHTML +
      '</body></html>'
    );
    newWin.document.close();
    return true;
  }

  printA5Arabic() {
    const divToPrint = document.getElementById('contentToConvert');
    const newWin=window.open('','Print-Window','width=1748,height=2480');
    newWin.document.open();
    newWin.document.write(
      '<html>' +
      '<head>' +
      '<style>' +
      '@font-face{font-family: \'BZar\'; src: url("../../../assets/fonts/B Zar_0.ttf");}' +
      ' h1 {font-size: 20px !important; font-family: BZar !important;}' +
      'p {font-size: 10px !important; font-family: BZar !important;}' +
      '@page{size: A5}' +
      '</style><body style="margin-top: 25%;" onload="window.print()">'+
      '<div class="row" ><div class="col"><p>'+ this.listSendPaper.date + '</p></div></div>' +      
      '<div class="row" style="margin-bottom: 80px;"><div class="col"><p>'+ this.id + '</p></div></div>' +  
      divToPrint.innerHTML +
      '</body></html>'
    );
    newWin.document.close();
    return true;

  }

  printA4Persian() {

    const persianDate = require('jalaali-js');
    const year = this.listSendPaper.date.toString().substr(0,4);
    const month = this.listSendPaper.date.toString().substr(5,2);
    const day = this.listSendPaper.date.toString().substr(8,2);
    const persian = persianDate.toJalaali(Number(year), Number(month), Number(day));
    const newDate = persian.jy.toString() + "/" + persian.jm.toString() + "/" + persian.jd.toString();

    const divToPrint = document.getElementById('contentToConvert');
    const newWin=window.open('','Print-Window','width=2480,height=3508');
    newWin.document.open();
    newWin.document.write(
      '<html>' +
      '<head>' +
      '<style>' +
      '@font-face{font-family: \'BTitr\'; src: url("../../../assets/fonts/B Titr Bold_0.ttf");}' +
      'h1 {font-size: 25px !important; font-family: BTitr !important;}' +
      'p {font-size: 20px !important; font-family: BTitr !important;}' +
      '@page{size: A4}' +
      '</style><body style="margin-top: 25%;" onload="window.print()">'+ 
      '<div class="row" ><div class="col"><p>'+ newDate + '</p></div></div>' +      
      '<div class="row" style="margin-bottom: 100px;"><div class="col"><p>'+ this.id + '</p></div></div>' +  
      divToPrint.innerHTML + 
      '</body></html>'
    );
    newWin.document.close();
    return true;
  }

  printA5Persian() {

    const persianDate = require('jalaali-js');
    const year = this.listSendPaper.date.toString().substr(0,4);
    const month = this.listSendPaper.date.toString().substr(5,2);
    const day = this.listSendPaper.date.toString().substr(8,2);
    const persian = persianDate.toJalaali(Number(year), Number(month), Number(day));
    const newDate = persian.jy.toString() + "/" + persian.jm.toString() + "/" + persian.jd.toString();

    const divToPrint = document.getElementById('contentToConvert');
    const newWin=window.open('','Print-Window','width=1748,height=2480');
    newWin.document.open();
    newWin.document.write(
      '<html>' +
      '<head>' +
      '<style>' +
      '@font-face{font-family: \'BTitr\'; src: url("../../../assets/fonts/B Titr Bold_0.ttf");}' +
      'h1 {font-size: 20px !important; font-family: BTitr !important;}' +
      'p {font-size: 10px !important; font-family: BTitr !important;}' +
      '@page{size: A5}' +
      '</style><body style="margin-top: 25%;" onload="window.print()">' + 
      '<div class="row" ><div class="col"><p>'+ newDate + '</p></div></div>' +      
      '<div class="row" style="margin-bottom: 80px;"><div class="col"><p>'+ this.id + '</p></div></div>' +  
      divToPrint.innerHTML +
      '</body></html>'
    );
    newWin.document.close();
    return true;
  }



  acceptPaper(id: number, status: string) {
    const data = new SentPaperStatus();
    data.id = id;
    data.status = status;
    this.apiService.sent_paper_status(data).subscribe(
      response => {
        alert('درخواست شما با موفقیت ثبت شد.');
        this.router.navigate(['list-send-paper'])
      },
      error => console.log('There is some problems: ', error)
    );
  }



}
