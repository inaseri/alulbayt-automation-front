import { Component, OnInit } from '@angular/core';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';



@Component({
  selector: 'app-create-send-paper',
  templateUrl: './create-send-paper.component.html',
  styleUrls: ['./create-send-paper.component.scss']
})
export class CreateSendPaperComponent implements OnInit {
  // public Editor = ClassicEditor

  // editorConfig = {
  //   placeholder: 'Type the content here!',
  //   color: 'black',
  // };
  persian_template = false;
  arabic_template = true;
  //
  // constructor() {
  //   this.Editor.builtinPlugins = [
  //     Alignment,
  //   ];
  // }
  //
  //
  ngOnInit(): void {
    // this.Editor.create( document.querySelector( '#editor' ), {
    //   plugins: [ Alignment ],
    //   toolbar: [ 'alignment' ]
    // } )
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

}
