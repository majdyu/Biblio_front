import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher.model';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {
  teacher = new Teacher();
  editMode = false;
  constructor(
    private router: Router,
    private teacherService: TeacherService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }
  createTeacher(){
    if(!this.editMode){
      this.teacherService.createTeacher(this.teacher).subscribe(res => {
        this.router.navigate(["/enseignants"])
      })
    }
    else {
      this.teacherService.updateTeacher(this.teacher).subscribe(res => {
        this.router.navigate(["/enseignants"])
      })
    }
  }
  returnToList(){
    this.router.navigate(["/enseignants"])
  }
}
