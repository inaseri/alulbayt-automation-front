import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UserComponent } from "../../pages/user/user.component";
import { CreateReceivePaperComponent } from "../../pages/create-receive-paper/create-receive-paper.component";
import { ListReceivePaperComponent } from "../../pages/list-receive-paper/list-receive-paper.component";
import { CreateSendPaperComponent } from "../../pages/create-send-paper/create-send-paper.component";
import { ListSendPaperComponent } from "../../pages/list-send-paper/list-send-paper.component";
import { SettingsMokatebatComponent } from "../../pages/settings-mokatebat/settings-mokatebat.component";
import { SettingUserComponent } from "../../pages/setting-user/setting-user.component";
import { CreateMokebComponent } from "../../pages/create-mokeb/create-mokeb.component";
import { ListMokebComponent } from "../../pages/list-mokeb/list-mokeb.component";
import { CreateCertificateComponent} from "../../pages/create-certificate/create-certificate.component";
import { ViewSentPaperComponent } from "../../pages/view-sent-paper/view-sent-paper.component";
import { MokatebatReportComponent } from "../../pages/mokatebat-report/mokatebat-report.component";
import { EditPaperComponent } from "../../pages/edit-paper/edit-paper.component";
import { CreateInhabitancyComponent } from "../../pages/create-inhabitancy/create-inhabitancy.component";
import { ListResidenceComponent } from "../../pages/list-residence/list-residence.component";
import { EditResidenceComponent } from "../../pages/edit-residence/edit-residence.component";
import { PrintPaperComponent } from "../../pages/print-paper/print-paper.component";
import { ResidencServiceComponent } from '../../pages/residenc-service/residenc-service.component';
import {PepeolPassportComponent} from '../../pages/pepeol-passport/pepeol-passport.component';
import {PepeolPassportListComponent} from '../../pages/pepeol-passport-list/pepeol-passport-list.component';
import {PepeolPassportEditComponent} from '../../pages/pepeol-passport-edit/pepeol-passport-edit.component';
import {AtabatComponent} from "../../pages/atabat/atabat.component";
import {AtabatListComponent} from "../../pages/atabat-list/atabat-list.component";


export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-info", component: UserComponent },

  // Mokatebat Urls
  { path: 'create-receive-paper', component: CreateReceivePaperComponent },
  { path: 'list-receive-paper', component: ListReceivePaperComponent },
  { path: 'create-send-paper', component: CreateSendPaperComponent },
  { path: 'list-send-paper', component: ListSendPaperComponent },
  { path: 'mokatebat-settings', component: SettingsMokatebatComponent },
  { path: 'view-sent-paper/:paperID', component: ViewSentPaperComponent },
  { path: 'report-mokatebat', component: MokatebatReportComponent },
  { path: 'edit-paper/:editID', component: EditPaperComponent },
  { path: 'print-paper/:id/:lang/:type', component: PrintPaperComponent },

  // Mavakeb Urls
  { path: 'user-settings', component: SettingUserComponent },
  { path: 'create-mokeb', component: CreateMokebComponent},
  { path: 'list-mokeb', component: ListMokebComponent },
  { path: 'create-certificate', component: CreateCertificateComponent },

  // Residence Urls
  { path: 'create-residence', component: CreateInhabitancyComponent },
  { path: 'list-residence', component: ListResidenceComponent },
  { path: 'edit-residence/:id', component: EditResidenceComponent },
  { path: 'residence/service', component: ResidencServiceComponent },
  { path: 'passport', component: PepeolPassportComponent },
  { path: 'passport/list', component: PepeolPassportListComponent },
  { path: 'passport/edit/:id', component: PepeolPassportEditComponent },

  // Atabat Urls
  { path: 'atabat', component: AtabatComponent },
  { path: 'atabat/list', component: AtabatListComponent },
];
