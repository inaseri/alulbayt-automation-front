import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { ApiService } from "../../services/api.service";
import { User } from "../../models/User/user";

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  data: User;
  selectedFile: ImageSnippet;

  constructor(
    public router: Router,
    public apiService: ApiService,
  ) {
    this.data = new User();
  }

  ngOnInit() {
    this.apiService.userInfo().subscribe(response => {
      this.data = response;
    });
  }

  updateUserInfo() {
    const uploadData = new FormData();
    uploadData.append('image', this.selectedFile.file);
    uploadData.append('first_name', this.data.first_name);
    uploadData.append('last_name', this.data.last_name);
    uploadData.append('email', this.data.email);
    this.apiService.uploadUserImage(uploadData).subscribe(response => {
      alert('به روز رسانی با موفقیت صورت گرفت.');
    });
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
