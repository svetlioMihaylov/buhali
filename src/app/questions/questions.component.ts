import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  private questions : Object;

  constructor(private questionService : QuestionsService) { }

  ngOnInit() {
    console.log("requestung ");
    this.questionService.getQuestions().subscribe(data => {
      this.questions = data;
      console.log(this.questions);
    });
  }

}
