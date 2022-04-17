import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from '../models/etudiant.model';
import { EtudiantService } from '../services/etudiant.service';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  etudiant= new Etudiant();
  etudiantId: string;
  editMode= false;
  constructor(
    private router: Router,
    private etudiantService: EtudiantService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.etudiantId = param['id'];
     if(this.etudiantId){
      this.editMode = true;
      this.etudiantService.getEtudiantById(this.etudiantId).subscribe(res => {
        this.etudiant = res;     
        console.log(this.etudiant);
           
      })
     }
    })
  }

  createStudent(){
    if(!this.editMode){
      this.etudiantService.createEtudiant(this.etudiant).subscribe(res => {
       
        
        this.router.navigate(["/etudiants"])
      })
    }
    else {
      this.etudiantService.updateEtudiant(this.etudiant).subscribe(res => {
        this.router.navigate(["/etudiants"])
      })
    }
  }
  returnToList(){
    this.router.navigate(["/etudiants"])
  }

}
