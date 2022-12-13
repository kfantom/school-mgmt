import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    StaffListComponent,
    StaffDetailComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    MatTableModule
  ]
})
export class StaffModule { }
