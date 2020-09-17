import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(router: Router, private apiService: ApiService) {
    if (localStorage.getItem('token_alulbayt_automation') == null) {
      router.navigate(['']);
    }
  }
}
