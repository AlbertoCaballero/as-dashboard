import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions = [
    { id: "adfhu9hadsfh89", question: "Where was it painted?", prediction: "location", user: "Alberto Caballero", piece: "Starry Night" },
    { id: "8ajhdso899adf8", question: "Why is it dreamy?", prediction: "history", user: "Alberto Caballero", piece: "Starry Night" }
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
