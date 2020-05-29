import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "black-dashboard-angular";
  constructor(router: Router) {
    if (localStorage.getItem('token') != null) {
      router.navigate(['home']);
    }
  }
}
