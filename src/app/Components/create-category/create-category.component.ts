import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  category = new Category();
  categoryId: string;
  editMode = false;
  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.categoryId = param['id'];
      if (this.categoryId) {
        this.editMode = true;
        this.categoryService.findById(this.categoryId).subscribe(res => {
          this.category = res;


        })
      }
    })
  }
  createCategory() {
    if (this.editMode) {
      this.categoryService.updateCategory(this.category).subscribe(res => {
        this.router.navigate(["/categories"])
      })
    }
    else {
      this.categoryService.createCategory(this.category).subscribe(res => {
        this.router.navigate(["/categories"])
      })
    }

  }
  returnToList() {
    this.router.navigate(["/categories"])
  }
  deleteCategory(id: string) {

  }

}
