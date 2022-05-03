import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  getAllTeachers(): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(environment.api+"/api/teachers");
  }
  createTeacher(teacher: Teacher){
    return this.http.post(environment.api+"/api/teachers", teacher);
  }
  
  getTeacherById(id: string){
    return this.http.get(environment.api+"/api/teachers/"+id);
  }
  updateTeacher(teacher: Teacher){
    return this.http.put(environment.api +"/api/teachers/"+teacher.id, teacher);
  }
  
  deleteTeacher(id: string){
    return this.http.delete(environment.api+"/api/teachers/"+id);
  }
}
