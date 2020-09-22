import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ResidencService} from '../../models/residence/service/residenc-service';

@Component({
  selector: 'app-residenc-service',
  templateUrl: './residenc-service.component.html',
  styleUrls: ['./residenc-service.component.scss']
})
export class ResidencServiceComponent implements OnInit {

  id: string;
  selectedData: any;
  showDetail = false;
  data: ResidencService;

  constructor(private apiService: ApiService) {
    this.data = new ResidencService();
  }

  ngOnInit(): void {
  }

  get_detail() {
    this.apiService.selected_residence(this.id).subscribe(
      response => {
        this.selectedData = response;
        this.showDetail = true;
      }, error => {
        alert('There is some problems.')
      }
    );
  }

  create_service() {
    const value = (<HTMLInputElement>document.getElementById('imageAttachment')).files[0];
    const uploadData = new FormData();
    uploadData.append('date', JSON.stringify(this.data.date).split('T')[0].replace('"', ''));
    uploadData.append('service', this.data.service);
    uploadData.append('image', value);
    uploadData.append('peopleresidence', this.id);
    this.apiService.create_residence_service(uploadData).subscribe(
      response => alert('خدمات با موفقیت ثبت گردید'),
      error => alert('ثبت خدمات با مشکل مواجه شد، با پشتیبانی تماس حاصل فرمایید')
    );
  }


}
