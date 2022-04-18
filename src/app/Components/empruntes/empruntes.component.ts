import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emprunt } from 'src/app/models/emprunt.model';
import { IEtudiant } from 'src/app/models/etudiant.model';
import { ILivre } from 'src/app/models/livre.model';
import { EmpruntService } from 'src/app/services/emprunt.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { LivreService } from 'src/app/services/livre.service';


@Component({
  selector: 'app-empruntes',
  templateUrl: './empruntes.component.html',
  styleUrls: ['./empruntes.component.css']
})
export class EmpruntesComponent implements OnInit {
  emprunt = new Emprunt();
  livres: ILivre[] = [];
  etudiants: IEtudiant[] = [];
  submitted = false;
  dateError = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private livreService: LivreService,
    private router: Router,
    private etudiantService: EtudiantService,
    private empruntService: EmpruntService
  ) { }

  ngOnInit(): void {
    this.loadAllLivresByNotBorrowed();
    this.loadAllStudents();
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
  returnToList() {
    this.router.navigate(["/livres"])
  }
  createEmprunt() {
    this.submitted = true;
    if (this.valideForm()) {
        console.log(this.emprunt);
        this.emprunt.start = new Date(this.emprunt.start)
        this.emprunt.end = new Date(this.emprunt.end)
        this.empruntService.createEmprunt(this.emprunt).subscribe(res => {
          console.log(res);
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
      this.emprunt.student 
     
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
}
