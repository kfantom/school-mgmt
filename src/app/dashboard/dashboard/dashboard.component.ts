import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isOpened = false;
  url: SafeResourceUrl ;
  // url: any = 'https://www.google.com/';
  constructor(private domSanitizer: DomSanitizer, private dashboardService: DashboardService,
    private loginService: LoginService) { }

  ngOnInit(): void {
    // this.url = this.url.replace("watch?v=", "v/")
    // this.url = this.domSanitizer.bypassSecurityTrustResourceUrl('https://theuselessweb.com/');
  }

  changeSidebarState() {
    this.dashboardService.setSidebarState();
  }

  logoutUser() {
    this.loginService.setUserLogin(false);
  }

}
