import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../_models/User';
import { Question } from '../_models/Question';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private sourceAccessPermission = new BehaviorSubject<boolean>(false);
  currentAccessPermission = this.sourceAccessPermission.asObservable();

  private sourceUser = new BehaviorSubject<User>(new User);
  currentUser = this.sourceUser.asObservable();

  private sourceQuestions = new BehaviorSubject<Question[]>([]);
  currentQuestions = this.sourceQuestions.asObservable();

  constructor() { }

  public changeAccessPermission(access: boolean) {
    this.sourceAccessPermission.next(access);
  }

  public changeUser(user: User) {
    this.sourceUser.next(user);
  }

  public changeQuestions(questions: Question[]) {
    this.sourceQuestions.next(questions);
  }
}
