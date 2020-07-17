import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";


declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "داشبورد",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/create-send-paper",
    title: "ایجاد نامه ارسالی",
    rtlTitle: "ایجاد نامه ارسال",
    icon: "icon-simple-add",
    class: ""
  },
  {
    path: "/create-receive-paper",
    title: "ایجاد نامه ورودی",
    rtlTitle: "ایجاد نامه ورودی",
    icon: "icon-simple-add",
    class: "" },
  {
    path: "/list-send-paper",
    title: "فهرست نامه ارسالی",
    rtlTitle: "فهرست نامه ارسالی",
    icon: "icon-bullet-list-67",
    class: ""
  },
  {
    path: "/list-receive-paper",
    title: "فهرست نامه ورودی",
    rtlTitle: "فهرست نامه ورودی",
    icon: "icon-bullet-list-67",
    class: ""
  },
  {
    path: "/tables",
    title: "تنظیمات اداری",
    rtlTitle: "تنظیمات اداری",
    icon: "icon-settings",
    class: ""
  },
  {
    path: "/user-info",
    title: "مشخصات من",
    rtlTitle: "مشخصات من",
    icon: "icon-single-02",
    class: "",

  },
  {
    path: "/mokatebat-settings",
    title: "تنظیمات مکاتبات اداری",
    rtlTitle: "تنظیمات مکاتبات اداری",
    icon: "icon-single-02",
    class: "",

  },
  {
    path: "/user-settings",
    title: "دسترسی ها و ساخت کاربران",
    rtlTitle: "دسترسی ها و ساخت کاربران",
    icon: "icon-single-02",
    class: "",
  },
  {
    path: "/create-mokeb",
    title: "ایجاد موکب",
    rtlTitle: "ایجاد موکب",
    icon: "icon-single-02",
    class: "",
  },
  {
    path: "/list-mokeb",
    title: "فهرست مواکب",
    rtlTitle: "فهرست مواکب",
    icon: "icon-single-02",
    class: "",
  },
  {
    path: "/create-certificate",
    title: "صدور شناسنامه",
    rtlTitle: "صدور شناسنامه",
    icon: "icon-single-02",
    class: "",
  },
  {
    path: '/report-mokatebat',
    title: "گزارش گیری",
    rtlTitle: "گزارش گیری",
    icon: "icon-single-02",
    class: "",
  },
  {
    path: '/edit-paper',
    title: "اصلاح نامه",
    rtlTitle: "اصلاح نامه",
    icon: "icon-single-02",
    class: "",
  }

];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  is_superuser: boolean;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.is_superuser = this.apiService.is_superuser;
    console.log(this.is_superuser);
    console.log('super user in api service:', this.apiService.is_superuser)
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
