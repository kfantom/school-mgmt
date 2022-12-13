import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid';
import { Observable, of } from 'rxjs';
import { Student } from 'src/app/model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudentList(): Observable<Student[]> {
    return of([
      new Student(nanoid(), 'Student 1', 1, 1),
      new Student(nanoid(), 'Student 2', 2, 2),
      new Student(nanoid(), 'Student 3', 3, 3),
      new Student(nanoid(), 'Student 4', 4, 4),
      new Student(nanoid(), 'Student 5', 5, 5),
      new Student(nanoid(), 'Student 6', 6, 6),
      new Student(nanoid(), 'Student 7', 7, 7),
      new Student(nanoid(), 'Student 8', 8, 8),
      new Student(nanoid(), 'Student 9', 9, 9),
      new Student(nanoid(), 'Student 10', 10, 10),
    ]);
  }
}
