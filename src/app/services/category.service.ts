import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category, ICategory } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<ICategory[]>{
    return this.http.get<ICategory[]>(environment.api+"/api/categories");
  }
  createCategory(category: Category){
    return this.http.post(environment.api+"/api/categories",category);
  }
}
