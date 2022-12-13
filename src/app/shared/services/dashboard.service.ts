import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private isSidebarOpen: boolean = false;
  isSidebarOpenSub = new BehaviorSubject(false);
  isSidebarOpen$ = this.isSidebarOpenSub.asObservable();
  constructor() { }

  setSidebarState(state?: boolean) {
    if (state !== undefined) {
      this.isSidebarOpen = state;
    } else {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
    this.isSidebarOpenSub.next(this.isSidebarOpen);
  }

}
