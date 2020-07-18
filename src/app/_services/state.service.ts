import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private sourceAccessPermission = new BehaviorSubject<boolean>(false);
  currentAccessPermission = this.sourceAccessPermission.asObservable();

  private sourceUser = new BehaviorSubject<User>(new User);
  currentUser = this.sourceUser.asObservable();

  constructor() { }

  public changeAccessPermission(access: boolean) {
    this.sourceAccessPermission.next(access);
  }

  public changeUser(user: User) {
    this.sourceUser.next(user);
  }
}
