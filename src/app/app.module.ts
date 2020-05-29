import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { DpDatePickerModule } from "ng2-jalali-date-picker";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { LoginComponent } from './pages/login/login.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { CreateReceivePaperComponent } from './pages/create-receive-paper/create-receive-paper.component';
import { ListReceivePaperComponent } from './pages/list-receive-paper/list-receive-paper.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    DpDatePickerModule
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, LoginComponent, VerifyComponent, CreateReceivePaperComponent, ListReceivePaperComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
