import { Component, OnInit } from '@angular/core';
import { StateService } from '../_services/state.service';
import { User } from '../_models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(private state: StateService) {
    state.currentUser.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit(): void {
  }

}
