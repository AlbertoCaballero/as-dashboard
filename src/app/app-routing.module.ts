import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { QuestionsComponent } from './questions/questions.component';


const routes: Routes = [
  { path: "", component: DashComponent },
  { path: "dash", component: DashComponent },
  { path: "questions", component: QuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
