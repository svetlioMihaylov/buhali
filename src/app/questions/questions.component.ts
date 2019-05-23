import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { QuestionsService } from '../questions.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent implements OnInit {
  private questions: Object;

  constructor(private questionService : QuestionsService
    ,private location: Location, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log("requesting ");
    this.questionService.getQuestions().subscribe(data => {
      this.questions = data;
      console.log(this.questions);
    });
  }

  createCategories() : void {
      console.log("this.category");
      this.router.navigate(['categories']);
  }
}
