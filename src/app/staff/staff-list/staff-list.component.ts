import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/model/staff';
import { StaffService } from 'src/app/shared/services/staff/staff.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {

  public staffList: Staff[] = [];
  displayedColumns: string[] = ['position', 'name', 'classes', 'city'];
  constructor(public staffService: StaffService) { }

  ngOnInit(): void {
    this.staffService.getStaffList().subscribe({
      next: (res) => {
        this.staffList = res;
        console.log(this.staffList);
      }
    });
  }

}
