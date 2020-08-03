import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { initializeApp, firestore, auth } from 'firebase';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any>;
  access: boolean = false;


  constructor(private router: Router, private state: StateService) {
    initializeApp(environment.fireconf);
    var db = firestore();
  }

  public signInEmailPassword(email: string, password: string, context: any) {
    auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/wrong-password') {
        alert('Wrong Password');
      } else if (errorMessage == 'auth/argument-error') {
        alert('Unvalid email format');
      } else {
        alert(error.message);
      }
      context.state.changeAccessPermission(true);
    })
      .then(function (success: any) {
        if (success.user.name != '') {
          context.router.navigate(['/profile']);
          context.state.changeAccessPermission(true);
          context.state.changeUser({
            name: success.user.name,
            email: success.user.email,
            id: success.user.uid,
            last: success.user.metadata.lastSignInTime,
            creation: success.user.metadata.creationTime
          });
        } else {
          alert("Login error");
          context.router.navigate(['/login']);
          context.state.changeAccessPermission(false);
        }
      })
  }

  async signOut() {
    if (this.state.currentAccessPermission) {
      alert('Login out');
      this.state.changeAccessPermission(false);
    } else {
      alert('No active session');
    }
  }

  public createEmailPassword(email: string, password: string) {
    auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      alert(errorMessage);
    });
  }
}
