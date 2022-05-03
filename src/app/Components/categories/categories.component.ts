import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: ICategory[] = []
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllCategories()
  }
  goToCreatePage(){
    this.router.navigate(['/createCategory'])
  }
  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(res => {

      this.categories = res;
    })
  }
}
