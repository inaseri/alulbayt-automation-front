import { Component, OnInit, NgModule } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ApiService } from "../../services/api.service";
import { MatTabsModule } from '@angular/material/tabs';
import { PreText } from "../../models/Pre_text/pre-text";
import { CreateSendPaper } from "../../models/create_send_paper/create-send-paper";

@NgModule({
  exports: [MatTabsModule]
})
@Component({
  selector: 'app-create-send-paper',
  templateUrl: './create-send-paper.component.html',
  styleUrls: ['./create-send-paper.component.scss']
})
export class CreateSendPaperComponent implements OnInit {

  attachmentArray = [];

  list_location: any;
  list_user_receive: any;
  list_subject: any;
  list_user_assign: any;
  pre_text_str: string;
  create_send_paper: CreateSendPaper;

  select_receive_user_disable = 0
  select_pre_text_disable = 0

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
  };

  constructor(private apiService: ApiService) {
    this.create_send_paper = new CreateSendPaper();
  }

  ngOnInit(): void {
    this.list_send_location();
    this.list_send_subject();
    this.list_send_user_assign();
    this.get_pre_text();
  }

  select_attachment_number(number: string) {
    this.attachmentArray = [];
    const number2 = Number(number);
    for (let i=0; i < number2; i ++) {
      this.attachmentArray.push(i.toString());
    }
    console.log(this.attachmentArray);
  }

  list_send_location() {
    this.apiService.list_location_send_paper().subscribe(
      response => this.list_location = response['objects'],
      error => console.log('There is some problem: ', error)
    );
  }

  list_send_subject() {
    this.apiService.list_subject_send_paper().subscribe(
      response => this.list_subject = response['objects'],
      error => console.log('There is some problems: ', error)
    )
  }

  list_send_user_assign() {
    this.apiService.list_assign_user().subscribe(
      response => this.list_user_assign = response['objects'],
      error => console.log('There is some problems: ', error)
    );
  }

  get_pre_text() {
    this.apiService.get_pre_text(5).subscribe(
      response => {this.pre_text_str = response['objects'].text; console.log(response['objects'].text)},
      error => console.log('There is some problems: ', error)
    );
  }

  on_change_location(location_id: string) {
    console.log(location_id)
    this.apiService.list_user_receive_filter(location_id).subscribe(
      response => { this.list_user_receive = response['objects']; this.select_receive_user_disable = 1 }
    );
  }
}
