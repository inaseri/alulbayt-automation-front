import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { DpDatePickerModule } from "ng2-jalali-date-picker";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { LoginComponent } from './pages/login/login.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { CreateReceivePaperComponent } from './pages/create-receive-paper/create-receive-paper.component';
import { ListReceivePaperComponent } from './pages/list-receive-paper/list-receive-paper.component';
import { CreateSendPaperComponent } from './pages/create-send-paper/create-send-paper.component';
import { ListSendPaperComponent } from './pages/list-send-paper/list-send-paper.component';
import { SettingsMokatebatComponent } from './pages/settings-mokatebat/settings-mokatebat.component';
import { SettingUserComponent } from './pages/setting-user/setting-user.component';
import { CreateMokebComponent } from './pages/create-mokeb/create-mokeb.component';
import { ListMokebComponent } from './pages/list-mokeb/list-mokeb.component';
import { CreateCertificateComponent } from './pages/create-certificate/create-certificate.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ViewSentPaperComponent } from './pages/view-sent-paper/view-sent-paper.component';
import { MokatebatReportComponent } from './pages/mokatebat-report/mokatebat-report.component';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { EditPaperComponent } from './pages/edit-paper/edit-paper.component';
import { CreateInhabitancyComponent } from './pages/create-inhabitancy/create-inhabitancy.component';
import { ListResidenceComponent } from './pages/list-residence/list-residence.component';

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
    DpDatePickerModule,
    CKEditorModule,
    AngularEditorModule,
    MatSelectModule,
    MatRadioModule,
    MatTabsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    Ng2FilterPipeModule
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, LoginComponent, VerifyComponent, CreateReceivePaperComponent, ListReceivePaperComponent, CreateSendPaperComponent, ListSendPaperComponent, SettingsMokatebatComponent, SettingUserComponent, CreateMokebComponent, ListMokebComponent, CreateCertificateComponent, ViewSentPaperComponent, MokatebatReportComponent, EditPaperComponent, CreateInhabitancyComponent, ListResidenceComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
