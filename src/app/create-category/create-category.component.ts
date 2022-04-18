import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  category = new Category();
  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
  }
  createCategory() {
    this.categoryService.createCategory(this.category).subscribe(res => {
      this.router.navigate(["/categories"])
    })
  }
  returnToList(){
    this.router.navigate(["/categories"])
  }

}
