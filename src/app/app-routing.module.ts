import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { QuestionsComponent } from './questions/questions.component';
import { UsersComponent } from './users/users.component';
import { MuseumsComponent } from './museums/museums.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_services/auth.guard';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "dash", component: DashComponent, canActivate: [AuthGuard] },
  { path: "questions", component: QuestionsComponent, canActivate: [AuthGuard] },
  { path: "museums", component: MuseumsComponent, canActivate: [AuthGuard]  },
  { path: "users", component: UsersComponent, canActivate: [AuthGuard]  },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
