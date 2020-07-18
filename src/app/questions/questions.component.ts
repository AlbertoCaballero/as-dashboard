import { Component, OnInit } from '@angular/core';
import { ContentService } from '../_services/content.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions: any;
   

  constructor(private content: ContentService) {}

  ngOnInit(): void {
    this.content.getAllQuestionsObjects().subscribe(questions => {
      this.questions = questions;
      console.log(this.questions);
    });
  }
}
