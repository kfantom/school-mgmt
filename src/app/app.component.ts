import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './shared/services/dashboard.service';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'school-mgmt';
  isUserLoggedIn: boolean = false;
  isSidebarOpened: boolean = false;
  constructor(public loginService: LoginService, public dashboardService: DashboardService,
    public router: Router) {

  }

  ngOnInit() {

    if(localStorage.getItem('isUserLoggedIn')) {
      this.loginService.setUserLogin(true);
    }

    this.loginService.isUserLogin$.subscribe({
      next: (res) => {this.isUserLoggedIn = res;
        if(!this.isUserLoggedIn) {
          this.router.navigateByUrl('/');
        }
      },
      error: (err) => {console.error(err)}
    });
    this.dashboardService.isSidebarOpen$.subscribe({
      next: (res) => {
        this.isSidebarOpened = res;
      },
      error: (err) => {
        console.error(err);
      }
    });

  }

  onCloseSidebar() {
    this.dashboardService.setSidebarState(false);
  }


}
