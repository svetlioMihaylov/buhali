import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Category } from '../datamodel/Category';
import { CategoriesService } from '../categories-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CATEGORIES } from '../fakeCategories';
import { logWarnings } from 'protractor/built/driverProviders';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  category : Category;

  constructor(private categoryService : CategoriesService, 
    private location: Location, 
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.category = new Category;
  }

  createCategory() : void {
    console.log("CATEGORY");
    console.log(this.category);
    
    this.categoryService.createCategories(this.category).subscribe(resp => {
      console.log(resp);
      const result = resp['active'];
      if(result == true){
        console.log("trueeeee");
        
        // FAKE CATEGORIES
        console.log(CATEGORIES);
        //this.router.navigate(['allCategories']);
        
      } else {
        console.log("FALSE");
        console.log(resp);
        this.router.navigate(['']);
      }
    });
  }
}