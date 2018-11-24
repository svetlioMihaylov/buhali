import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { LoginServiceService} from '../login-service.service'
import { LoginDetails} from '../datamodel/LoginDetails'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  det : LoginDetails;

  // detail : LoginDetails = {
  //   username : "",
  //   password : ""
    
  // };   

  constructor(private loginService : LoginServiceService, private location: Location,   private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.det = new LoginDetails;
    this.det.build("","");
  }
  
  login(): void {
   console.log(this.det)
  this.loginService.login(this.det).subscribe(resp => {
    console.log(resp);
  const result = resp['result'];
  if(result == true){
  this.router.navigate(['questions']);
  } else {
    this.router.navigate(['']);
  }
  
  
  });
  }

}
