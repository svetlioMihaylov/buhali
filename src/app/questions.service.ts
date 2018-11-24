import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Question} from './datamodel/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }


  getQuestions(){
    console.log("subscribing");
    return this.http.get('http://localhost:8080/questions');
  }
}
