import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  imgLandingPage = 'assets/landing-page.jpg';
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  setUserLogin(isUserLogin: boolean = true) {
    this.loginService.setUserLogin(isUserLogin);
    // this.go
  }

  gotoDashboard() {
    this.router.navigateByUrl('/dashboard');
  }
}
