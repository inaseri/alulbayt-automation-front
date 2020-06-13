import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Location } from "../../models/location/location";
import { Subject } from "../../models/subject/subject";
import { UserReceive } from "../../models/user-receive";
import { User } from "../../models/User/user";
import { PreText } from "../../models/Pre_text/pre-text";
import { AngularEditorConfig } from "@kolkov/angular-editor";

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-settings-mokatebat',
  templateUrl: './settings-mokatebat.component.html',
  styleUrls: ['./settings-mokatebat.component.scss']
})
export class SettingsMokatebatComponent implements OnInit {

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

  pre_text: string;
  selectedFile: ImageSnippet;

  title_str: string;
  modal_body: any[] = [];
  closeResult: string;

  create_location: Location;
  list_location: any;

  create_subject: Subject;
  list_subject: any;

  create_user_receive: UserReceive;
  list_user_receive: any;

  list_user_assign: any;
  create_user_assign: User;

  create_pre_text: PreText;

  constructor(private modalService: NgbModal, private apiService: ApiService) {
    this.create_location = new Location();
    this.create_subject = new Subject();
    this.create_user_receive = new UserReceive();
    this.create_user_assign = new User();
    this.create_pre_text = new PreText();
  }

  open(content, title: string) {
    this.modal_body = [];
    if (title === 'لیست مکان ها دریافت نامه') {
      for (const key in this.list_location)  {
        if (this.list_location.hasOwnProperty(key)) {
          this.modal_body.push(this.list_location[key].name);
        }
      }
    } else if (title === 'لیست موضوعات نامه ها') {
      for (const key in this.list_subject)  {
        if (this.list_subject.hasOwnProperty(key)) {
          this.modal_body.push(this.list_subject[key].text);
        }
      }
    } else if (title === 'لیست اشخاص دریافت کننده نامه') {
      for (const key in this.list_user_receive)  {
        if (this.list_user_receive.hasOwnProperty(key)) {
          this.modal_body.push(this.list_user_receive[key].name);
        }
      }
    } else if (title === 'لیست اشخاص امضا کننده نامه') {
      for (const key in this.list_user_receive) {
        if (this.list_user_assign.hasOwnProperty(key)) {
          this.modal_body.push(this.list_user_assign[key].first_name.toString() + ' ' + this.list_user_assign[key].last_name.toString());
        }
      }
    }

    this.title_str = title;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.list_send_location();
    this.list_send_subject();
    this.list_receive_user();
    this.list_send_user_assign();
  }

  create_send_location() {
    this.apiService.create_location_send_paper(this.create_location).subscribe(
      response => alert('ثبت نامه با مکان دریافت با موفقیت انجام شد.'),
      error => console.log('There is some problem: ', error)
    );
  }

  list_send_location() {
    this.apiService.list_location_send_paper().subscribe(
      response => this.list_location = response['objects'],
      error => console.log('There is some problem: ', error)
    );
  }

  create_receive_user() {
    this.apiService.create_user_receive(this.create_user_receive).subscribe(
      response => alert('ثبت شخص دریافت کننده نامه با موفقیت انجام شد.'),
      error => console.log('There is some problem: ', error)
    );
  }

  list_receive_user() {
    this.apiService.list_user_receive().subscribe(
      response => this.list_user_receive = response['objects'],
      error => console.log('There is some problem: ', error)
    );
  }

  create_send_subject() {
    this.apiService.create_subject_send_paper(this.create_subject).subscribe(
      response => alert('ثبت موضوع با موفقیت انجام شد.'),
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

  create_send_user_assign() {
    const uploadData = new FormData();
    uploadData.append('sign', this.selectedFile.file);
    uploadData.append('id', this.create_user_assign.id)
    this.apiService.crete_assign_user(uploadData).subscribe(
      response => alert('مهر شخص امضا کننده با موفقیت بارگذاری گردید.'),
      error => console.log('There is some problems: ', error)
    );
  }

  crete_pre_text() {
    this.apiService.create_pre_text(this.create_pre_text).subscribe(
      response => alert('متن پیش نویس با موفقیت ایجاد گردید.'),
      error => console.log('There is some problems: ', error)
    );
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
    });
    reader.readAsDataURL(file);
  }




}
