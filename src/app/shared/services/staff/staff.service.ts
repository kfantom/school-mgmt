import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid';
import { map, mergeMap, Observable, of, toArray } from 'rxjs';
import { Address } from 'src/app/model/address';
import { Staff } from 'src/app/model/staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor() { }

  getStaffList(): Observable<Staff[]> {
    let i= 1;
    return of([
      new Staff(nanoid(), 'Staff 1', [1, 2, 3, 4, 5], new Address(nanoid(), 'Delhi', 'India', '123455')),
      new Staff(nanoid(), 'Staff 2', [1, 2, 7, 3], new Address(nanoid(), 'Delhi', 'India', '123455')),
      new Staff(nanoid(), 'Staff 3', [1, 2, 8, 9], new Address(nanoid(), 'Delhi', 'India', '123455')),
      new Staff(nanoid(), 'Staff 4', [1, 2, 5, 6], new Address(nanoid(), 'Delhi', 'India', '123455')),
      new Staff(nanoid(), 'Staff 5', [4, 6, 3], new Address(nanoid(), 'Delhi', 'India', '123455')),
      new Staff(nanoid(), 'Staff 6', [3, 6, 7], new Address(nanoid(), 'Delhi', 'India', '123455')),
      new Staff(nanoid(), 'Staff 7', [2, 6, 3], new Address(nanoid(), 'Delhi', 'India', '123455')),
      new Staff(nanoid(), 'Staff 8', [8, 3, 2], new Address(nanoid(), 'Delhi', 'India', '123455')),
      new Staff(nanoid(), 'Staff 9', [2, 6, 2], new Address(nanoid(), 'Delhi', 'India', '123455'))
    ]).pipe(mergeMap(data => data), map(ele => Object.assign({}, ele, {position: i++})), toArray());
  }

}
