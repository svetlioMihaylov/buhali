import { Category } from "./datamodel/Category";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Result } from "./datamodel/Result";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class CategoriesService {
  
    constructor(private http: HttpClient) { }

    category : Category;
    httpOptions = {
       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    createCategories(category: Category) : Observable<Result> {
      console.log("categories");
      return this.http.post<Result>('http://localhost:8080/categories',category);
    }
  }
  