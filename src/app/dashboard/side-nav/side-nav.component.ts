import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(public dashboardService: DashboardService, private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe({
      next: (res) => {
        this.dashboardService.setSidebarState(false);
      }
    })
  }

}
