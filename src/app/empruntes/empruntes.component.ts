import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emprunt } from '../models/emprunt.model';
import { Etudiant, IEtudiant } from '../models/etudiant.model';
import { ILivre } from '../models/livre.model';
import { EmpruntService } from '../services/emprunt.service';
import { EtudiantService } from '../services/etudiant.service';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-empruntes',
  templateUrl: './empruntes.component.html',
  styleUrls: ['./empruntes.component.css']
})
export class EmpruntesComponent implements OnInit {
  emprunt = new Emprunt();
  livres: ILivre[] = [];
  etudiants: IEtudiant[] = [];
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
  loadAllStudents(){
    this.etudiantService.getAllEtudiants().subscribe(res => {
      this.etudiants = res;
    })
  }
  returnToList(){
    this.router.navigate(["/livres"])
  }
  createEmprunt(){
    if(this.valideForm()){
      console.log(this.emprunt);
      this.emprunt.start = new Date(this.emprunt.start)
      this.emprunt.end = new Date(this.emprunt.end)
      this.empruntService.createEmprunt(this.emprunt).subscribe(res => {
        console.log(res);
      })
    }else{
      alert("invalid form")
    }
 
  }
  valideForm(): boolean {
    let result = false;
    if(
      this.emprunt.end &&
      this.emprunt.start &&
      this.emprunt.livre &&
      this.emprunt.student
    ) {
      result = true;
    }
    return result;
  }
}
