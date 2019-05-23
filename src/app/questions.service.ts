import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getQuestions(){
    console.log("subscribing");
    return this.http.get('http://localhost:8080/questions');
  }

  getCategories(){
    console.log("Categotiiiies");
    return this.http.get('http://localhost:8080/categories');
  }
}
