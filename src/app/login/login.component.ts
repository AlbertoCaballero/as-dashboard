import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  administrator: string;
  password: string;

  userEmail: string;

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginSubmit() {
    // alert("Admin: " + this.administrator + "\nPass: " + this.password);
    this.auth.signInEmailPassword(this.administrator, this.password, this)
  }

}
