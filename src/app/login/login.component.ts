import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { StateService } from '../_services/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  administrator: string;
  password: string;

  userEmail: string;

  constructor(public auth: AuthService, private router: Router, private state: StateService) { }

  ngOnInit(): void {
  }

  loginSubmit() {
    // alert("Admin: " + this.administrator + "\nPass: " + this.password);
    this.auth.signInEmailPassword(this.administrator, this.password, this);
  }

}
