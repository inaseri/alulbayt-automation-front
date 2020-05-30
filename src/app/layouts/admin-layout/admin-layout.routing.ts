import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { CreateReceivePaperComponent } from "../../pages/create-receive-paper/create-receive-paper.component";
import { ListReceivePaperComponent } from "../../pages/list-receive-paper/list-receive-paper.component";
import { CreateSendPaperComponent } from "../../pages/create-send-paper/create-send-paper.component";
import { ListSendPaperComponent } from "../../pages/list-send-paper/list-send-paper.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-info", component: UserComponent },

  // Mokatebat Urls
  { path: 'create-receive-paper', component: CreateReceivePaperComponent },
  { path: 'list-receive-paper', component: ListReceivePaperComponent },
  { path: 'create-send-paper', component: CreateSendPaperComponent },
  { path: 'list-send-paper', component: ListSendPaperComponent },

  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent }
];
