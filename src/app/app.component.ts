import { Component } from '@angular/core';
import { StateService } from './_services/state.service';
import { User } from './_models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Art Speaking Dashboard';
  user: User;

  constructor(private state: StateService) {
    state.currentUser.subscribe(user => {
      this.user = user;
    });
  }
}
