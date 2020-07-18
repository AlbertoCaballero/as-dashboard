import { Component, OnInit } from '@angular/core';
import { ContentService } from '../_services/content.service';
import { Question } from '../_models/Question';
import { StateService } from '../_services/state.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions: Question[] = [];
  quest: any;
  ids = [];


  constructor(private content: ContentService, private state: StateService) {
    state.currentQuestions.subscribe(questions => {
      this.questions = questions;
    });
  }

  ngOnInit(): void {
    this.content.getAllQuestionsObjects().subscribe(quest => {
      this.quest = quest;
      this.setQuestions(this.quest);
    });
  }

  setQuestions(qs) {
    for (let q of qs) {
      this.ids.push(q.payload.doc.pa.path.segments[6])
    }
    let q: Question[] = [];
    for (var id of this.ids) {
      q.push(this.getQuestion(id));
    }

    this.state.changeQuestions(q);
  }

  getQuestion(id: string) {
    let q: Question = new Question();
    this.content.readDocument("questions", id).subscribe(doc => {
      q.id = doc.payload.id;
      q.question = doc.payload.get("question");
      q.user = doc.payload.get("user");
      q.museum = doc.payload.get("museum");
      q.piece = doc.payload.get("piece");
      q = this.getQuestionData(q);
    })
    return q;
  }

  getQuestionData(q: Question) {
    this.content.readDocument("users", q.user).subscribe(doc => {
      q.user = doc.payload.get("name");
    });
    this.content.readDocument("museums", q.museum).subscribe(doc => {
      q.museum = doc.payload.get("name");
    });
    this.content.readDocument("pieces", q.piece).subscribe(doc => {
      q.piece = doc.payload.get("title");
    });
    return q;
  }

  jsonToCsv(subject) {
    var json = subject.items
    var fields = Object.keys(json[0])
    var replacer = function (key, value) { return value === null ? '' : value }
    var csv = json.map(function (row) {
      return fields.map(function (fieldName) {
        return JSON.stringify(row[fieldName], replacer)
      }).join(',')
    })
    csv.unshift(fields.join(',')) // add header column
    csv = csv.join('\r\n');
    console.log(csv)
  }
}
