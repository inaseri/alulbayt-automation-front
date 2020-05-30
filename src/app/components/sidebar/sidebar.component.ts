import { Component, OnInit } from "@angular/core";

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
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
