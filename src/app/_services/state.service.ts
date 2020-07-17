import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private sourceAccessPermission = new BehaviorSubject<boolean>(false);
  currentAccessPermission = this.sourceAccessPermission.asObservable();

  constructor() { }

  public changeAccessPermission(access: boolean) {
    this.sourceAccessPermission.next(access);
  }
}
