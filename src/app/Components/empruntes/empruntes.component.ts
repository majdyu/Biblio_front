import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emprunt } from 'src/app/models/emprunt.model';
import { IEtudiant } from 'src/app/models/etudiant.model';
import { ILivre } from 'src/app/models/livre.model';
import { ITeacher } from 'src/app/models/teacher.model';
import { EmpruntService } from 'src/app/services/emprunt.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { LivreService } from 'src/app/services/livre.service';
import { TeacherService } from 'src/app/services/teacher.service';


@Component({
  selector: 'app-empruntes',
  templateUrl: './empruntes.component.html',
  styleUrls: ['./empruntes.component.css']
})
export class EmpruntesComponent implements OnInit {
  emprunt = new Emprunt();
  livres: ILivre[] = [];
  etudiants: IEtudiant[] = [];
  teachers: ITeacher[]=[];
  submitted = false;
  dateError = false;
  loanerTypes = ["Etudiant", "Enseignant"];
  selectedType: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private livreService: LivreService,
    private router: Router,
    private etudiantService: EtudiantService,
    private empruntService: EmpruntService,
    private teacherService: TeacherService
  ) { }

  ngOnInit(): void {
    this.loadAllLivresByNotBorrowed();
  }
  loadAllLivresByNotBorrowed() {
    this.livreService.findAllNotBorrowed().subscribe(res => {
      this.livres = res
    })
  }
  loadAllStudents() {
    this.etudiantService.getAllEtudiants().subscribe(res => {
      this.etudiants = res;
    })
  }
  loadAllTeachers(){
    this.teacherService.getAllTeachers().subscribe(res => {
      this.teachers = res;
    })
  }
  returnToList() {
    this.router.navigate(["/list-emprunts"])
  }
  createEmprunt() {
    this.submitted = true;
    if (this.valideForm()) {

        this.emprunt.start = new Date(this.emprunt.start)
        this.emprunt.end = new Date(this.emprunt.end)
        this.empruntService.createEmprunt(this.emprunt).subscribe(res => {
          this.router.navigate(['/list-emprunts'])
        })
    }

  }
  valideForm(): boolean {
    let result = false;
    if (
      this.endDateStartDateValidation() &&
      this.emprunt.end &&
      this.emprunt.start &&
      this.emprunt.livre &&
      this.emprunt.loaner 
     
    ) {
      result = true;
    }
    return result;
  }
  endDateStartDateValidation(): boolean {
    let start = new Date(this.emprunt.start)
    let end = new Date(this.emprunt.end)  
    if (
      start.getTime() <= end.getTime() 
    ) {
      this.dateError = false;
      return true;
    }
    else {
      this.dateError = true;
      return false;
    }
  }
  onTypeChange(type: any){
    this.emprunt.loaner = undefined
    if(type === "Etudiant"){
      this.loadAllStudents();
    }
    else this.loadAllTeachers();
  }
}
