import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ApiService } from "../../services/api.service";


@Component({
  selector: 'app-create-send-paper',
  templateUrl: './create-send-paper.component.html',
  styleUrls: ['./create-send-paper.component.scss']
})
export class CreateSendPaperComponent implements OnInit {

  persian_template = false;
  arabic_template = true;

  list_location: any;
  list_user_receive: any;
  list_subject: any;
  list_user_assign: any;

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
  }

  ngOnInit(): void {
    this.list_send_location();
    this.list_receive_user();
    this.list_send_subject();
    this.list_send_user_assign();
  }

  filter(value: number) {
    if (value == 1) {
      this.persian_template = true;
      this.arabic_template = false
    } else if (value == 0) {
      this.persian_template = false;
      this.arabic_template = true;
    }
  }

  list_send_location() {
    this.apiService.list_location_send_paper().subscribe(
      response => this.list_location = response['objects'],
      error => console.log('There is some problem: ', error)
    );
  }

  list_receive_user() {
    this.apiService.list_user_receive().subscribe(
      response => this.list_user_receive = response['objects'],
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

}
