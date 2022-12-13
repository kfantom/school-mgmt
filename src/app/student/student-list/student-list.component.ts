import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/shared/services/student/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  studentList: Student[] = [];
  displayedColumns = ['rollNo', 'name', 'classNumber']
  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudentList().subscribe({
      next: (res) => {this.studentList = res;},
      error: (err) => {console.error(err)}
    });
  }

}
