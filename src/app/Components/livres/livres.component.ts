import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILivre } from '../../models/livre.model';
import { LivreService } from '../../services/livre.service';


@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
  displayedColumns: string[] = ['Nom', 'Auteur', 'Categorie', 'Emprunter', 'Emprunteur','Action'];
  dataSource : any;
  livres: ILivre[] = []
  constructor(
    private livreService: LivreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAllLivres();
  }
  goToCreatePage(){
    this.router.navigate(['/createLivre'])
  }
  deleteLivre(id: string){
    this.livreService.deleteLivre(id).subscribe(()=> {
      this.loadAllLivres();
    })
  }

  loadAllLivres(){
    this.livreService.getAllLivre().subscribe(res => {
      console.log(res);
      //@ts-ignore
      this.livres = res;
      this.dataSource = this.livres;
    })
  }
}
