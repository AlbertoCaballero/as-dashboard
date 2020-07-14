import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { QuestionsComponent } from './questions/questions.component';
import { UsersComponent } from './users/users.component';
import { MuseumsComponent } from './museums/museums.component';


const routes: Routes = [
  { path: "", component: DashComponent },
  { path: "dash", component: DashComponent },
  { path: "questions", component: QuestionsComponent},
  { path: "museums", component: MuseumsComponent },
  { path: "users", component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
