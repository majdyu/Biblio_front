import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher.model';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-professeurs',
  templateUrl: './professeurs.component.html',
  styleUrls: ['./professeurs.component.css']
})
export class ProfesseursComponent implements OnInit {
  teachers: Teacher[];

  constructor(
    private router: Router,
    private teacherService: TeacherService
  ) { }

  ngOnInit(): void {
    this.loadAllTeachers();
  }
  goToCreatePage() {
    this.router.navigate(['/createTeacher'])
  }
  loadAllTeachers() {
    this.teacherService.getAllTeachers().subscribe(res => {
      console.log(res);
      
      this.teachers = res;
    })
  }
  deleteTeacher(id: string){
    this.teacherService.deleteTeacher(id).subscribe(() => {
      this.loadAllTeachers();
    })

  }
}
