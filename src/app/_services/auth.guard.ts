import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, take, tap } from 'rxjs/operators';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  access: boolean;

  constructor(private auth: AuthService, private router: Router, private state: StateService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.state.currentAccessPermission.pipe(
      take(1),
      map(user => !!user),
      tap(logedin => {
        if(!logedin) alert("Access denied. Please login.")
      })
    )
  }
  
}
