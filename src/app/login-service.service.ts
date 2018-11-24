import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoginDetails} from './datamodel/LoginDetails';
import { Result} from './datamodel/Result';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(  private http: HttpClient) { }
  
  det : LoginDetails;
   httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  login ( details : LoginDetails ) : Observable<Result>{
  const serverLocation =  'http://localhost:8080/login';

  // let meh =  new LoginDetails(inputUsername, inputPassword);
  // let meh  = new  LoginDetails;
  // let t = meh.build(inputUsername, inputPassword);
  


    return this.http.post<Result>(serverLocation, details )
  }
}
