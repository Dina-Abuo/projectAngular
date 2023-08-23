import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isUserLogged: boolean = false;

  constructor(private authService: UserAuthService) {

  }
  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged;
  }


  login() {

    this.authService.login('userName', 'password');
    this.isUserLogged = this.authService.isUserLogged;

  }


  logout() {
    this.authService.logout();
    this.isUserLogged = this.authService.isUserLogged;
  }

}
