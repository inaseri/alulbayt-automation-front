import { Component, OnInit, NgModule } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";
import { CreateSendPaper } from "../../models/create_send_paper/create-send-paper";
import { Attachment } from "../../models/attachment/attachment";


@Component({
  selector: 'app-create-send-paper',
  templateUrl: './create-send-paper.component.html',
  styleUrls: ['./create-send-paper.component.scss']
})
export class CreateSendPaperComponent implements OnInit {

  attachmentArray = [];
  attachment: any;

  listLocation: any;
  listUserReceive: any;
  listSubject: any;
  listUserAssign: any;
  preTextArray: any = [];

  persianDate: string;
  europeDate: string;
  persianTemp: boolean;

  createSendPaper: CreateSendPaper;

  selectReceiveUserDisable = 0
  selectPreTextDisable = 0
  selectPreTextCountDisable = 0
  showTextEditor = false

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

  constructor(private apiService: ApiService, private router: Router) {
    this.createSendPaper = new CreateSendPaper();
    this.attachment = new Attachment();
  }

  ngOnInit(): void {
    this.list_send_location();
    this.list_send_subject();
    this.list_send_user_assign();
    console.log(this.createSendPaper.subject);
  }

  select_attachment_number(number: string) {
    this.attachmentArray = [];
    const number2 = Number(number);
    for (let i=0; i < number2; i ++) {
      this.attachmentArray.push(i.toString());
    }
  }

  list_send_location() {
    this.apiService.list_location_send_paper().subscribe(
      response => this.listLocation = response['objects'],
      error => console.log('There is some problem: ', error)
    );
  }

  list_send_subject() {
    this.apiService.list_subject_send_paper().subscribe(
      response => this.listSubject = response['objects'],
      error => console.log('There is some problems: ', error)
    )
  }

  list_send_user_assign() {
    this.apiService.list_assign_user().subscribe(
      response => this.listUserAssign = response['objects'],
      error => console.log('There is some problems: ', error)
    );
  }

  on_change_location(location_id: string) {
    this.apiService.list_user_receive_filter(location_id).subscribe(
      response => { this.listUserReceive = response['objects']; this.selectReceiveUserDisable = 1 }
    );
  }

  on_change_subject(subject_id: string) {
    console.log(subject_id)
    this.apiService.get_pre_text(subject_id).subscribe(
      response => { this.preTextArray = response['objects']; this.selectPreTextDisable = 1 },
      error => console.log('There is some problems: ', error)
    );
  }

  on_change_pre_text(text: string) {
    this.selectPreTextCountDisable = 1
    this.createSendPaper.text = text
    this.showTextEditor = true
  }

  filter($event) {
    const value = [$event.index];
    if (value[0] == 0) {
      this.persianTemp = false
    } else {
      this.persianTemp = true
    }
  }

  create_send_paper() {
    if (this.persianTemp) {
      this.createSendPaper.date = JSON.stringify(this.persianDate).split('T')[0].replace('"', '');
    } else {
      this.createSendPaper.date = this.europeDate;
    }
    this.apiService.create_send_paper(this.createSendPaper).subscribe(
      response => {
        console.log('response is:', response['id']);
        const dict = {text: this.attachment, mokatebat: response['id']}
        this.apiService.save_send_paper_attachment(dict).subscribe(
          response2 => console.log(response2),
          error => console.log('There is some problems: ', error)
        );
        alert('نامه با موفقیت ارسال گردید.');
        this.router.navigate(['/list-send-paper']);
      },
      error => console.log('There is some problems: ', error)
    );
  }
}
