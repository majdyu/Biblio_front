import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant.model';
import { EtudiantService } from 'src/app/services/etudiant.service';



@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  etudiants: Etudiant[] = [];
  constructor(
    private etudiantService: EtudiantService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAllStudents();
  }
  loadAllStudents(){
    this.etudiantService.getAllEtudiants().subscribe(res => {
      this.etudiants = res;
    })
  }
  goToCreatePage(){
    this.router.navigate(['/createStudent'])
  }
  deleteStudent(id: string){
    this.etudiantService.deleteEtudiant(id).subscribe(()=> {
      this.loadAllStudents();
    })
  }
}
