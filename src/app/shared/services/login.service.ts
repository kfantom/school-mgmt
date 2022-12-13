import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isUserLoggedIn: boolean = false;
  isUserLoginSubs = new BehaviorSubject(false);
  isUserLogin$ = this.isUserLoginSubs.asObservable();
  constructor() { }

  setUserLogin(isUserLogin: boolean = true) {
    this.isUserLoggedIn = isUserLogin;
    if(isUserLogin) {
      localStorage.setItem('isUserLoggedIn', 'true');
    } else {
      localStorage.removeItem('isUserLoggedIn');
    }
    this.isUserLoginSubs.next(isUserLogin);
  }

}
