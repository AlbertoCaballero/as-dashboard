import { Component, OnInit } from '@angular/core';
import { ContentService } from '../_services/content.service';
import { Question } from '../_models/Question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions: Question[] = [];
  quest: any;
  ids = [];
   

  constructor(private content: ContentService) {}

  ngOnInit(): void {
    this.content.getAllQuestionsObjects().subscribe(quest => {
      this.quest= quest;
      this.setQuestions(this.quest);
    });
  }

  setQuestions(qs) {
    for (let q of qs) {
      this.ids.push(q.payload.doc.pa.path.segments[6])
    }
    for(var id of this.ids) {
      this.questions.push(this.getQuestion(id));
    }
  }

  getQuestion(id: string) {
    let q: Question = new Question();
    this.content.readDocument("questions", id).subscribe(doc => {
      q.id = doc.payload.id;
      q.question = doc.payload.get("question");
      q.user = doc.payload.get("user");
      q.museum = doc.payload.get("museum");
      q.piece = doc.payload.get("piece");
    })
    return q;
  }
}
