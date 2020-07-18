import { Component } from '@angular/core';
import { StateService } from './_services/state.service';
import { User } from './_models/User';
import { Question } from './_models/Question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Art Speaking Dashboard';
  user: User;
  questions: Question[] = [];

  constructor(private state: StateService) {
    state.currentUser.subscribe(user => {
      this.user = user;
    });
    state.currentQuestions.subscribe(questions => {
      this.questions = questions;
    })
  }

  jsonToCsv(subject) {
    subject = JSON.stringify(subject);
    this.download('data.csv', this.convertToCsv(subject));
  }

  convertToCsv(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
      var line = '';
      for (var index in array[i]) {
        if (line != '') line += ','

        line += array[i][index];
      }

      str += line + '\r\n';
    }

    return str;
  }

  download(filename: string, text: string) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
}
