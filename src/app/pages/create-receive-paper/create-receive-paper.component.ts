  import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "../../services/api.service";
import { ReceivePaper } from "../../models/Mokatebat/receive-paper";

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-create-receive-paper',
  templateUrl: './create-receive-paper.component.html',
  styleUrls: ['./create-receive-paper.component.scss']
})
export class CreateReceivePaperComponent implements OnInit {

  data: ReceivePaper;
  selectedFile: ImageSnippet;
  error: string;
  fileUpload = {status: '', message: '', filePath: ''};

  constructor(
    public router: Router,
    public apiService: ApiService,
  ) {
    this.data = new ReceivePaper();
  }

  ngOnInit(): void {
  }

  submitForm() {
    const uploadData = new FormData();
    uploadData.append('image', this.selectedFile.file);
    uploadData.append('date', JSON.stringify(this.data.date).split('T')[0].replace('"', ''));
    uploadData.append('date_dabirkhane', JSON.stringify(this.data.date_dabirkhane).split('T')[0].replace('"', ''));
    uploadData.append('organization', this.data.organization);
    uploadData.append('subject', this.data.subject);
    this.apiService.createReceivePaper(uploadData).subscribe(
      data => {
        this.fileUpload = data;
        if (data === 201) {
          alert('ثبت نامه با موفقیت انجام گرفت.');
          this.router.navigate(['/list-receive-paper']);
          this.data.organization = '';
          this.data.subject = '';
        }
      },
      err => this.error = err
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
