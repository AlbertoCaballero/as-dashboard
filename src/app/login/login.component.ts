import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  administrator: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

  loginSubmit() {
    alert("Admin: " + this.administrator + "\nPass: " + this.password);
  }

}
