import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-view-sent-paper',
  templateUrl: './view-sent-paper.component.html',
  styleUrls: ['./view-sent-paper.component.scss']
})
export class ViewSentPaperComponent implements OnInit {

  listSendPaper: any;
  id: any;

  constructor(private apiService: ApiService, private actRoute: ActivatedRoute) {
    console.log(actRoute.snapshot.params.paperID);
    this.id = actRoute.snapshot.params.paperID;
  }

  ngOnInit(): void {
    this.get_list_send_paper();
  }

  get_list_send_paper() {
    this.apiService.view_sent_paper(this.id).subscribe(
      response => {
        this.listSendPaper = response;
        console.log(
          this.toUTF8Array(this.listSendPaper.text)
        )
      },
      error => console.log('There is some problems: ', error)
    );
  }

  toUTF8Array(str) {
    var utf8 = [];
    for (var i=0; i < str.length; i++) {
      var charcode = str.charCodeAt(i);
      if (charcode < 0x80) utf8.push(charcode);
      else if (charcode < 0x800) {
        utf8.push(0xc0 | (charcode >> 6),
          0x80 | (charcode & 0x3f));
      }
      else if (charcode < 0xd800 || charcode >= 0xe000) {
        utf8.push(0xe0 | (charcode >> 12),
          0x80 | ((charcode>>6) & 0x3f),
          0x80 | (charcode & 0x3f));
      }
      // surrogate pair
      else {
        i++;
        charcode = ((charcode&0x3ff)<<10)|(str.charCodeAt(i)&0x3ff)
        utf8.push(0xf0 | (charcode >>18),
          0x80 | ((charcode>>12) & 0x3f),
          0x80 | ((charcode>>6) & 0x3f),
          0x80 | (charcode & 0x3f));
      }
    }
    return utf8;
  }



}
