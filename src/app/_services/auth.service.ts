import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user$: Observable<any>;
  access: boolean = false;


  constructor(private router: Router, private state: StateService) {
    firebase.initializeApp(environment.fireconf);
    var db = firebase.firestore();
  }

  public signInEmailPassword(email: string, password: string, context: any) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/wrong-password') {
        alert('Wrong Password');
      } else if(errorMessage == 'auth/argument-error') {
        alert('Unvalid email format');
      } else {
        alert(error.message);
      }
      context.state.changeAccessPermission(true);
    })
    .then(function (success){
      console.log(success);
      context.router.navigate(['/dash']);
      context.state.changeAccessPermission(true);
    })
  }

  async signOut() {
    alert("Login out");
  }

  public createEmailPassword(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      alert(errorMessage);
    });
  }
}
