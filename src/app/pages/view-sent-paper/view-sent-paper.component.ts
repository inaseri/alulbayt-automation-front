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
        const data = this.converter(this.listSendPaper.text)
        console.log(
          data
        )
      },
      error => console.log('There is some problems: ', error)
    );
  }

  converter(text){
    let str = ''
    const array = text.replaceAll("&#","").replaceAll(" ","32;").replaceAll("(","40;").replaceAll(")","41;").replaceAll(".","46;").split(";")
    for(let key in array ){
      if(array[key].length>0)
        str = str+ String.fromCharCode(array[key]);
    }
    console.log(str);
    return str
  }



}
